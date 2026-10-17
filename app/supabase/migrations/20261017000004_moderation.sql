-- Şikâyet + engelleme + moderasyon (docs/hukuk/moderasyon.md §7). blocks ve reports v1 şemasında var; burada genişletilir.

-- 1) reports genişletme (kategori C1-C7, durum, öncelik)
alter table public.reports alter column reason drop not null;  -- yerini category aldı; eski sütun geriye uyum için kalır
alter table public.reports
  add column category text not null default 'C7' check (category in ('C1','C2','C3','C4','C5','C6','C7')),
  add column status text not null default 'open' check (status in ('open','in_review','actioned','dismissed','appealed')),
  add column priority text not null default 'P2' check (priority in ('P0','P1','P2')),
  add column also_blocked boolean not null default false,
  add column auto_hidden boolean not null default false,
  add column assigned_to uuid references public.profiles(id) on delete set null,
  add column first_response_at timestamptz;
create index reports_queue_idx on public.reports (status, priority, created_at);
-- Aynı kullanıcı aynı nesneye tek şikâyet (şikâyet bombardımanı önlemi)
create unique index reports_one_per_listing on public.reports (reporter_id, listing_id) where listing_id is not null;
create unique index reports_one_per_user    on public.reports (reporter_id, reported_user_id)
  where reported_user_id is not null and listing_id is null and message_id is null;
create unique index reports_one_per_message on public.reports (reporter_id, message_id) where message_id is not null;

-- Kategori -> öncelik (istemciye güvenilmez), kendini şikâyet engeli
create function public.reports_before_insert() returns trigger
language plpgsql as $$
begin
  new.priority := case when new.category in ('C1','C2','C3') then 'P0'
                       when new.category in ('C4','C5') then 'P1' else 'P2' end;
  new.status := 'open'; new.auto_hidden := false; new.assigned_to := null;
  new.first_response_at := null; new.resolved_at := null;
  if new.reported_user_id = new.reporter_id then raise exception 'kendini sikayet edemezsin'; end if;
  return new;
end $$;
create trigger reports_before_ins before insert on public.reports
  for each row execute function public.reports_before_insert();

-- 2) ilan moderasyon durumu
create type listing_moderation as enum ('visible', 'hidden_auto', 'removed');
alter table public.listings
  add column moderation_status listing_moderation not null default 'visible',
  add column removed_reason_code text,
  add column removed_at timestamptz;

-- 3) otomatik gizleme: aynı ilana >=3 farklı kullanıcı (pilot N=3) ya da C1/C2 -> geçici gizle, insan inceler.
create function public.reports_auto_hide() returns trigger
language plpgsql security definer set search_path = public as $$
declare n int;
begin
  if new.listing_id is null then return new; end if;
  select count(distinct reporter_id) into n from public.reports
    where listing_id = new.listing_id and status in ('open','in_review');
  if n >= 3 or new.category in ('C1','C2') then
    update public.listings set moderation_status = 'hidden_auto'
      where id = new.listing_id and moderation_status = 'visible';
    update public.reports set auto_hidden = true where id = new.id;
  end if;
  return new;
end $$;
create trigger reports_after_ins after insert on public.reports
  for each row execute function public.reports_auto_hide();

-- 4) moderasyon aksiyonları, itiraz, denetim logu
create table public.moderation_actions (
  id uuid primary key default gen_random_uuid(),
  report_id uuid references public.reports(id) on delete set null,
  target_type text not null check (target_type in ('listing','user','message')),
  target_id text not null,
  target_user_id uuid references public.profiles(id) on delete set null,  -- bildirim/itiraz hakkı sahibi
  action text not null check (action in ('A0','A1','A2','A3','A4')),
  policy_code text not null,
  reason_note text,
  actor_id uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  expires_at timestamptz,
  reverted_at timestamptz,
  reverted_by uuid references public.profiles(id) on delete set null
);
create table public.appeals (
  id uuid primary key default gen_random_uuid(),
  action_id uuid not null references public.moderation_actions(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  text text not null check (char_length(text) between 1 and 2000),
  status text not null default 'open' check (status in ('open','accepted','rejected')),
  reviewer_id uuid references public.profiles(id) on delete set null,
  decision text,
  created_at timestamptz not null default now(),
  decided_at timestamptz,
  unique (action_id, user_id)
);
create table public.audit_log (
  id bigint generated always as identity primary key,
  actor_id uuid, action text not null, object_type text, object_id text,
  created_at timestamptz not null default now()
);

-- İtirazı inceleyen, kararı veren kişiden farklı olmalı
create function public.appeals_reviewer_check() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.reviewer_id is not null and exists (
    select 1 from public.moderation_actions a where a.id = new.action_id and a.actor_id = new.reviewer_id)
  then raise exception 'karari veren itirazi inceleyemez'; end if;
  return new;
end $$;
create trigger appeals_reviewer_chk before insert or update on public.appeals
  for each row execute function public.appeals_reviewer_check();

-- 5) RLS
alter table public.moderation_actions enable row level security;
alter table public.appeals enable row level security;
alter table public.audit_log enable row level security;  -- politika yok: yalnız service_role

-- reports: ekleme (yalnız izinli sütunlar), kendi şikâyetlerini okuma. Çözme / hepsini okuma: service_role.
drop policy reports_insert on public.reports;
create policy reports_insert on public.reports for insert to authenticated
  with check (reporter_id = auth.uid() and public.is_verified());
create policy reports_read_own on public.reports for select to authenticated
  using (reporter_id = auth.uid());
revoke insert, update on public.reports from authenticated;
grant insert (reporter_id, listing_id, reported_user_id, message_id, category, details, also_blocked)
  on public.reports to authenticated;

-- moderation_actions: yalnız hedef kullanıcı kendi kararını okur (şikâyetçi kimliği bu tabloda yok)
create policy actions_read_target on public.moderation_actions for select to authenticated
  using (target_user_id = auth.uid());
-- appeals: kendi kararına itiraz; yalnız kendi itirazını okur; karar sütunlarını yazamaz.
create policy appeals_insert on public.appeals for insert to authenticated
  with check (user_id = auth.uid() and exists (
    select 1 from public.moderation_actions a where a.id = action_id and a.target_user_id = auth.uid()));
create policy appeals_read_own on public.appeals for select to authenticated using (user_id = auth.uid());
revoke insert on public.appeals from authenticated;
grant insert (action_id, user_id, text) on public.appeals to authenticated;

-- listings: sahibi moderasyon sütunlarını değiştiremez (ilanını kendi geri açamaz)
revoke update on public.listings from authenticated;
grant update (category_id, title, description, price_try, condition, age_min_months, age_max_months, location, status)
  on public.listings to authenticated;
drop policy listings_read on public.listings;
create policy listings_read on public.listings for select
  using ((status in ('aktif','rezerve') and moderation_status = 'visible'
          and not (auth.uid() is not null and public.is_blocked_between(auth.uid(), seller_id)))
         or seller_id = auth.uid());

-- Keşfet RPC: aynı imza, gövdeye moderasyon filtresi (sahibine bile keşfette gizli ilan görünmesin)
create or replace function public.nearby_listings(
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
  where l.status = 'aktif' and l.moderation_status = 'visible'
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
