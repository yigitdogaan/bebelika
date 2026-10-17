# Bebelika uygulaması (Expo + Supabase)

Mimari: docs/teknik/mimari.md, giriş: docs/teknik/otp-karar.md (pilotta SMS OTP yok), demo modu: docs/teknik/mock-notu.md.

## Demo nasıl açılır (kurucu için, 5 adım)
Supabase ayarı YOKKEN uygulama kendiliğinden demo modunda açılır (12 örnek ilan, 3 sohbet; veriler sayfa yenilenince sıfırlanır).
1. vercel.com'da GitHub ile giriş yap, "Add New → Project" ile bu depoyu seç.
2. "Root Directory" olarak `app` seç (derleme ayarları `app/vercel.json`'dan gelir: `npx expo export --platform web`, çıktı `dist`).
3. Ortam değişkeni EKLEME (boş kalırsa demo modu açılır). Deploy'a bas.
4. Vercel'in verdiği adresi telefondan aç; giriş ekranında "Demo olarak gir"e dokun.
5. Dene: Keşfet → bir ilan → "Mesaj yaz"; Mesajlar sekmesi; "İlan ver" ile fotoğraflı ilan; ilanda şikâyet/engelle.
Not: konum izni vermezsen "Keşfet" boş kalabilir; demo veri İstanbul'daki sahte noktalara göre mesafelidir.

## Geliştirici kurulumu
1. `cd app && npm install`
2. Gerçek arka uç için `.env.example` -> `.env`; Supabase URL + anon key doldur (sır değil; service_role ASLA). Boş bırakırsan demo modu.
3. `supabase start && supabase db reset` (yerel) veya dev projeye `supabase db push`.
4. Web: `npm run web`; derleme: `npm run export:web`. Telefon: `npx expo run:ios|android` (Apple/Google girişi dev build ister).
5. `npm run typecheck`

## Durum
- Var: giriş, ilan CRUD+foto, keşfet, detay, şikâyet/engel, sohbet, gelen kutusu, hesap durumu (K8), demo modu.
- Sırada: taslak kayıt, konum rıza ekranı, push, moderasyon paneli.

## ONAY GEREKİR / kurucu işi
Apple Developer (Sign in with Apple), Google Cloud OAuth istemcileri, Supabase projesi (canlı için Pro) hesapları kurucu adına açılmalı.
Oluşan client ID'ler `.env`/EAS secrets'a, secret'lar Supabase panelindeki Auth ayarına girilir; repoya girmez.

## Doğrulama notu
`npm install`, `tsc` ve web export doğrulandı. Migrasyonlar (SQL) gerçek Supabase'te henüz denenmedi.
