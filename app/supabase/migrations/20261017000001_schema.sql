-- Bebelika şema v1: profiller, ilanlar (PostGIS), mesajlar, raporlar, engeller.
create extension if not exists postgis;
create extension if not exists pg_trgm;

create type listing_condition as enum ('yeni_gibi', 'iyi', 'orta');
create type listing_status as enum ('aktif', 'rezerve', 'verildi', 'gizli');
create type report_reason as enum ('dolandiricilik', 'uygunsuz_icerik', 'yasakli_urun', 'taciz', 'diger');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text check (char_length(display_name) between 2 and 40),
  avatar_path text,
  consent_kvkk_at timestamptz,       -- aydınlatma + açık rıza zamanı
  consent_location_at timestamptz,   -- konum için ayrı rıza
  created_at timestamptz not null default now()
);

create table public.categories (
  id smallint generated always as identity primary key,
  slug text unique not null,
  name text not null
);
insert into public.categories (slug, name) values
  ('giyim','Giyim'),('araba','Bebek arabası'),('mama-sandalyesi','Mama sandalyesi'),
  ('oyuncak','Oyuncak'),('beslenme','Beslenme'),('uyku','Uyku'),('diger','Diğer');

create table public.listings (
  id uuid primary key default gen_random_uuid(),
  seller_id uuid not null references public.profiles(id) on delete cascade,
  category_id smallint not null references public.categories(id),
  title text check (char_length(title) <= 80),
  description text check (char_length(description) <= 2000),
  price_try integer not null check (price_try >= 0),   -- 0 = ücretsiz
  condition listing_condition not null,
  age_min_months smallint check (age_min_months between 0 and 144),
  age_max_months smallint check (age_max_months between 0 and 144),
  location geography(Point,4326) not null,  -- yalnız yuvarlanmış nokta (trigger)
  status listing_status not null default 'aktif',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  search tsvector generated always as (
    to_tsvector('simple', coalesce(title,'') || ' ' || coalesce(description,''))) stored,
  check (age_max_months is null or age_min_months is null or age_max_months >= age_min_months)
);
create index listings_location_gix on public.listings using gist (location);
create index listings_search_idx on public.listings using gin (search);
create index listings_title_trgm on public.listings using gin (title gin_trgm_ops);
create index listings_active_idx on public.listings (status, category_id, created_at desc);

-- Gizlilik: konumu ~0.004° (~400 m) ızgaraya yuvarla; tam adres asla saklanmaz.
create function public.snap_listing_location() returns trigger
language plpgsql as $$
begin
  new.location := ST_SnapToGrid(new.location::geometry, 0.004)::geography;
  new.updated_at := now();
  return new;
end $$;
create trigger listings_snap before insert or update on public.listings
  for each row execute function public.snap_listing_location();

create table public.listing_photos (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.listings(id) on delete cascade,
  storage_path text not null,
  position smallint not null default 0
);
create index on public.listing_photos (listing_id, position);

create table public.conversations (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.listings(id) on delete cascade,
  buyer_id uuid not null references public.profiles(id) on delete cascade,
  seller_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (listing_id, buyer_id),
  check (buyer_id <> seller_id)
);
create index on public.conversations (buyer_id);
create index on public.conversations (seller_id);

create table public.messages (
  id bigint generated always as identity primary key,
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  sender_id uuid not null references public.profiles(id) on delete cascade,
  body text not null check (char_length(body) between 1 and 2000),
  created_at timestamptz not null default now(),
  read_at timestamptz
);
create index on public.messages (conversation_id, created_at);

create table public.blocks (
  blocker_id uuid not null references public.profiles(id) on delete cascade,
  blocked_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (blocker_id, blocked_id),
  check (blocker_id <> blocked_id)
);

create table public.reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid not null references public.profiles(id) on delete cascade,
  listing_id uuid references public.listings(id) on delete set null,
  reported_user_id uuid references public.profiles(id) on delete set null,
  message_id bigint references public.messages(id) on delete set null,
  reason report_reason not null,
  details text check (char_length(details) <= 1000),
  created_at timestamptz not null default now(),
  resolved_at timestamptz,
  check (listing_id is not null or reported_user_id is not null or message_id is not null)
);

-- Kayıtta otomatik profil
create function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, nullif(left(coalesce(new.raw_user_meta_data->>'full_name', ''), 40), ''))
  on conflict do nothing;
  return new;
end $$;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- E-posta doğrulanmış mı? (Apple/Google girişleri doğrulanmış gelir)
create function public.is_verified() returns boolean
language sql stable security definer set search_path = public, auth as $$
  select exists (select 1 from auth.users u
    where u.id = auth.uid() and u.email_confirmed_at is not null);
$$;

-- Yakındaki ilanlar: yarıçap 1-25 km, filtreli, mesafeye göre sıralı (RLS geçerli).
create function public.nearby_listings(
  lat double precision, lng double precision,
  radius_km numeric default 5,
  p_category smallint default null,
  p_min_price integer default null, p_max_price integer default null,
  p_age_months smallint default null,
  p_query text default null,
  p_limit integer default 30, p_offset integer default 0
) returns table (
  id uuid, title text, price_try integer, condition listing_condition,
  category_id smallint, distance_m double precision, created_at timestamptz
) language sql stable security invoker as $$
  select l.id, l.title, l.price_try, l.condition, l.category_id,
         ST_Distance(l.location, ST_SetSRID(ST_MakePoint(lng, lat), 4326)::geography) as distance_m,
         l.created_at
  from public.listings l
  where l.status = 'aktif'
    and ST_DWithin(l.location, ST_SetSRID(ST_MakePoint(lng, lat), 4326)::geography,
                   least(greatest(radius_km, 1), 25) * 1000)
    and (p_category is null or l.category_id = p_category)
    and (p_min_price is null or l.price_try >= p_min_price)
    and (p_max_price is null or l.price_try <= p_max_price)
    and (p_age_months is null or (
          (l.age_min_months is null or l.age_min_months <= p_age_months) and
          (l.age_max_months is null or l.age_max_months >= p_age_months)))
    and (p_query is null or l.search @@ plainto_tsquery('simple', p_query)
         or l.title % p_query)
  order by distance_m, l.created_at desc
  limit least(p_limit, 50) offset p_offset;
$$;
