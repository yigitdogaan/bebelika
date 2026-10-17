# Demo (mock) modu — teknik not
Tarih: 17.10.2026 · Yazan: Ece (CTO)

## Karar
`EXPO_PUBLIC_SUPABASE_URL/_ANON_KEY` tanımsızsa `src/lib/supabase.ts` gerçek istemci yerine
`src/lib/mock/client.ts` (bellek-içi Supabase taklidi) döndürür. Ekran/servis kodu DEĞİŞMEDİ; tek yer burası.
Neden: kurucunun hesap açmadan, telefonda/web'de örnek veriyle gezebilmesi; ayrıca ekranlar gerçek istemci arayüzüyle test edilmiş olur.

## Kapsam
- Taklit edilenler: `from().select/insert/update/delete/upsert/eq/neq/is/in/order/limit/single/maybeSingle`,
  RPC `nearby_listings` (kategori, fiyat, yaş, metin, yarıçap, engelli satıcı filtresi), `my_inbox`, `can_message`,
  auth (herkes girer; "Demo olarak gir"), storage (yüklenen foto blob URL olur), realtime mesaj aboneliği.
- Örnek veri: `src/lib/mock/seed.ts` — 12 ilan, 4 satıcı, 3 sohbet (pazarlık/buluşma, ücretsiz ürün, eski sohbet).
  Selin'in demo-veri.md'si gelince seed oradan güncellenir.
- Demo davranışı: kullanıcı mesaj yazınca satıcı 1,5 sn sonra otomatik cevap verir. Konum sabit (Kadıköy civarı), izin istenmez.

## Sınırlar (bilerek)
- Veri sayfa yenilenince sıfırlanır; kalıcılık yok. RLS, rate limit (P0001), K8 hesap durumu, tetikleyiciler taklit EDİLMEZ —
  bu davranışlar yalnız gerçek Supabase'te sınanır (migration'lar hâlâ denenmedi).
- Demo giriş şifresiz; yalnızca ayar yokken devreye girer. Canlıda env tanımlı olduğundan mock kodu çalışmaz (pakette kalır, veri içermez gizli bir şey yok).
- Güvenlik riski: env yanlışlıkla boş yayınlanırsa canlı sürüm demo açılır → yayın kontrol listesine "env dolu mu?" maddesi.

## Doğrulama
`npm install`, `npx tsc --noEmit`, `npx expo export --platform web` temiz; mock istemci node ile duman testinden geçti
(keşfet filtresi, gelen kutusu sayaçları, sohbet bulma, mesaj ekleme, tekrar sohbet 23505).
Tarayıcıda elle gezinme bu ortamda yapılmadı.

## Yayın
`app/vercel.json` + `app/README.md` "Demo nasıl açılır" (5 adım). Vercel hesabı kurucuya ait (ücretsiz plan yeterli).
