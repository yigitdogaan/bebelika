---
name: mobil-arayuz-tasarimi
description: Bebelika uygulamasının ekranlarını tasarlarken, tasarım sistemi kurarken, bir ekranın görünümünü iyileştirirken veya görsel kalite kontrolü yaparken kullan. Renk, tipografi, boşluk, bileşenler, ilan kartları, boş durumlar ve ekran görüntüsüyle görsel doğrulama içerir.
---

# Mobil Arayüz Tasarımı — Bebelika

Kendini, her müşterisine kimseyle karıştırılmayacak bir görsel kimlik veren bir tasarım stüdyosunun baş tasarımcısı
olarak düşün. Müşteri şablon gibi duran önerileri zaten reddetti; bilinçli, bu ürüne özgü kararlar bekliyor.

## Ürünü tanı (kararların kaynağı burası)
- Bebelika: anne-bebek ikinci el alım-satım; SADECE elden teslim, aynı semtteki ebeveynler arasında.
- Kullanıcı: yorgun, zamanı az, tek eliyle telefon kullanan ebeveyn. İhtiyacı: hızlı göz atmak, güvenmek, kolay buluşmak.
- Duygu: sıcak, güven veren, ferah, temiz — ama "bebek pembesi-mavisi" klişesi değil. Premium bir yaşam tarzı uygulaması
  hissi; ucuz ilan sitesi değil.
- Ürünün dünyası (ilham buradan): bebek tekstili dokuları, ahşap oyuncaklar, doğal tonlar, yumuşak ama net formlar,
  komşuluk ve mahalle hissi, el ele teslim.

## Kaçınılacak "yapay zekâ varsayılanları"
Kendi kararın olmadıkça şunlara kayma: krem zemin + terrakota vurgu; siyah zemin + tek neon renk; her şeyi aynı
yuvarlak karta doldurup aynı gri gölgeyi vermek; dekor amaçlı gradyanlar; her başlığın üstünde BÜYÜK HARFLİ etiket;
"A · B · C" şeklinde nokta ile birleştirilmiş meta satırları; her butonun sonuna "→"; başlıkta tek kelimeyi renklendirmek.

## İki aşamalı süreç
1. **Plan** — docs/tasarim/tasarim-sistemi.md dosyasına (yoksa oluştur, varsa güncelle) kompakt bir sistem yaz:
   - Renk: 5–7 isimli hex (zemin, yüzey, metin, ikincil metin, birincil vurgu, başarı/güven, uyarı). Kontrast WCAG AA.
   - Tipografi: 1 veya 2 aile, bilinçli seçim, @expo-google-fonts ile. Türkçe karakterleri (ş ğ ı İ ö ü ç) mutlaka desteklemeli.
     Net bir ölçek (ör. 12/14/16/20/24/32) ve ağırlıklar.
   - Boşluk: 4/8 tabanlı ölçek. Köşe yarıçapı hiyerarşiye göre farklı (kart, buton, rozet aynı olmak zorunda değil).
   - Düzen: ana ekranlar için ASCII taslak; hizalama kuralı.
   - İlkeler: bu ürünü ötekilerden ayıran 3 cümle. Cesaretini TEK yerde harca (ör. ilan kartı ya da ilan detayı), gerisi sakin.
   Planı yazdıktan sonra kendine sor: "Bunu herhangi bir ilan uygulaması için de yapardım mı?" Evetse o kısmı değiştir.
2. **Uygula** — sistemi koda tek yerden uygula (tema dosyası), ekranlar sabit değer değil tema kullanır.

## Pazar yeri ekranları için standartlar
- Ana akış: 2 sütunlu ilan ızgarası; fotoğraf oranı sabit (ör. 4:5), fotoğraf ürünün kahramanı.
- İlan kartında: fiyat belirgin, ürün adı en fazla 2 satır, semt + mesafe ("Kadıköy · 1,2 km" yerine tasarıma uygun bir biçim),
  durum rozeti (Yeni gibi / İyi / Kullanılmış). Kart başına en fazla 4 bilgi.
- İlan detayı: tam genişlik kaydırılabilir fotoğraflar, fiyat ve başlık üstte, satıcı güven bloğu (puan, teslim sayısı,
  doğrulanmış rozet), "Güvenli buluşma noktası önerisi" alanı, sabit alt aksiyon çubuğu ("Mesaj gönder").
- İlan verme: adım adım, en fazla 3 adım, fotoğraf önce.
- Alt sekme çubuğu: 4–5 sekme, aktif durum net.
- Boş ve hata durumları yön verir: ne oldu + ne yapmalı + tek aksiyon. Özür dilemez, belirsiz konuşmaz.
- Metinler: kullanıcının dili, etken çatı, net fiil ("İlanı yayınla" → bildirim "İlan yayında"). Cümle düzeni harf (Title Case yok).
- Hareket: az ve anlamlı; kullanıcı eylemine cevap veren geçişler. Her karta animasyon yok.
- Erişilebilirlik: dokunma alanı ≥44px, accessibilityLabel'lar, metin büyütmede taşma yok.

## Görsel doğrulama döngüsü (atlamak yasak)
1. `cd app && npx expo export --platform web`
2. `node scripts/ekran.cjs / <diğer yollar>` → /tmp/ekran/*.png dosyalarını Read ile AÇ ve gerçekten bak.
3. Eleştir: hizalama, boşluk tutarlılığı, tipografi hiyerarşisi, renk dengesi, kırpılan metin/görsel, "profesyonel mi?"
   En önemli 5 sorunu yaz, düzelt, 1-2'yi tekrarla.
4. Çıkmadan önce Chanel kuralı: aynaya bak ve bir aksesuar çıkar — işe yaramayan bir süsü kaldır.

## Bitti tanımı
Tema tek yerde; ortak bileşenler kullanılıyor; tüm ana ekranlar ekran görüntüsünde kontrol edildi; tip kontrolü ve web
derlemesi geçiyor; docs/tasarim/tasarim-sistemi.md güncel; gunluk kaydında önce/sonra özeti var.
