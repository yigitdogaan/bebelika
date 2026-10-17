# Bebelika Marka Rehberi v1 (ÖNERİ)
Sahip: Selin (Tasarım) | Tarih: 2026-10-17 | Durum: ÖNERİ. CLAUDE.md'ye göre marka kararı ekipte (CEO onayı), kurucu itiraz ederse geri alınır. İsim "Bebelika" verilmiştir.
Not: Aşağıdaki renk kodları ve kontrast oranları ŞU AN HESAPLANMADI/doğrulanmadı (araç çalıştırılamadı). Uygulamadan önce WCAG kontrast aracıyla (ör. WebAIM) kontrol edilmeli; tablodaki "hedef" sütunu hedeftir, ölçüm değil. Marka tescili/benzer isim araştırması YAPILMADI; Hukuk + kurucu işi.

## 1. Marka kişiliği ve ton
- Kişilik: yorgun anneye yardım eden, güvenilir, sade bir komşu. Reklam kokan değil, pratik.
- Üç kelime: Sıcak, Güvenilir, Pratik.
- Ton kuralları: "sen" dili; kısa cümle; teknik terim yok; ünlem cümle başına en fazla 1; emoji arayüzde yok (pazarlama kanallarında ölçülü olabilir, Can karar verir).
- Söylemeyiz: "güvenli garantili", "doğrulanmış satıcı", "en ucuz", "%100". (Hukuk/politika.md: garanti ifadesi yok.)
- Örnek ses:
  - Evet: "Büyüyen bebeğin eşyaları başka bir bebeğe lazım olabilir."
  - Hayır: "Hemen satarak kazan!"
  - Güvenlik: "Önerilen buluşma noktası", "Ödeme buluşmada yapılır."
- Slogan: Can'ın işi (docs/pazarlama/magaza-metni.md); tasarım önerisi: "Yakındaki anneden, elden ele." (taslak, çakışma/tescil kontrolü yok.)

## 2. Renk
Gerekçe: pastel pembe/mavi klişesinden kaçınılır (cinsiyet bağımsız, pazaryeri güveni); yeşil-mavi aile "güven + sağlık", sıcak turuncu aksan "el sıcaklığı". Mavi baskın rakipler için docs/pazarlama/rakip.md'ye bakılabilir; ayrışma bu paletle sağlanır (rakip renkleri doğrulanmadı).

| Rol | Ad | Hex (öneri) | Kullanım | Kontrast hedefi |
|---|---|---|---|---|
| Ana | Nane Koyu | #2F7D6D | Ana buton, seçili sekme, bağlantı | Beyaz yazı ile ≥4,5:1 (DOĞRULANMADI; geçmezse #256B5D'ye koyulaştır) |
| Ana koyu | Çam | #256B5D | Basılı durum, küçük metin bağlantı | ≥4,5:1 beyaz zeminde |
| Aksan | Şeftali | #F4A261 | Rozet dolgusu, vurgu şeridi, ikon; METİN rengi DEĞİL | Üstünde koyu metin ≥4,5:1 |
| Zemin | Krem | #FFFBF5 | Uygulama zemini | - |
| Yüzey | Beyaz | #FFFFFF | Kart | - |
| Yumuşak | Nane Açık | #DCEFE9 | Seçili çip, bilgi bandı | Üstünde koyu metin ≥4,5:1 |
| Metin | Mürekkep | #1F2A2E | Ana metin | Kremde ≥7:1 hedef |
| İkincil metin | Gri-kömür | #5B6770 | Yardımcı metin | Kremde ≥4,5:1 |
| Uyarı | Kehribar bant | #FFE9C7 + metin #7A4B00 | Güvenlik uyarı bandı (mevcut #fff6d6'nın yerine) | ≥4,5:1 |
| Hata | Kırmızı | #B3261E | Hata metni, kritik buton | Beyazda ≥4,5:1 |
| Başarı | Nane Koyu ile aynı | - | Ayrı yeşil yok, ikon + metin ile anlatılır | - |

