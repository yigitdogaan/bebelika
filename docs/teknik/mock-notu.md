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
- Örnek veri (v2, 17.10 tur 10): `src/lib/mock/seed.ts` birebir `docs/tasarim/demo-veri.md` v0.1: 12 ilan, 5 kullanıcı (u1 Elif = demo kullanıcı),
  3 sohbet (A buluşma, B IBAN uyarısı, C ücretsiz ürün). Keşfette 11 ilan (u1'in #9'u yalnız "İlanlarım"da). Zamanlar göreli (şimdi − X).
  Sıralama: mesafe(km) + 0,5 × gün. Beklenen üst sıra: body, mont, araba, kaşık — gezinti testi doğruluyor.
- Fotoğraf: yer tutucu (renkli zemin + emoji). Web'de canvas PNG üretilir; SVG data URI'si react-native-web'de yüklenmediği için
  önceki sürümde fotoğraflar BOŞ görünüyordu (gezinti testinde yakalandı, düzeltildi). Native'de SVG data URI kalır (TEYİT: cihazda denenmedi).
- Demo davranışı: karşı taraf cevabı SİMÜLE EDİLMEZ (demo-veri.md §4; önceki 1,5 sn otomatik cevap kaldırıldı). Buluşma kartı statik bilgi notu
  (`sender_id = null` sistem mesajı). Konum sabit, izin istenmez. Ekranda kapatılamayan "Demo verisi" bandı. Şikâyet sonucunda "Demo modunda gönderilmez".
- Okunmamış sayıları demo-veri.md §3'e uyumlu (A=1, C=2) ama mantıksal tutarsız: kullanıcı son mesajı yazmış olsa da karşı mesaj "okunmamış" kalıyor.
  Selin'e not: senaryo sonlarında karşı taraf son konuşan olursa daha tutarlı olur.

## Sınırlar (bilerek)
- Veri sayfa yenilenince sıfırlanır; kalıcılık yok. RLS, rate limit (P0001), K8 hesap durumu, tetikleyiciler taklit EDİLMEZ —
  bu davranışlar yalnız gerçek Supabase'te sınanır (migration'lar hâlâ denenmedi).
- Demo giriş şifresiz; yalnızca ayar yokken devreye girer. Canlıda env tanımlı olduğundan mock kodu çalışmaz (pakette kalır, veri içermez gizli bir şey yok).
- Güvenlik riski: env yanlışlıkla boş yayınlanırsa canlı sürüm demo açılır → yayın kontrol listesine "env dolu mu?" maddesi.

## Doğrulama
`npm install`, `npx tsc --noEmit`, `npx expo export --platform web` temiz; mock istemci node ile duman testinden geçti
(keşfet filtresi, gelen kutusu sayaçları, sohbet bulma, mesaj ekleme, tekrar sohbet 23505).
Tarayıcı gezinti testi: `node scripts/gezinti-testi.cjs` (24 kontrol, hepsi geçti; bulgular docs/teknik/gezinti-testi.md).

## Yayın
`app/vercel.json` + `app/README.md` "Demo nasıl açılır" (5 adım). Vercel hesabı kurucuya ait (ücretsiz plan yeterli).
