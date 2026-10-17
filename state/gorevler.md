# Görev Panosu
Format: [durum] Öncelik | Sorumlu | Görev → çıktı | bağımlılık
Durumlar: [ ] bekliyor · [~] sürüyor · [x] bitti · [!] engelli

[x] P1 | urun | MVP kapsam dokümanı → docs/urun/mvp.md
[x] P1 | cto | Teknik mimari önerisi → docs/teknik/mimari.md (ONAY-003 ✔)
[x] P1 | hukuk | Güvenlik politikası + KVKK ön analizi (taslak) → docs/hukuk/politika.md
[x] P2 | pazarlama | Rakip ve pazar analizi → docs/pazarlama/rakip.md
[x] P2 | tasarim | Ana ekran akışları ve wireframe (metin) → docs/tasarim/akislar.md
[x] P2 | cto | Telefon OTP MVP kararı → docs/teknik/otp-karar.md (pilotta SMS OTP yok)
[x] P2 | cto | app/ Expo iskeleti + Supabase şema → app/ (derleme/SQL henüz doğrulanmadı)
[x] P2 | urun | Pilot başarı eşikleri → docs/urun/pilot-esikler.md
[x] P2 | urun | mvp.md §6 güncellendi
[x] P3 | ik | Ekip yetkinlik matrisi → docs/ik/matris.md
[x] P1 | cto | İlan CRUD + fotoğraf + keşfet (app/) — npm install/tsc DOĞRULANMADI
[x] P2 | urun | mvp.md F1 SMS kodu düzeltildi (akislar.md de güncellendi)
[x] P2 | hukuk | Moderasyon süreci taslağı → docs/hukuk/moderasyon.md
[x] P3 | hukuk | Dış avukat incelemesi paketi (yayın öncesi) | ONAY-004 ✔ (paket hazır; avukat seçimi kurucuda)
[ ] P1 | cto | Migration'ları (0001-0007) test Supabase'te dene | kurucu Supabase hesabı (npm install + tsc tamam)
[x] P2 | cto | Şikâyet/engelleme migration 0004 + servis + ReportScreen (derleme/SQL DOĞRULANMADI)
[x] P2 | tasarim | akislar.md v0.2 (kod fark listesi §14a)
[x] P1 | cto | İlan detay S7 + ReportScreen bağlandı
[x] P2 | tasarim | S19/S20 tasarımı → docs/tasarim/s19-s20.md
[x] P1 | cto | Sohbet ekranı (S12) + mesajlaşma (migration 0005; SQL DOĞRULANMADI)
[x] P2 | cto | moderasyon.md §9 K8: migration 0006 hesap durumu + mesaj engeli (SQL DOĞRULANMADI)
[x] P2 | cto | Gelen kutusu ekranı (tsc/web export temiz)
[ ] P3 | cto | Push (Apple hesabı gerekir), buluşma öner/foto, K2 sistem mesajı, moderasyon paneli
[~] P2 | cto | akislar.md §14a: #5,#9,#10 bitti; #6 filtre sayfası, #12 S19/S20 + engellenenler kaldı
[x] P3 | hukuk | Askıdaki hesap/buluşma kuralı → moderasyon.md §9
[~] P2 | cto | Konum rıza ekranı ve profil ilçesi bitti; taslak otomatik kayıt kaldı

## Döngü 9 — tamamlandı
[x] P1 | cto | Mock veri modu → app/src/lib/mock/, docs/teknik/mock-notu.md
[x] P1 | cto | Statik web yayını + demo README (5 adım) → app/README.md, app/vercel.json
[x] P1 | tasarim | Demo örnek veri seti → docs/tasarim/demo-veri.md
[x] P2 | tasarim | Boş/hata/yükleniyor ekranları → docs/tasarim/bos-durumlar.md
[x] P2 | tasarim | Marka rehberi v1 → docs/tasarim/marka.md
[x] P3 | tasarim | Güvenli buluşma ipuçları içeriği → docs/tasarim/bulusma-ipuclari.md
[x] P1 | urun | Demo gezinti senaryosu → docs/urun/demo-senaryo.md
[x] P2 | urun | Kategori ağacı + ürün güvenliği → docs/urun/kategoriler.md
[x] P2 | urun | Pilot ilçe ve ilk 100 ilan arz planı → docs/urun/pilot-arz.md
[x] P3 | urun | RICE backlog → docs/urun/backlog.md
[x] P2 | hukuk | Avukat paketi → docs/hukuk/avukat-paketi.md
[x] P2 | hukuk | Riskli ürün metinleri → docs/hukuk/riskli-urunler.md
[x] P2 | hukuk | Sözleşme/aydınlatma/konum rızası TASLAK → docs/hukuk/sozlesme-taslak.md
[x] P3 | hukuk | Öne çıkarma notu → docs/hukuk/one-cikarma.md
[x] P2 | pazarlama | Mağaza metni taslağı → docs/pazarlama/magaza-metni.md
[x] P2 | pazarlama | Pilot lansman planı → docs/pazarlama/lansman.md
[x] P2 | pazarlama | Güven mesajları ve SSS → docs/pazarlama/sss.md
[~] P3 | pazarlama | Bütçeli kanal seçenekleri → docs/pazarlama/butce.md | kurucu bütçe tavanı
[x] P2 | ik | Kadro analizi (işe alım yok) → docs/ik/kadro.md
[x] P2 | ik | Destek/moderasyon SLA planı → docs/ik/destek-plani.md
[x] P3 | ik | Çalışma düzeni şablonları → docs/ik/calisma-duzeni.md
[x] P3 | ik | Kurucu listesi → docs/ik/kurucu-listesi.md

