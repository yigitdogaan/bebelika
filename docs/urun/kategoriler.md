# Kategori Ağacı ve Ürün Güvenliği Kuralları (v0.1)
Sahip: Kerem (Ürün) | Tarih: 2026-10-17 | Girdi: docs/hukuk/politika.md §3, app migration `categories`
Durum: ürün önerisi. Yasaklı/riskli listenin geçerliliği Hukuk'a (Murat) ve dış avukata (ONAY-004) aittir; burası ürün uygulamasıdır. Çelişkide politika.md geçerlidir.

## 1. Varsayımlar
- Mevcut DB'de 7 düz kategori var (giyim, araba, mama-sandalyesi, oyuncak, beslenme, uyku, diger). Öneri: 1. seviye ≤10, tek dokunuşla seçim.
- Eksikler: oto koltuğu, banyo/bakım, anne ürünleri, kitap. "beslenme" adı yasaklı gıdayla karışmasın diye "Beslenme gereçleri" olmalı.
- 2. seviye (alt tür) pilotta yalnız arama/öneri içindir, zorunlu seçim değildir.

## 2. Ağaç (öneri)
| 1. seviye (slug) | Örnekler | Güvenlik sınıfı |
|---|---|---|
| Giyim (giyim) | Tulum/body, takım, mont, ayakkabı | Düşük (ipli/kordon uyarısı) |
| Bebek arabası ve taşıma (araba) | Puset, travel sistem, kanguru, portbebe | Orta |
| Oto koltuğu (oto-koltugu) YENİ | Ana kucağı, grup 0-1-2-3, yükseltici | YÜKSEK |
| Mama sandalyesi ve beslenme gereçleri (mama-sandalyesi) | Mama sandalyesi, kaşık/tabak, önlük, sterilizatör | Orta |
| Uyku (uyku) | Beşik, park yatak, nevresim | YÜKSEK (beşik/park yatak) |
| Oyuncak ve oyun (oyuncak) | Aktivite halısı, çıngırak, eğitici | Orta (küçük parça, pil) |
| Banyo ve bakım (bakim) YENİ | Küvet, bakım minderi, lazımlık | Düşük |
| Anne ürünleri (anne) YENİ | Hamile giyim, elektrikli sağma pompası | Orta |
| Kitap ve gelişim (kitap) YENİ | Kitap, kartlar | Düşük |
| Diğer (diger) | Oda mobilyası, dekor | Düşük |
Slug değişiklikleri Ece'nin migration işidir; burası öneridir.

## 3. Kategori bazlı ilan kuralları (politika §3.2 uygulaması)
| Kategori | Zorunlu / uyarı | Ekran davranışı |
|---|---|---|
| Oto koltuğu | Üretim tarihi, marka/model, "kazasız" beyanı, ECE etiket fotoğrafı | Beyan yoksa "Yayınla" pasif, nedeni yazılı; detayda "Satıcı kazasız beyan etti" (doğrulama iddiası YOK) |
| Beşik / park yatak | Bağlantı parçaları tam, boya/kırık yok beyanı, marka/model | Beyan kutucukları; geri çağırma eşleşmesi (politika §3.3) |
| Bebek arabası, mama sandalyesi | Fren/kemer/kilit çalışıyor beyanı | Tek kutucuk |
| Sağma pompası | Adaptör/kablo tam, CE, çalışır beyanı; kişisel parçalar için hijyen uyarısı | Uyarı gösterilir; kural Murat'a sorulacak |
| Oyuncak | Yaş grubu, küçük parça/pil uyarısı | Yaş aralığı alanı F3 filtresiyle ortak |
| Giyim | İpli/kordonlu boyun-kapüşon uyarısı | Bilgi notu |
Beyanlar satıcı beyanıdır; Bebelika ürünü incelemez (politika §3.4, avukat teyidi sonrası).

## 4. Yasaklı ürünler: ilan öncesi uyarı (politika §3.1 özeti)
Mama/ek gıda/süt/vitamin/ilaç/anne sütü; tıbbi cihaz; emzik/diş kaşıyıcı; kazaya karışmış oto koltuğu; bebek yuvası/uyku pozisyoneri; kırık/eksik güvenlik ürünü; sahte marka; geri çağrılmış ürün.
Uygulama önerisi:
- İlan ver 1. adımında tek satır "Bu ürünler yasak" + "Tümünü gör".
- Başlıkta anahtar kelime (emzik, nebülizatör, bebek yuvası vb.) yumuşak uyarı verir, engellemez (yanlış pozitif riski).
- Şikâyet nedenlerinde "Yasaklı ürün" seçeneği.
- Biberon: politika "yasaklanabilir" diyor (Ürünle karar). Kerem kararı: pilotta biberon YASAK (hijyen, belirsizliği azaltır); Murat itiraz edebilir.

## 5. Kabul kriterleri
- Kategori seçimi ≤2 dokunuş. Oto koltuğu/beşik seçilince zorunlu alanlar görünür.
- Yasaklı ürün listesi ilan vermeden önce erişilebilir.
- Demo verisi bu ağaçla uyumlu, yasaklı ürün içermez.

## 6. Şimdi değil
Marka otomatik tamamlama, barkod/seri okuma, otomatik geri çağırma eşleşmesi (pilotta manuel liste), 10'dan fazla ana kategori.

## 7. Açık sorular
1. Murat: sağma pompası parça hijyeni; biberon yasağı onayı.
2. Ece: kategoriye özel alanlar (jsonb) eforu; pilotta en azından kutucuk beyanı.
3. Selin: 10 kategorilik ızgara ve ikonlar.
