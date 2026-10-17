-- Sohbet sertleştirme (S12). Mevcut RLS (000002) üzerine; geri alınabilir.

-- 1) Boşluktan ibaret mesaj olmasın
alter table public.messages add constraint messages_body_not_blank check (char_length(btrim(body)) > 0);

-- 2) Konuşma yalnız yayındaki (aktif/rezerve, moderasyonu görünür) ilana açılır
drop policy conv_insert on public.conversations;
create policy conv_insert on public.conversations for insert to authenticated
  with check (
    buyer_id = auth.uid() and public.is_verified()
    and seller_id = (select l.seller_id from public.listings l
                     where l.id = listing_id and l.status in ('aktif','rezerve')
                       and l.moderation_status = 'visible')
    and not public.is_blocked_between(buyer_id, seller_id));

-- 3) Hız sınırı (spam/dolandırıcılık önlemi; MVP F4: günlük mesaj başlatma sınırı). Değerler pilot varsayımı.
create function public.chat_rate_limit() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if tg_table_name = 'conversations' then
    if (select count(*) from public.conversations
        where buyer_id = new.buyer_id and created_at > now() - interval '24 hours') >= 20 then
      raise exception 'gunluk sohbet baslatma siniri' using errcode = 'P0001';
    end if;
  else
    if (select count(*) from public.messages
        where sender_id = new.sender_id and created_at > now() - interval '1 minute') >= 20 then
      raise exception 'cok hizli mesaj' using errcode = 'P0001';
    end if;
  end if;
  return new;
end $$;
create trigger conv_rate before insert on public.conversations
  for each row execute function public.chat_rate_limit();
create trigger msg_rate before insert on public.messages
  for each row execute function public.chat_rate_limit();

-- 4) Mesajlar değiştirilemez/silinemez (şikâyet kanıtı): sütun yetkisi 000002'de yalnız read_at; DELETE politikası yok.
-- 5) Okunmamış sayacı için indeks
create index messages_unread_idx on public.messages (conversation_id) where read_at is null;