## Döngü 10 (demo doğrulama + içerik uyumu) — tamamlandı
[x] P1 | cto | Mock seed demo-veri.md'ye eşlendi → app/src/lib/mock/, docs/teknik/mock-notu.md
[x] P1 | cto | Tarayıcı gezinti testi 24/24 → docs/teknik/gezinti-testi.md
[x] P2 | cto | Migration 0007, kaynak/davet kodu alanı, aydınlatma-şema karşılaştırması
[~] P2 | cto | Konum rıza + hesap silme bitti; §14a #6 ve #12 kaldı
[~] P1 | tasarim | Demo ekran görüntüleri — giriş dışı ekranlar için demo girişi adımı yok
[x] P2 | tasarim | Kontrast ölçümü → docs/tasarim/kontrast.md
[x] P2 | tasarim | Konum rıza, hesap silme, profil tasarımı → docs/tasarim/konum-silme-profil.md
[ ] P3 | tasarim | Mağaza ekran görüntüsü planı (Can ile) → docs/tasarim/magaza-ekranlari.md
[x] P1 | urun | mvp.md 10 kategori; demo-senaryo.md seed eşlemesi
[x] P2 | urun | F5/F6 kabul kriterleri; Can'a ücretsiz/pilot bölge cevabı
[x] P2 | urun | Demo geri bildirim soruları → docs/urun/demo-geri-bildirim.md
[~] P3 | urun | Backlog RICE güncellemesi | kurucu demo geri bildirimi
[x] P2 | hukuk | Topluluk Kuralları + S19/S20 metinleri → docs/hukuk/topluluk-kurallari.md
[x] P2 | hukuk | Biberon ve pompa kararı → docs/hukuk/biberon-pompa-karari.md
[x] P2 | hukuk | İfade kontrolü + C1 SLA teyidi → docs/hukuk/ifade-kontrolu.md
[x] P3 | hukuk | Mağaza veri formları + saklama-imha → docs/hukuk/magaza-ve-saklama.md
[x] P2 | pazarlama | Grup listesi şablonu + izin mesajı → docs/pazarlama/grup-izin.md
[x] P3 | pazarlama | Hafta 4/8 edinim hedefi → docs/pazarlama/edinim-hedefi.md
[x] P2 | pazarlama | Demo tanıtım metni → docs/pazarlama/demo-tanitim.md
[~] P3 | pazarlama | Marka/alan adı alternatifleri | alan adı müsaitliği kurucu kontrolü
[x] P2 | ik | Destek e-postası/kurucu kanalı kararı → destek-plani.md
[x] P3 | ik | Pilot başlangıç kontrol listesi → docs/ik/pilot-baslangic.md
[x] P3 | ik | kurucu-listesi.md v0.2
[x] P3 | ik | Kuyruk/verim notu → docs/ik/kuyruk-verim.md

## Döngü 11 (öneriler)
[ ] P1 | cto | §14a #6 filtre sayfası, #12 S19/S20 + engellenenler listesi (docs/hukuk/topluluk-kurallari.md metinleri)
[ ] P1 | tasarim | ekran.cjs demo giriş adımı; Keşfet, ilan kartı, detay, sohbet, ilan ver ekranlarını yeni tasarım sistemine geçir; ekran görüntüleri → docs/tasarim/ekranlar/
[ ] P2 | cto | vector-icons ekle (sekme ikonları); sıralama formülünü nearby_listings SQL içine ekle; taslak otomatik kayıt; yetim Storage temizliği
[ ] P2 | cto | Murat: reports.reporter_id SET NULL + silme işi + aydınlatma tablosu ekleri
[ ] P2 | urun | kategoriler.md: beslenme adı ve 11 kategori birleştirme kararı (Selin ile)
[ ] P2 | pazarlama | Murat ifade-kontrolu.md düzeltmeleri (Can/Selin); grup listesi manuel doğrulama
[ ] P3 | hukuk | sozlesme-taslak 3y/2y saklama çelişkisi; geri çağırma kaynak listesi doğrulaması
[ ] P3 | urun | Pilot ilk 100 ilan arz planı + Can grup listesi birleştirme
