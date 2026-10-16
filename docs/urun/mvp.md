# Bebelika MVP Kapsamı (v0.1)
Sahip: Kerem (Ürün) | Tarih: 2026-10-16 | Durum: taslak; kurucu onayına bağlı kısımlar bölüm 6'da

## 1. Çerçeve ve varsayımlar
- Model: SADECE ELDEN TESLİM. Kargo, kargo takibi, adrese gönderim yok.
- Pilot: yalnız İstanbul. Diğer şehirler MVP dışı.
- Gelir modeli ONAY-002 bekliyor: MVP'de ödeme/komisyon/ilan ücreti YOK; ürün ücretsiz kabul edilir. Bağlı kararlar açık (bölüm 6).
- Varsayımlar (doğrulanmadı, pilotta test edilecek):
  - A1: Platform/teknoloji seçimi CTO kararıdır, burada kapsam dışı.
  - A2: Birincil kullanıcı anne; zamanı kısıtlı, çoğunlukla tek elle, bebek kucakta kullanır.
  - A3: Kategoriler bebek odaklı (giyim, araba, mama sandalyesi, oyuncak vb.); liste Tasarım+Ürün ile netleşir.
  - A4: Ödeme uygulama dışında, buluşmada yapılır (uygulama aracılık etmez).
  - A5: KVKK, ürün güvenliği, yasaklı ürün kuralları Hukuk'tan (Murat) gelecek; burada varsayılmaz.
- North Star: haftalık TAMAMLANAN teslim sayısı (iki tarafın "teslim edildi" onayı).
  Destek metrikleri: ilan sonrası 7 günde ilk mesaj oranı, ilan verme süresi, puanlama oranı.

## 2. Kullanıcı tipleri ve JTBD
| Tip | İş (JTBD) |
|---|---|
| Satıcı anne | Büyüyen bebeğin ürünlerini az eforla yakındaki birine verip yer açmak/ek bütçe sağlamak |
| Alıcı anne | Güvenebileceğim, yakınımdaki uygun fiyatlı ürünü hızla bulup bu hafta teslim almak |
| Yönetici (iç) | Şikâyet ve ilan moderasyonu (basit yönetim aracı; yöntem CTO ile) |
Not: Aynı kişi hem alıcı hem satıcı olabilir; tek hesap, iki rol.

## 3. Ana akışlar
1. Onboarding: telefon doğrulama, konum izni, ilçe seçimi; 3 adımda bitiş.
2. İlan verme: foto, kategori, fiyat, durum; hedef <60 sn.
3. Keşif: yakınlığa göre liste, filtre, arama.
4. Mesajlaşma: uygulama içi; telefon paylaşımı zorunlu değil.
5. Buluşma ayarlama: güvenli nokta + saat teklifi/onayı.
6. Teslim onayı: iki taraf "teslim edildi" der; ilan kapanır.
7. Karşılıklı puanlama: teslimden sonra.
8. Güvenlik: şikâyet, engelle.

## 4. MVP İÇİ özellikler
Öncelik: P0 = pilotsuz olmaz, P1 = pilot ilk ay, P2 = mümkünse. (Kaba sıralama; RICE skoru CTO eforu gelince hesaplanacak.)

### F1 Telefonla kayıt ve doğrulama (P0)
Hikâye: Anne olarak hızlıca kayıt olup güvenilir bir profille başlamak isterim.
Kabul:
- SMS kodu ile giriş; ad, ilçe, profil fotoğrafı (opsiyonel).
- Kayıt ≤3 ekran; ana butonlar tek elle erişilebilir.
- Doğrulanmamış kullanıcı ilan veremez/mesaj atamaz.

### F2 Hızlı ilan verme (P0)
Hikâye: Satıcı olarak bebek kucağımdayken 1 dakikada ilan vermek isterim.
Kabul:
- Zorunlu: ≥1 foto, kategori, fiyat (veya "ücretsiz"), durum (yeni gibi/iyi/orta).
- Konum profil ilçesinden otomatik; tam adres ASLA gösterilmez.
- Taslak otomatik kaydedilir; yarım kalan devam eder.
- Başlık/açıklama opsiyonel; kategoriden otomatik öneri.
- Ana butonlar ekranın alt üçte birinde.

### F3 Yakınlık araması ve ilan listesi (P0)
Hikâye: Alıcı olarak yakınımdaki ürünleri görmek isterim ki buluşma yükü az olsun.
Kabul:
- Varsayılan sıralama: mesafe + yenilik.
- Filtre: kategori, fiyat aralığı, mesafe, bebek yaş aralığı.
- Mesafe yaklaşık gösterilir (tam konum gizli).
- Boş sonuçta "mesafeyi genişlet" önerisi.

