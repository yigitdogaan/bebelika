-- K8 (docs/hukuk/moderasyon.md §9): askıdaki/banlı hesap yeni eylem yapamaz; sohbet salt okunur.
-- Tespit: 000001-000005'te hesap durumu alanı YOKTU; bu migration ekler. Geri alma: sütunları/politikaları eski haline döndür.

-- 1) Hesap durumu (yalnız service_role/moderasyon yazar)
alter table public.profiles
  add column status text not null default 'active' check (status in ('active','suspended','banned')),
  add column suspended_until timestamptz;

-- Kullanıcı kendi durumunu değiştiremesin: UPDATE yalnız profil alanlarına açık.
revoke update on public.profiles from authenticated;
grant update (display_name, avatar_path, consent_kvkk_at, consent_location_at) on public.profiles to authenticated;

-- 2) Eylem yapabilir mi? (askı süresi dolduysa tekrar true: K6)
create function public.can_act(uid uuid default auth.uid()) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles p where p.id = uid
    and (p.status = 'active' or (p.status = 'suspended' and p.suspended_until is not null and p.suspended_until <= now())));
$$;
revoke all on function public.can_act(uuid) from public, anon;
grant execute on function public.can_act(uuid) to authenticated;

-- 3) Karşı taraf için nötr sinyal (sebep/süre/askı-ban ayrımı DÖNMEZ: K2, K7)
create function public.can_message(conv uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.conversations c
    where c.id = conv and auth.uid() in (c.buyer_id, c.seller_id)
      and public.can_act(c.buyer_id) and public.can_act(c.seller_id));
$$;
revoke all on function public.can_message(uuid) from public, anon;
grant execute on function public.can_message(uuid) to authenticated;

-- 4) Politikalar: mesaj (iki taraf da aktif olmalı -> sohbet salt okunur), sohbet başlatma, ilan verme
drop policy msg_insert on public.messages;
create policy msg_insert on public.messages for insert to authenticated
  with check (
    sender_id = auth.uid() and public.is_verified() and public.can_message(conversation_id)
    and exists (select 1 from public.conversations c
      where c.id = conversation_id and auth.uid() in (c.buyer_id, c.seller_id)
        and not public.is_blocked_between(c.buyer_id, c.seller_id)));

drop policy conv_insert on public.conversations;
create policy conv_insert on public.conversations for insert to authenticated
  with check (
    buyer_id = auth.uid() and public.is_verified() and public.can_act(buyer_id) and public.can_act(seller_id)
    and seller_id = (select l.seller_id from public.listings l
                     where l.id = listing_id and l.status in ('aktif','rezerve')
                       and l.moderation_status = 'visible')
    and not public.is_blocked_between(buyer_id, seller_id));

drop policy listings_insert on public.listings;
create policy listings_insert on public.listings for insert to authenticated
  with check (seller_id = auth.uid() and public.is_verified() and public.can_act());

-- 5) Gelen kutusu: RLS'e tabi (security invoker). Son mesaj + okunmamış sayısı + yazılabilirlik.
create function public.my_inbox() returns table (
  conversation_id uuid, listing_id uuid, listing_title text, other_name text,
  last_body text, last_at timestamptz, last_sender uuid, unread_count bigint, can_message boolean)
language sql stable security invoker set search_path = public as $$
  select c.id, c.listing_id, l.title,
         p.display_name,
         m.body, coalesce(m.created_at, c.created_at), m.sender_id,
         (select count(*) from public.messages x
            where x.conversation_id = c.id and x.sender_id <> auth.uid() and x.read_at is null),
         public.can_message(c.id)
  from public.conversations c
  left join public.listings l on l.id = c.listing_id
  left join public.profiles p on p.id = case when c.buyer_id = auth.uid() then c.seller_id else c.buyer_id end
  left join lateral (select body, created_at, sender_id from public.messages
                     where conversation_id = c.id order by created_at desc limit 1) m on true
  where auth.uid() in (c.buyer_id, c.seller_id)
    and not public.is_blocked_between(c.buyer_id, c.seller_id)
  order by 6 desc
  limit 100;
$$;
revoke all on function public.my_inbox() from public, anon;
grant execute on function public.my_inbox() to authenticated;
