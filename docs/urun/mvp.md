# Bebelika MVP Kapsamı (v0.1)
Sahip: Kerem (Ürün) | Tarih: 2026-10-16 | Güncelleme: 2026-10-17 (ONAY-002) | Durum: taslak; açık kararlar bölüm 6'da

## 1. Çerçeve ve varsayımlar
- Model: SADECE ELDEN TESLİM. Kargo, kargo takibi, adrese gönderim yok.
- Pilot: yalnız İstanbul. Diğer şehirler MVP dışı.
- Gelir modeli ONAY-002 (a) ONAYLANDI: ürün ücretsiz; gelir sonradan "öne çıkarma" ücretiyle. MVP'de ödeme/komisyon/ilan ücreti/öne çıkarma YOK.
- Varsayımlar (doğrulanmadı, pilotta test edilecek):
  - A1: Platform/teknoloji seçimi CTO kararıdır, burada kapsam dışı.
  - A2: Birincil kullanıcı anne; zamanı kısıtlı, çoğunlukla tek elle, bebek kucakta kullanır.
  - A3: 10 ana kategori (kategoriler.md): giyim, araba, oto-koltugu*, mama-sandalyesi, uyku, oyuncak, bakim*, anne*, kitap*, diger (*yeni slug; migration Ece). Mevcut 'beslenme' slug'ı mama-sandalyesi ("Mama sandalyesi ve beslenme gereçleri") ile birleşir; yasaklı gıdayla karışmasın. Oto koltuğu/beşik/park yatak için beyan alanı zorunlu. Pilotta biberon YASAK (Murat teyidi bekliyor).
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
1. Onboarding: e-posta veya Apple/Google girişi, konum izni, ilçe seçimi; 3 adımda bitiş.
2. İlan verme: foto, kategori, fiyat, durum; hedef <60 sn.
3. Keşif: yakınlığa göre liste, filtre, arama.
4. Mesajlaşma: uygulama içi; telefon paylaşımı zorunlu değil.
5. Buluşma ayarlama: güvenli nokta + saat teklifi/onayı.
6. Teslim onayı: iki taraf "teslim edildi" der; ilan kapanır.
7. Karşılıklı puanlama: teslimden sonra.
8. Güvenlik: şikâyet, engelle.

## 4. MVP İÇİ özellikler
Öncelik: P0 = pilotsuz olmaz, P1 = pilot ilk ay, P2 = mümkünse. (Kaba sıralama; RICE skoru CTO eforu gelince hesaplanacak.)

### F1 Kayıt ve giriş: e-posta + Apple/Google (P0)
Hikâye: Anne olarak hızlıca kayıt olup güvenilir bir profille başlamak isterim.
Kabul:
- E-posta (doğrulamalı) veya Sign in with Apple / Google ile giriş; SMS kodu yok (otp-karar.md). Ad, ilçe, profil fotoğrafı (opsiyonel); 18+ beyanı.
- Kayıt ≤3 ekran; ana butonlar tek elle erişilebilir.
- E-postasını doğrulamamış kullanıcı ilan veremez/mesaj atamaz.
- Yeni hesap sınırları (ilk 24 saatte ≤3 ilan, günlük mesaj başlatma sınırı) uygulanır.
- Telefon doğrulama rozeti pilot sonrası (isteğe bağlı); MVP'de "Telefonu doğrulandı" ifadesi kullanılmaz.

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
- Demo (mock): kodda yok. Sohbette buluşma bilgisi STATİK mesaj olarak görünür, Kabul/Reddet butonu yok, "Yakında" yazar (sahte işlev yok).
- Kod gelince test: öneri → karşı taraf kabul/değiştir → iki tarafa hatırlatma; noktalar yalnız halka açık yerler; öneri sohbette kayıtlı kalır.

### F6 Teslim onayı (P0)
Hikâye: Taraflar olarak işlemin bittiğini net işaretlemek isteriz.
Kabul:
- Buluşma saatinden sonra iki tarafa "Teslim edildi mi?" sorulur.
- İki onayda ilan "verildi" olur; tek taraf onayı için 48 saat sonra hatırlatma.
- "Buluşma olmadı" seçeneği; ilan yeniden aktif olur.
- Demo (mock): kodda yok; "Yakında" etiketi.
- Kod gelince test: tek taraf onayında ilan açık kalır, 48 sa sonra hatırlatma; iki onayda "verildi"; "olmadı" ilanı aktife döndürür ve bekleyen onay isteğini iptal eder.

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
- Uygulama içi ödeme, emanet (escrow), komisyon (ONAY-002 (a): planlanmıyor).
- Öne çıkarma (onaylı gelir kaynağı, pilot sonrası; eşik: pilot-esikler.md karar kuralı), reklam, abonelik, ilan ücreti.
- İstanbul dışı şehirler; çoklu dil.
- Kimlik/e-Devlet doğrulama, "doğrulanmış satıcı" rozeti (pilot verisine göre).
- Canlı konum paylaşımı, "buluşmaya gidiyorum" güvenlik paylaşımı.
- Takas, pazarlık otomasyonu, görüntülü arama.
- Kişiselleştirilmiş öneri, yapay zekâ ile fotoğraf analizi.
- Web sürümü, bebek dışı kategoriler, mağaza/esnaf hesapları.

## 6. Açık kararlar
- Gelir modeli: KAPANDI, ONAY-002 (a) ücretsiz + öne çıkarma ücreti. Etki: MVP'de ödeme akışı/komisyon yok; ilan şeması ileride "öne çıkarma" alanı eklenebilir olmalı (CTO'ya not). Öne çıkarma pilot sonrası; o zaman vergi/ödeme mevzuatı için Hukuk görüşü ve kurucu onayı gerekir. Komisyon/ilan ücreti (b/c) eklenmek istenirse kapsam değişir, ayrıca onay.
- Giriş yöntemi: KAPANDI, pilotta SMS OTP yok; e-posta+Apple/Google (otp-karar.md). Telefon rozeti pilot sonrası.
- Teknik platform ve mimari: CTO (Ece).
- Marka/isim/logo: kurucu onayı; bu dokümanda varsayılmadı.
- Yasal metinler, KVKK, yasaklı ürün listesi: Hukuk (Murat).
- Pilot başarı eşikleri: docs/urun/pilot-esikler.md (8 hafta, hafta 8: 20 teslim/hafta; tahmin, pilotta kalibre).
- Mağaza yayını: kurucu onayı gerekir.

## 7. Sonraki adımlar
1. CTO: fizibilite ve efor tahmini (F1-F8), ardından RICE.
2. Tasarım (Selin): F2 ve F5 akış taslağı, tek el kullanımı.
3. Hukuk (Murat): yasaklı ürün, güvenli buluşma, sorumluluk metni görüşü.
4. (Yapıldı 2026-10-17) ONAY-002 sonrası bölüm 6 güncellendi.
