# Bebelika uygulaması (Expo + Supabase)

Mimari: docs/teknik/mimari.md, giriş: docs/teknik/otp-karar.md (pilotta SMS OTP yok).

## Kurulum
1. `cd app && npm install`
2. `.env.example` -> `.env`; Supabase URL + anon key doldur (sır değil; service_role ASLA).
3. `supabase start && supabase db reset` (yerel) veya dev projeye `supabase db push`.
4. `npx expo run:ios|android` (Apple/Google girişi dev build ister, Expo Go yetmez).
5. `npm run typecheck`

## Durum
- Var: giriş (e-posta, Apple, Google), şema + RLS + `nearby_listings` RPC.
- Sırada: ilan CRUD + foto (Storage bucket + politikaları), konum arama UI, mesajlaşma+push, rapor/engel/hesap silme UI.

## ONAY GEREKİR / kurucu işi
Apple Developer (Sign in with Apple), Google Cloud OAuth istemcileri, Supabase projesi (canlı için Pro) hesapları kurucu adına açılmalı.
Oluşan client ID'ler `.env`/EAS secrets'a, secret'lar Supabase panelindeki Auth ayarına girilir; repoya girmez.

## Doğrulama notu
`npm install` ve migrasyonlar bu ortamda çalıştırılmadı; paket sürümleri ve SQL yerelde/CI'da doğrulanmalı.