### F4 Uygulama içi mesajlaşma (P0)
Hikâye: Alıcı/satıcı olarak numaramı vermeden konuşmak isterim.
Kabul:
- İlana bağlı birebir sohbet; hızlı cevaplar ("Hâlâ var mı?", "Bugün uygun").
- Push bildirim; engelle ve şikâyet et.
- Mesajda telefon/IBAN yazılırsa uyarı (engelleme değil).

### F5 Buluşma ayarlama (P0)
Hikâye: Taraflar olarak güvenli yerde ve net saatte buluşmak isteriz.
Kabul:
- Sohbetten "buluşma öner": saat + kürasyonlu halka açık nokta listesi (AVM, metro çıkışı vb.).
- Karşı taraf kabul eder/değiştirir; kabulde iki tarafa hatırlatma.
- Tam adres paylaşımı gerekmez; güvenlik ipuçları kartı gösterilir.

### F6 Teslim onayı (P0)
Hikâye: Taraflar olarak işlemin bittiğini net işaretlemek isteriz.
Kabul:
- Buluşma saatinden sonra iki tarafa "Teslim edildi mi?" sorulur.
- İki onayda ilan "verildi" olur; tek taraf onayı için 48 saat sonra hatırlatma.
- "Buluşma olmadı" seçeneği; ilan yeniden aktif olur.

### F7 Karşılıklı puanlama (P1)
Hikâye: Kullanıcı olarak karşı tarafın güvenilirliğini görmek isterim.
Kabul:
- Teslim sonrası 1-5 yıldız + etiketler (zamanında geldi, ürün tarife uygun).
- Puanlar iki taraf da verince veya 7 gün sonra açılır (misilleme kaygısını azaltmak için).
- Profilde ortalama + işlem sayısı; az işlemli kullanıcıda "yeni" rozeti (eşik pilotta belirlenir).

### F8 Güvenlik ve moderasyon temelleri (P0)
Hikâye: Kullanıcı olarak sorunlu ilanı/kişiyi bildirebilmek isterim.
Kabul:
- İlan ve kullanıcı şikâyeti, kategori seçimli.
- İlan öncesi yasaklı ürün uyarısı (içerik Hukuk'tan).
- Yönetici şikâyetleri görür, ilanı kaldırır, kullanıcıyı askıya alır.

### F9 Favoriler ve basit bildirimler (P2)
Hikâye: Alıcı olarak beğendiğim ilanın fiyat/durum değişimini bilmek isterim.
Kabul: Favori ekleme; fiyat düşünce ve "verildi" bildirimi.

## 5. "ŞİMDİ DEĞİL" listesi (MVP dışı)
- Kargo, kurye, adrese teslim (modelle çelişir).
- Uygulama içi ödeme, emanet (escrow), komisyon (ONAY-002'ye bağlı).
- Öne çıkarma, reklam, abonelik, ilan ücreti (ONAY-002'ye bağlı).
- İstanbul dışı şehirler; çoklu dil.
- Kimlik/e-Devlet doğrulama, "doğrulanmış satıcı" rozeti (pilot verisine göre).
- Canlı konum paylaşımı, "buluşmaya gidiyorum" güvenlik paylaşımı.
- Takas, pazarlık otomasyonu, görüntülü arama.
- Kişiselleştirilmiş öneri, yapay zekâ ile fotoğraf analizi.
- Web sürümü, bebek dışı kategoriler, mağaza/esnaf hesapları.

## 6. Açık kararlar
- Gelir modeli (a/b/c): ekip önerisi (a); kurucu kararı bekliyor (ONAY-002). Seçim ödeme akışını, öne çıkarma arayüzünü, ilan ücretini ve hukuki kapsamı (vergi, ödeme mevzuatı) belirler. (c) seçilirse kapsam BÜYÜK değişir, ayrıca onay gerekir.
- Teknik platform ve mimari: CTO (Ece).
- Marka/isim/logo: kurucu onayı; bu dokümanda varsayılmadı.
- Yasal metinler, KVKK, yasaklı ürün listesi: Hukuk (Murat).
- Pilot başarı eşikleri (kaç teslim, kaç hafta): Pazarlama (Can) ile netleşecek; rakam uydurulmadı.
- Mağaza yayını: kurucu onayı gerekir.

## 7. Sonraki adımlar
1. CTO: fizibilite ve efor tahmini (F1-F8), ardından RICE.
2. Tasarım (Selin): F2 ve F5 akış taslağı, tek el kullanımı.
3. Hukuk (Murat): yasaklı ürün, güvenli buluşma, sorumluluk metni görüşü.
4. ONAY-002 sonrası bölüm 6 güncellenir.
