# Demo Örnek Veri Seti (v0.1)
Sahip: Selin (Tasarım) | Tarih: 2026-10-17 | Kullanım: Ece'nin mock veri modu (docs/teknik/mock-notu.md)
Durum: ÖNERİ. Tüm kişiler, fiyatlar ve ilanlar KURGUDUR. Fiyatlar piyasa araştırması değil, makul tahmindir.

## Kurallar (veri neden böyle)
- Kategoriler şemadaki slug'larla birebir: giyim, araba, mama-sandalyesi, oyuncak, beslenme, uyku, diger.
- Hukuk yasakları (politika.md §3.1) demoda GÖRÜNMEZ: emzik, mama, tıbbi cihaz, bebek yuvası, kazalı koltuk yok. Demo, kuralı ihlal eden ilan göstermemeli.
- Riskli kategoriler (araba, mama sandalyesi, uyku) açıklamada beyan içerir ("fren ve kemer çalışıyor").
- İlçeler pilot bölgesi (Kadıköy, Ataşehir) + komşular; mesafe yaklaşık ("~1,2 km"), tam adres yok.
- Durum: yeni gibi / iyi / orta. Fiyat 0 = "Ücretsiz". Yaş aralığı ay cinsinden.
- Fotoğraf: gerçek foto yok; renkli yer tutucu + kategori ikonu (Ece: `photos` boşsa yer tutucu çiz). Alt metin = ilan başlığı.

## 1. Demo kullanıcılar
| id | Ad | İlçe | Not |
|---|---|---|---|
| u1 | Elif K. | Kadıköy | DEMO'yu açan kullanıcı. E-postası doğrulanmış. |
| u2 | Zeynep A. | Kadıköy | Satıcı, 14 teslim, ort. 4,9 |
| u3 | Merve T. | Ataşehir | Satıcı, 6 teslim, ort. 4,7 |
| u4 | Ayşe B. | Üsküdar | "Yeni üye" rozeti (0 teslim) |
| u5 | Selin D. | Maltepe | Satıcı, 3 teslim, ort. 5,0 |
Soyadlar kısaltmadır (tam ad gösterilmez). Telefon rozeti YOK (pilot sonrası).

