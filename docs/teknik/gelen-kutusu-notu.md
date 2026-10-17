# Gelen kutusu + K8 teyidi (Ece, 2026-10-17)

## K8 sonucu
- 0001-0005'te hesap durumu (users.status) YOKTU: askıdaki hesap mesaj atabilirdi. Boşluk gerçekti.
- `app/supabase/migrations/20261017000006_account_status.sql`:
  - `profiles.status` (active/suspended/banned) + `suspended_until`. Kullanıcı UPDATE yetkisi sütun bazında daraltıldı (kendi durumunu değiştiremez).
  - `can_act()`: aktif ya da askı süresi dolmuş (K6). `can_message(conv)`: iki taraf da aktif mi.
  - `msg_insert`, `conv_insert`, `listings_insert` bu fonksiyonlarla güncellendi -> sohbet salt okunur (K1).
  - Sebep/süre/askı-ban ayrımı karşı tarafa dönmez (K2, K7): yalnız "şu an mesajlaşamıyor".
- Not: moderasyon tarafı `profiles.status`i service_role ile yazar. Moderasyon paneli henüz yok (sonra).
- Murat'ın moderasyon.md'sindeki "users" = Supabase'de `profiles` tablosu.

## Gelen kutusu
- `my_inbox()` RPC (security invoker, RLS geçerli): son mesaj, okunmamış sayısı, can_message; engelli sohbetler gizli; ilk 100.
- `src/chat/inbox.ts`, `InboxScreen.tsx`; alt çubukta "Mesajlar". Realtime ile yeni mesajda liste tazelenir.
- ChatScreen: `can_message` false ise yazma alanı yerine salt-okunur bildirimi.

## Push (SADECE NOT, uygulanmadı)
- Expo Push (ücretsiz) + `push_tokens(user_id, token)` tablosu; mesaj INSERT'inde Supabase Database Webhook -> Edge Function -> Expo Push API.
- Bildirim gövdesinde mesaj metni yok ("Yeni mesajın var"), KVKK/ekran kilidi gizliliği. İzin ilk mesaj sonrası istenir.
- iOS için APNs anahtarı = Apple Developer hesabı gerekir (kurucu). Askıdaki hesaba push gitmez.

## DOĞRULANMADI
- Migration 0006 gerçek Postgres/Supabase'de ÇALIŞTIRILMADI (hesap yok); SQL söz dizimi yalnız okuma ile kontrol edildi.
- RLS davranışı (askı -> insert reddi, my_inbox sonuçları) test edilmedi; Supabase hesabı gelince pgTAP/elle test.
- Gelen kutusu ve salt-okunur UI gerçek veriyle görülmedi. Doğrulananlar: `tsc --noEmit` temiz, `expo export --platform web` başarılı.
- Web derlemesi `.env`'siz çalışma anında `supabase.ts` içinde hata fırlatır (EXPO_PUBLIC_SUPABASE_*); mock modu ayrı iş.
