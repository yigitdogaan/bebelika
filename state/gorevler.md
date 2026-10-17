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
[ ] P3 | hukuk | Dış avukat incelemesi paketi (yayın öncesi) | ONAY-004 ✔
[ ] P1 | cto | npm install + tsc + expo install --fix doğrulaması; migration'ları test Supabase'te dene | kurucu Supabase hesabı
[x] P2 | cto | Şikâyet/engelleme migration 0004 + servis + ReportScreen (derleme/SQL DOĞRULANMADI)
[x] P2 | tasarim | akislar.md v0.2 (kod fark listesi §14a)
[x] P1 | cto | İlan detay S7 + ReportScreen bağlandı (§14a #5,#6,#9,#10,#12 kaldı; derleme DOĞRULANMADI)
[x] P2 | tasarim | S19/S20 tasarımı → docs/tasarim/s19-s20.md
[x] P1 | cto | Sohbet ekranı (S12) + mesajlaşma (migration 0005; derleme/SQL DOĞRULANMADI)
[x] P2 | cto | moderasyon.md §9 K8: migration 0006 hesap durumu + mesaj engeli (SQL DOĞRULANMADI)
[x] P2 | cto | Gelen kutusu ekranı (tsc/web export temiz)
[ ] P3 | cto | Push (Apple hesabı gerekir), buluşma öner/foto, K2 sistem mesajı, moderasyon paneli, mock veri modu
[ ] P2 | cto | akislar.md §14a kalan maddeler
[x] P3 | hukuk | Askıdaki hesap/buluşma kuralı → moderasyon.md §9
[ ] P2 | cto | Taslak otomatik kayıt, konum rıza ekranı, profil ilçesi

## Döngü 9 kuyruğu (kurucu önceliği: telefonda/web'de açılan, örnek verili ilk sürüm)
[ ] P1 | cto | Mock veri modu: Supabase'siz, örnek ilan/sohbet/profil verisiyle web export çalışsın → app/ + docs/teknik/mock-notu.md
[ ] P1 | cto | Web export'u statik yayınlanabilir yap + "demo nasıl açılır" README (kurucu için 5 adım)
[ ] P2 | cto | akislar.md §14a kalan maddeler (#5,#6,#9,#10,#12)
[ ] P1 | tasarim | Demo örnek veri seti: 12 gerçekçi ilan (kategori/fiyat/ilçe), 3 sohbet senaryosu → docs/tasarim/demo-veri.md (Ece mock için kullanır)
[ ] P2 | tasarim | Boş durum, hata, yükleniyor ekranları → docs/tasarim/bos-durumlar.md
[ ] P2 | tasarim | Marka rehberi v1 (renk, tipografi, logo yönü, ton) → docs/tasarim/marka.md
[ ] P3 | tasarim | Güvenli buluşma ipuçları ekranı içeriği → docs/tasarim/bulusma-ipuclari.md
[ ] P1 | urun | Demo gezinti senaryosu: kurucunun 5 dk'da göreceği akış, kabul kriterleri → docs/urun/demo-senaryo.md
[ ] P2 | urun | Kategori ağacı + ürün güvenliği kuralları (araba koltuğu, pompa vb.) → docs/urun/kategoriler.md
[ ] P2 | urun | Pilot ilçe seçimi ve ilk 100 ilan arz planı → docs/urun/pilot-arz.md
[ ] P3 | urun | Sonraki sürüm backlog sıralaması (RICE) → docs/urun/backlog.md
[ ] P2 | hukuk | Dış avukat incelemesi paketi (belge listesi, sorular) → docs/hukuk/avukat-paketi.md | ONAY-004 ✔
[ ] P2 | hukuk | Riskli ürün kategorileri uyarı metni → docs/hukuk/riskli-urunler.md
[ ] P2 | hukuk | Kullanıcı sözleşmesi ve aydınlatma metni TASLAĞI → docs/hukuk/sozlesme-taslak.md
[ ] P3 | hukuk | Öne çıkarma ücreti tüketici hukuku notu (ONAY-002 a) → docs/hukuk/one-cikarma.md
[ ] P2 | pazarlama | Slogan/ton önerisi + mağaza listeleme metni taslağı (TR) → docs/pazarlama/magaza-metni.md
[ ] P2 | pazarlama | İstanbul pilot lansman planı → docs/pazarlama/lansman.md
[ ] P2 | pazarlama | Güven odaklı mesajlar ve SSS → docs/pazarlama/sss.md
[ ] P3 | pazarlama | Bütçeli kanallar için seçenek listesi → docs/pazarlama/butce.md
[ ] P2 | ik | Yeni rol analizi (QA/destek/moderatör); öneri varsa #onay → docs/ik/kadro.md
[ ] P2 | ik | Pilot destek/moderasyon vardiya ve SLA planı → docs/ik/destek-plani.md
[ ] P3 | ik | Çalışma düzeni ve teslim notu şablonları → docs/ik/calisma-duzeni.md
[ ] P3 | ik | Kurucu "Senin yapman gerekenler" listesi (hesaplar, alan adı, mağaza) → docs/ik/kurucu-listesi.md