## 2. On iki ilan
| # | Başlık | Kategori | ₺ | Durum | Yaş (ay) | Satıcı | İlçe | Mesafe | Açıklama | Yayın |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Katlanır bebek arabası, gri | araba | 2.400 | iyi | 0-36 | u2 | Kadıköy | ~0,8 km | Tek elle katlanır. Fren ve kemerler sorunsuz çalışıyor. Yağmurluğu var. Ön tekerde hafif çizik. | 1 gün önce |
| 2 | Ahşap mama sandalyesi | mama-sandalyesi | 900 | yeni gibi | 6-36 | u3 | Ataşehir | ~3,5 km | Yükseklik ayarlı, 5 noktalı kemer ve kilit sağlam. Tepsi yıkanabilir. | 2 gün önce |
| 3 | 0-6 ay body seti (7 adet) | giyim | 250 | iyi | 0-6 | u2 | Kadıköy | ~0,8 km | Pamuklu, çıtçıtlı. Yıkandı, ütülendi. Kordonlu parça yok. | 3 saat önce |
| 4 | Ahşap oyun halısı + aktivite barı | oyuncak | 450 | iyi | 3-12 | u5 | Maltepe | ~6,1 km | Tüm parçalar tam, küçük parça yok. 3 oyuncak asılı. | 4 gün önce |
| 5 | 6-12 ay tulum ve pantolon paketi (10 parça) | giyim | 350 | iyi | 6-12 | u4 | Üsküdar | ~4,8 km | Çoğu 2-3 kez giyildi. Kordonsuz. | 5 gün önce |
| 6 | Park yatak, katlanır | uyku | 1.100 | iyi | 0-24 | u3 | Ataşehir | ~3,5 km | Orijinal bağlantı parçaları ve çantası tam. Kırık veya boyası dökülmüş yer yok. | 1 hafta önce |
| 7 | Silikon kaşık ve kâse seti | beslenme | 80 | yeni gibi | 6-24 | u2 | Kadıköy | ~0,8 km | Çatlak/çizik yok, bulaşık makinesinde yıkandı. | 2 gün önce |
| 8 | Tahta yap-boz ve blok seti | oyuncak | Ücretsiz | orta | 18-48 | u5 | Maltepe | ~6,1 km | Birkaç blokta renk solması var. Gelen alır. | bugün |
| 9 | Pamuklu uyku tulumu (6-18 ay, 2 adet) | uyku | 300 | yeni gibi | 6-18 | u1 | Kadıköy | ~0,2 km | Fermuar sağlam. (u1'in kendi ilanı) | 6 gün önce |
| 10 | Duvar sticker seti | diger | 60 | yeni gibi | - | u4 | Üsküdar | ~4,8 km | Açılmamış kutu. | 3 gün önce |
| 11 | Taşıma kanguru, ergonomik | diger | 700 | iyi | 0-24 | u3 | Ataşehir | ~3,5 km | Tokalar ve kemerler sağlam, yıkanabilir. | 2 gün önce |
| 12 | Kış montu 12-18 ay, lacivert | giyim | 400 | yeni gibi | 12-18 | u2 | Kadıköy | ~0,8 km | Kapüşonlu ama kordonsuz. İki kez giyildi. | 8 saat önce |

- #9 u1'e aittir: keşfette görünmez, "İlanlarım"da görünür. Keşfette 11, İlanlarım'da 1 ilan çıkar.
- Giyim ilanlarında "kordonsuz" ifadesi Hukuk'un kıyafet uyarısına (boğulma riski) uyumludur.
- Dağılım: giyim 3, oyuncak 2, uyku 2, diğer 2, araba 1, mama sandalyesi 1, beslenme 1. Ücretsiz 1, 100₺ altı 2, 1.000₺ üstü 2.
- Sıralama: mesafe + yenilik. Formülü Ece seçer; beklenen: 3, 12, 1, 7 üstte, uzak ve eski olanlar altta.

## 3. Sohbet senaryoları
u1 = Elif K. Zamanlar göreli.

### Senaryo A: Alıcı, buluşma ayarlanır (ilan #1, satıcı u2)
- u1: "Merhaba, araba hâlâ var mı?" (hızlı yanıt çipi)
- u2: "Merhaba, var! Bugün veya yarın uygun."
- u1: "Yarın 11:00 Kadıköy iskele önü olur mu?"
- u2: "Olur, orada buluşalım. Ön tekerin çizik fotoğrafını atayım mı?"
- u1: "Gerek yok, ilanda yazıyor. Görüşürüz!"
Buluşma kartı (S13) kodda henüz yok. Mock'ta kart STATİK bilgi mesajı olarak gösterilsin ("Önerilen buluşma noktası: Kadıköy iskele önü, yarın 11:00"); çalışmayan Kabul/Reddet butonu eklenmesin (sahte işlev yok).

### Senaryo B: Güvenlik uyarısı (u1 satıcı, ilan #9, alıcı u4)
- u4: "Merhaba, tulum hâlâ var mı? Kargo ile alabilir miyim?"
- u1: "Merhaba, var. Kargo yapmıyorum, sadece elden teslim."
- u4: "Anladım. IBAN yazarsan önce ödeme yapayım, ayırırsın."
  → IBAN ifadesi için uyarı bandı: "Kişisel bilgi ve IBAN paylaşma. Ön ödeme isteyenlere dikkat." (engelleme yok)
- u1: "Ödemeyi buluşmada yapalım, ön ödeme almıyorum."
- "..." menüsünde Şikâyet et / Engelle görünür.
Amaç: "kargo yok, ön ödeme uyarısı" kararını canlı göstermek. u4 suçlanmaz; yalnız uyarı akışı gösterilir.

### Senaryo C: Ücretsiz ilan, yarı yolda buluşma (u1 alıcı, ilan #8, satıcı u5)
- u1: "Merhaba, ücretsiz mi gerçekten?"
- u5: "Evet, gelen alır. Bu hafta sonu uygun musun?"
- u1: "Cumartesi öğleden sonra olur. Maltepe tarafına gelmem gerekir mi?"
- u5: "Ben Kadıköy'e gelirim, sahil tarafı iyi olur."
- u1: "Harika, teşekkürler!"
Amaç: ilçeler arası mesafe, tam adres paylaşılmaması.

Gelen kutusu: A (okunmamış 1), B (0), C (2). Süzgeç: Alıyorum = A, C; Satıyorum = B.

## 4. Mock için ek kurallar
- Zamanlar göreli üretilsin (şimdi - X), demo hep taze görünsün.
- Mock'ta gönderilen mesaj yerel listeye eklenir; karşı yanıt SİMÜLE EDİLMEZ (aldatıcı olur).
- Ekranda kapatılamayan küçük "Demo verisi" bandı: "Bu bir demodur, ilanlar kurgudur." Gerekçe: gerçek sanılmasın, mağaza incelemesinde dürüst.
- Şikâyet/engel demoda kaydedilmez: "Demo modunda gönderilmez" bilgisi.

## 5. Açık noktalar
- Fiyatlar tahmindir; pilot öncesi gerçek örneklerle (Kerem'in arz planı) güncellenmeli.
- Telifsiz fotoğraf kullanımı lisans kontrolü gerektirir; şimdilik yer tutucu.
