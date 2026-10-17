# İlan CRUD + Fotoğraf + Keşfet — İskelet Notu (17.10.2026, Ece)

## Yazılanlar (app/)
- `src/listings/api.ts`: createListing (ilan + foto yükleme, hata olursa ilanı geri siler), updateListing, deleteListing (storage nesnelerini de siler), myListings, discover (`nearby_listings` RPC + ilk foto).
- `src/listings/CreateListingScreen.tsx`, `DiscoverScreen.tsx`, `useLocation.ts`, `types.ts`; `App.tsx` iki sekmeli.
- `supabase/migrations/20261017000003_storage.sql`: `listing-photos` kovası (jpeg, 1 MB sınır), yazma/silme yalnız `<uid>/` klasörüne.
- package.json: expo-image-picker, expo-image-manipulator, expo-location eklendi.

## Tasarım kararları
- Foto yüklemeden önce yeniden kodlanır (1280 px, JPEG %70): EXIF/GPS silinir (KVKK), boyut düşer.
- Konum `SRID=4326;POINT(lng lat)` gönderilir; ~400 m yuvarlama DB trigger'ında (istemciye güvenilmez).
- Kova ilk sürümde PUBLIC (uuid yollu). Gizlilik gerekirse signed URL'e geçilir (TODO).

## DOĞRULANMADI (dürüst durum)
- `npm install` ve `tsc --noEmit` ÇALIŞTIRILAMADI: bu ortamda npm komutu onay gerektirdi, çalışmadı. Tip hatası olup olmadığı bilinmiyor.
- Expo SDK 52 ile paket sürümleri (`~13.0.0`, `~16.0.0`, `~18.0.0`) hafızadan yazıldı; `npx expo install --fix` ile doğrulanmalı.
- Migration'lar gerçek Supabase/PostGIS üzerinde çalıştırılmadı; storage politikaları ve RLS gerçek istekle sınanmadı.
- `fetch(uri).arrayBuffer()` ile yükleme cihazda denenmedi (RN 0.76'da çalışması beklenir).
- Kategori id'leri (1..7) şemadaki identity sırasına varsayımla bağlı.

## Eksikler (MVP F2/F3'e karşı)
- Taslak otomatik kayıt, kategoriden başlık önerisi, profil ilçesinden konum (şimdilik cihaz konumu), konum rızası ekranı (`consent_location_at` yazılmıyor).
- Keşfet girişsiz açılmıyor (RLS izin veriyor, App.tsx şimdilik giriş şart). Fiyat/yaş filtre arayüzü, sayfalama, ilanlarım ve düzenle ekranı, ilan detay.
- Yönetici moderasyon ve rapor akışı kapsam dışı.