Kurallar:
- Anlam yalnız renkle verilmez (hata = renk + ikon + metin). WCAG 2.2 AA hedefi.
- Ekran başına tek vurgu rengi: Nane. Şeftali yalnız küçük dekoratif/rozet alanında.
- Koyu mod: v1 kapsamı DIŞI (pilotta talep gelirse). Renkleri token olarak adlandır ki sonradan eklenebilsin.
- Mevcut kod geçici açık mavi/gri (#cfe8ff, #ddd, #dff0ff) kullanıyor; geçiş tablosu §7.

## 3. Tipografi
- Öneri: sistem fontu (iOS San Francisco, Android Roboto). Gerekçe: sıfır yükleme, Türkçe karakter (ğ ş ı İ ç ö ü) garantili, Dinamik Tip/yazı boyutu desteği, lisans maliyeti yok.
- Logo/başlık için isteğe bağlı: Nunito veya Quicksand gibi yuvarlak, açık lisanslı (OFL) font; Türkçe karakter kapsamı ve lisans KONTROL EDİLMEDİ, kullanmadan önce teyit. v1'de yalnız logoda, arayüzde değil.
- Ölçek (sp; sistem ayarıyla büyür): Başlık L 24/semibold, Başlık M 20/semibold, Gövde 16/regular (alt sınır 16), Yardımcı 14, Etiket 12 (yalnız rozet/etiket; ana bilgi 12 olmaz).
- Satır yüksekliği ≥1,4. Fiyat: 20 semibold, ₺ işareti sayıdan sonra, binlik nokta: "2.400 ₺". "Ücretsiz" kelimesi 0 ₺ yerine.
- Büyük harf (ALL CAPS) kullanılmaz: Türkçede i/İ sorunu ve okunurluk.

## 4. Logo yönü (çizim yok, yön önerisi)
- Konsept A (önerilen): Çoğul "b" harfinin içinde küçük ev/konum iğnesi, yan yana iki elin teslimi ima eden basit eğri. "Elden teslim + yakınlık". Tek renk Nane.
- Konsept B: Yuvarlak köşeli kare uygulama ikonunda iki üst üste daire (el ele), şeftali aksan.
- Konsept C (yedek): Yalnız kelime işareti "bebelika", küçük harf, yuvarlak font.
- Kaçınılacaklar: biberon/emzik/bebek silüeti (yasaklı ürün çağrışımı: emzik ikinci elde yasak; ikon bunu teşvik gibi okunmasın), leylek, pembe-mavi ikili, el yazısı fontlar (okunmaz).
- Uygulama ikonu: tek şekil, kenarlara 12% boşluk, mağaza kuralları (iOS 1024x1024 köşesiz, Android adaptif ikon ön/arka katman). Gerçek logo çizimi ayrı iş: vektör (SVG) üretimi ve tescil kontrolü kurucu/ücretli tasarımcı kararı. Ben metin tabanlı yön verebiliyorum; görsel dosya üretimi bu ortamda doğrulanmadı.
- Minimum boyut: 24 dp; etrafında logo yüksekliği kadar boşluk.

## 5. Bileşen dili (token)
- Köşe yarıçapı: kart 16, buton 14, çip 999 (tam yuvarlak), alan 12.
- Boşluk ölçeği: 4-8-12-16-24-32. Ekran kenar boşluğu 16.
- Gölge: yalnız alt sabit çubuk ve alt sayfada hafif; kartlar gölgesiz, 1 dp çerçeve (#E6E1D8).
- Buton: yükseklik 52 (≥48 dp hedef), tam genişlik, ana = Nane dolgu/beyaz metin, ikincil = çerçeveli, tehlikeli = kırmızı çerçeve. Pasif durum: gri dolgu + "neden pasif" yardımı (yalnız renkle belli etme).
- Rozetler: "Yeni üye" (Nane Açık zemin), puan yıldızı (şeftali dolgu + sayı yazılı), "Önerilen nokta" (Nane Açık). "Doğrulanmış" rozeti kullanılmaz.
- İkon: çizgi stili (2 dp), yuvarlak uç, tek set (örn. Material Symbols Rounded, Apache 2.0, kullanımdan önce lisans teyidi).
- Fotoğraf: ilan kartı 4:3, köşe 12; yüz içeren foto uyarısı: çocuk yüzü ilan fotoğrafında yer almaması önerisi (ilan ver ekranında ipucu; çocuk gizliliği/KVKK Hukuk görüşü gerekir).
- Hareket: 150-250 ms, hareket azaltma ayarında kapalı.

## 6. Sesli/yazılı kullanım
- Uygulama adı her zaman "Bebelika" (tek B büyük). Kısaltma yok.
- Mağaza adı alanı için "Bebelika: İkinci El Bebek" gibi bir alt başlık Can'ın metnindedir; karar Can/CEO.
- Bildirim başlığı ≤40 karakter, gövde ≤90 karakter; kişisel veri (ad, adres) içermez (kilit ekranı gizliliği).

## 7. Koddaki geçici renklerin eşlemesi (Ece için)
| Şimdi (kod) | Önerilen token |
|---|---|
| #fff6d6 (uyarı bandı) | uyari-zemin #FFE9C7 + uyari-metin #7A4B00 |
| #cfe8ff (ana buton) | ana #2F7D6D, yazı beyaz (şimdiki buton açık mavi, yazı koyu; kontrast bilinmiyor) |
| #ddd (pasif) | pasif zemin #E6E1D8, yazı #5B6770 |
| #dff0ff (benim balonum) | nane-acik #DCEFE9 |
| #eee (karşı balon) | yuzey beyaz + 1 dp çerçeve |
Tema dosyası öneri: app/src/lib/theme.ts (renk, boşluk, yazı tokenları). Uygulama kararı Ece'nin.

## 8. Açık noktalar / kurucuya sorular
1. Renk yönü (Nane + Şeftali) kurucu beğenisine bağlı; itiraz olursa geri alınır, alternatif: Gökyüzü mavisi + Şeftali.
2. Logo üretimi: ücretli tasarımcı/araç kurucu kararı; benim çıktım yön metnidir.
3. Marka tescili (TÜRKPATENT) ve alan adı: kurucu işi, Hukuk teyidi (yapılmadı).
4. Kontrast ve font lisansı doğrulamaları yapılmadı; ilk uygulamadan önce kontrol listesi.
