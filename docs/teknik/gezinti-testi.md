# Demo gezinti testi — bulgular (tur 10)
Tarih: 17.10.2026 · Yazan: Ece (CTO) · Girdi: docs/urun/demo-senaryo.md, docs/tasarim/demo-veri.md

## Yöntem
`node scripts/gezinti-testi.cjs`: `app/dist` (expo export web) yerel sunucudan, 390×844 telefon ekranında, Chrome (playwright-core) ile otomatik gezilir.
Elle "göz" kontrolü ekran görüntüleriyle yapıldı (/tmp/gezinti/*.png, repoda tutulmaz). Önce `cd app && npx expo export --platform web`.
Sınır: gerçek telefon cihazı ve dokunma hissi denenmedi; fotoğraf seçici (ImagePicker) otomatikleştirilmedi, "ilan yayınla" adımı uçtan uca yapılmadı.

## Sonuç: 24/24 kontrol geçti (düzeltmelerden sonra)
Demo bandı · keşfette 11 ilan ve beklenen sıra · kendi ilanım keşfette yok · kategori+3 km filtresi · boş sonuç + "Mesafeyi genişlet" · ilan detay ·
detay menüsü (şikâyet/engelle) · şikâyet akışı (+demo notu) · sohbet, hızlı yanıt, mesaj gönderme · statik buluşma notu · gelen kutusu (3 sohbet) ·
IBAN uyarı bandı · ilan ver (yasaklı satırı, oto koltuğu beyanı, başlık uyarısı) · profil + hesap silme · konsol hatası yok.

## Bulunan ve DÜZELTİLEN hatalar
1. **Fotoğraflar hiç görünmüyordu** (liste ve detay boş beyaz). SVG data URI react-native-web'de yüklenmiyor. Web'de canvas PNG üretildi.
2. **Kategori çipleri 2 px'e sıkışıyordu** (yatay FlatList flexShrink). `flexShrink:0, minHeight:48`.
3. **Alert.alert web'de çalışmıyor** → "Engelle" onayı ve tüm hata uyarıları görünmezdi (kullanıcı tıklar, hiçbir şey olmaz). `src/lib/dialog.ts` (web'de window.confirm/alert).
4. **Düğme metinleri yanlış büyük harf** ("GIRIŞ YAP", "BEBEK ARABASI" yerine İ eksik): html lang=en. Web'de `lang=tr` atanıyor.
5. **Fiyat biçimi** keşfette "2400 ₺" idi → "2.400 ₺" (akislar §13 sayı biçimi).
6. Mesafe yarıçapı varsayılanı 5 km, Maltepe ilanı (6,1 km) listeden düşüyordu → varsayılan 10 km (pilot: iki ilçe + komşular).
7. Mock'ta karşıdan gelen IBAN uyarısı yoktu (yalnız yazarken); karşı mesajda IBAN/“iban” geçince bant eklendi (engelleme yok).

## AÇIK bulgular (kimin işi)
- **Ürün/Tasarım:** Onboarding (S1-S3), ilçe seçimi "demo girişi"nde yok; Keşfet ekranı üstünde boş ~100 px (iç boşluk). Düğmeler hâlâ iskelet `Button` (büyük harf, tek renk) — Selin'in tasarım sistemi uygulanmadı.
- **Tasarım:** demo senaryo adım 10 "Profil/rozet" için profilde puan/teslim yok (F6-F7 kodda yok); profil bilerek yalın ("Yeni üye · N ilan").
- **Ürün:** buluşma önerisi/teslim onayı hâlâ "yakında" (yalnız sohbette statik not).
- **Ece (sonra):** sıralama formülü yalnız mock'ta; gerçek `nearby_listings` SQL'i hâlâ mesafeye göre — yenilik bileşeni eklenmeli (migration).
- **Doğrulanmadı:** tüm migration'lar (0001-0007) gerçek bir Supabase/PostGIS'te hiç çalıştırılmadı; bu ortamda Postgres sunucusu yok.
- Demo'da ilan yayınlama otomatik testte yok (foto seçici); elle denenmeli (👤 kurucu geri bildirimi).
