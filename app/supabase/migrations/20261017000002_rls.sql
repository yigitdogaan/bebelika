-- RLS: tüm tablolarda açık; varsayılan reddet.
alter table public.profiles       enable row level security;
alter table public.categories     enable row level security;
alter table public.listings       enable row level security;
alter table public.listing_photos enable row level security;
alter table public.conversations  enable row level security;
alter table public.messages       enable row level security;
alter table public.blocks         enable row level security;
alter table public.reports        enable row level security;

-- Engel yardımcısı (iki yönlü)
create function public.is_blocked_between(a uuid, b uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.blocks
    where (blocker_id = a and blocked_id = b) or (blocker_id = b and blocked_id = a));
$$;

-- categories: herkes okur
create policy categories_read on public.categories for select using (true);

-- profiles: giriş yapmış herkes okur (ad/avatar), yalnız sahibi günceller. Ekleme trigger ile.
create policy profiles_read on public.profiles for select to authenticated using (true);
create policy profiles_update_own on public.profiles for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());

-- listings: aktif ilanlar girişsiz de gezilir (karar: keşfet girişsiz); sahibi kendi tümünü görür.
create policy listings_read on public.listings for select
  using ((status in ('aktif','rezerve')
          and not (auth.uid() is not null and public.is_blocked_between(auth.uid(), seller_id)))
         or seller_id = auth.uid());
create policy listings_insert on public.listings for insert to authenticated
  with check (seller_id = auth.uid() and public.is_verified());
create policy listings_update_own on public.listings for update to authenticated
  using (seller_id = auth.uid()) with check (seller_id = auth.uid());
create policy listings_delete_own on public.listings for delete to authenticated
  using (seller_id = auth.uid());

-- listing_photos: görünür ilanın fotoğrafı görünür; yalnız ilan sahibi yazar
create policy photos_read on public.listing_photos for select
  using (exists (select 1 from public.listings l where l.id = listing_id));
create policy photos_write on public.listing_photos for all to authenticated
  using (exists (select 1 from public.listings l where l.id = listing_id and l.seller_id = auth.uid()))
  with check (exists (select 1 from public.listings l where l.id = listing_id and l.seller_id = auth.uid()));

-- conversations: yalnız iki katılımcı; alıcı başlatır, doğrulanmış ve engelsiz olmalı
create policy conv_read on public.conversations for select to authenticated
  using (auth.uid() in (buyer_id, seller_id));
create policy conv_insert on public.conversations for insert to authenticated
  with check (
    buyer_id = auth.uid() and public.is_verified()
    and seller_id = (select l.seller_id from public.listings l where l.id = listing_id)
    and not public.is_blocked_between(buyer_id, seller_id));

-- messages: yalnız katılımcı okur; gönderen kendisi, engel yoksa, doğrulanmışsa
create policy msg_read on public.messages for select to authenticated
  using (exists (select 1 from public.conversations c
    where c.id = conversation_id and auth.uid() in (c.buyer_id, c.seller_id)));
create policy msg_insert on public.messages for insert to authenticated
  with check (
    sender_id = auth.uid() and public.is_verified()
    and exists (select 1 from public.conversations c
      where c.id = conversation_id and auth.uid() in (c.buyer_id, c.seller_id)
        and not public.is_blocked_between(c.buyer_id, c.seller_id)));
-- okundu işareti: yalnız karşı taraf. Not: UPDATE tüm sütunlara açık olmasın diye sütun yetkisi kısıtlanır.
create policy msg_mark_read on public.messages for update to authenticated
  using (sender_id <> auth.uid() and exists (select 1 from public.conversations c
    where c.id = conversation_id and auth.uid() in (c.buyer_id, c.seller_id)))
  with check (sender_id <> auth.uid());
revoke update on public.messages from authenticated;
grant update (read_at) on public.messages to authenticated;

-- blocks: yalnız kendi engelleri
create policy blocks_own on public.blocks for all to authenticated
  using (blocker_id = auth.uid()) with check (blocker_id = auth.uid());

-- reports: yalnız ekleme (kendi adına); okuma/çözme sadece service_role (moderasyon)
create policy reports_insert on public.reports for insert to authenticated
  with check (reporter_id = auth.uid());

-- Realtime: mesajlar yayına eklenir (RLS yine geçerli)
alter publication supabase_realtime add table public.messages;

-- Fonksiyon yetkileri
revoke all on function public.is_verified() from public, anon;
grant execute on function public.is_verified() to authenticated;
revoke all on function public.is_blocked_between(uuid, uuid) from public, anon;
grant execute on function public.is_blocked_between(uuid, uuid) to authenticated, anon;
