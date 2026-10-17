-- 0007: kategori genişletme (docs/urun/kategoriler.md §2), ilan kaynak etiketi, kayıt kaynağı (UTM/davet kodu),
-- rıza sürümü ve hesap silme. SQL henüz bir Supabase örneğinde DOĞRULANMADI.

-- 1) Kategoriler: 4 yeni slug (id 8..11) + ad düzeltmeleri. Eski id'ler değişmez.
insert into public.categories (slug, name) values
  ('oto-koltugu','Oto koltuğu'),('bakim','Banyo ve bakım'),('anne','Anne ürünleri'),('kitap','Kitap ve gelişim')
on conflict (slug) do nothing;
update public.categories set name = 'Bebek arabası ve taşıma'            where slug = 'araba';
update public.categories set name = 'Mama sandalyesi'                      where slug = 'mama-sandalyesi';
update public.categories set name = 'Beslenme gereçleri'                   where slug = 'beslenme';  -- gıda değil, gereç

-- 2) İlan kaynağı: pilotta ekibin eklediği tohum ilanlar ile organik ilanlar ayrılabilsin (pilot-esikler ölçümü).
alter table public.listings
  add column source text not null default 'organik' check (source in ('organik','tohum'));
create index listings_source_idx on public.listings (source) where source <> 'organik';
-- İstemci kendini 'tohum' işaretleyemez: yalnız service_role/migration yazar (insert'te zorla organik).
create function public.listings_force_source() returns trigger
language plpgsql as $$
begin
  if auth.uid() is not null then  -- istemci (JWT'li) çağrısı; SQL editörü/service_role'de uid yok
    new.source := 'organik';
  end if;
  return new;
end $$;
create trigger listings_force_source before insert on public.listings
  for each row execute function public.listings_force_source();

-- 3) Kayıt kaynağı: kişisel veri OLMAYAN sade etiketler (Can: lansman.md §4).
alter table public.profiles
  add column utm_source text check (utm_source ~ '^[a-z0-9_-]{1,32}$'),
  add column invite_code text check (invite_code ~ '^[A-Za-z0-9]{4,12}$');
grant update (utm_source, invite_code) on public.profiles to authenticated;
-- Kaynak etiketi yalnız bir kez yazılabilsin (sonradan değiştirilemez).
create function public.profiles_lock_source() returns trigger
language plpgsql as $$
begin
  if old.utm_source is not null then new.utm_source := old.utm_source; end if;
  if old.invite_code is not null then new.invite_code := old.invite_code; end if;
  return new;
end $$;
create trigger profiles_lock_source before update on public.profiles
  for each row execute function public.profiles_lock_source();

-- 4) Rıza kaydı: sürüm numarası (zaman alanları zaten var). Metin sürümü docs/hukuk/sozlesme-taslak.md ile eşleşir.
alter table public.profiles
  add column consent_kvkk_version smallint,
  add column consent_location_version smallint;
grant update (consent_kvkk_version, consent_location_version) on public.profiles to authenticated;

-- 5) Hesap silme (aydınlatma metni: "uygulamadan hesap ve veri silme"). Kullanıcı kendi hesabını siler;
-- profiles/ilan/mesaj/engel satırları ON DELETE CASCADE ile gider. Storage nesnelerini istemci önce siler.
-- Yasal saklama (şikâyet kayıtları [3 yıl] TEYİT) için reports.reporter_id şu an CASCADE: avukat kararına göre
-- anonimleştirme (set null) gerekebilir — docs/teknik/aydinlatma-sema-karsilastirma.md madde 5.
create function public.delete_my_account() returns void
language plpgsql security definer set search_path = public, auth as $$
begin
  if auth.uid() is null then raise exception 'giris gerekli'; end if;
  delete from auth.users where id = auth.uid();
end $$;
revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;
