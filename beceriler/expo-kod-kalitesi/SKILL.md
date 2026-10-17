---
name: expo-kod-kalitesi
description: Bebelika'nın Expo / React Native / TypeScript kodunu yazarken, düzenlerken veya gözden geçirirken kullan. Klasör yapısı, tip güvenliği, performans, erişilebilirlik, Türkçe biçimlendirme ve "bitti" tanımı için doğrulama adımlarını içerir.
---

# Expo Kod Kalitesi — Bebelika

## Yapı
- Ekranlar ince; mantık hook'larda (use...), veri erişimi servis katmanında, görünüm ortak bileşenlerde.
- Tema (renk, tipografi, boşluk) tek dosyadan gelir; bileşenlerde sabit renk/piksel değeri yok.
- Bir dosya tek iş yapar; ~250 satırı geçen dosyayı böl. Ölü kod ve kullanılmayan import bırakma.

## TypeScript
- strict mod; `any` yok (zorunluysa gerekçesi yorumda). Veri modelleri tek yerde tanımlı tipler.
- Props tipleri açık; opsiyonel alanlar bilinçli.

## Performans
- Listeler FlatList/FlashList ile; keyExtractor sabit; ağır kart bileşenleri React.memo.
- Görseller expo-image ile (önbellek, placeholder, contentFit="cover"); sabit en-boy oranı ile layout kayması yok.
- Gereksiz yeniden render'ı önle (useMemo/useCallback sadece gerektiğinde).

## Kullanıcı deneyimi ve erişilebilirlik
- Her etkileşimli öğede accessibilityRole ve accessibilityLabel; dokunma alanı ≥44px.
- Yükleniyor (iskelet), boş ve hata durumları her ekranda tanımlı.
- Türkçe biçim: para `Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 })`,
  tarih `tr-TR`, büyük/küçük harf dönüşümünde `toLocaleUpperCase('tr-TR')` (İ/ı sorunu).
- Web'de de düzgün çalışmalı (demo Vercel'de web olarak yayında): sadece mobile özgü API'leri Platform kontrolüyle kullan.

## Güvenlik
- Gizli anahtar, token, şifre koda veya repoya YAZILMAZ (repo şu an herkese açık).
- Kullanıcı girdisi doğrulanır; demo verisi gerçek kişi bilgisi içermez.

## Bitti tanımı (hepsi geçmeden "bitti" deme)
1. `cd app && npx tsc --noEmit` hatasız.
2. `cd app && npx expo export --platform web` başarılı.
3. Değişen ekranlar `node scripts/ekran.cjs <yollar>` ile görüntülendi ve Read ile kontrol edildi.
4. gunluk kaydında ne değişti, neden, hangi dosyalar.
