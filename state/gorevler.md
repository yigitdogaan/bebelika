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
[ ] P1 | cto | npm install + tsc + expo install --fix doğrulaması; migration'ları test Supabase'te dene | kurucu Supabase hesabı
[x] P2 | cto | Şikâyet/engelleme migration 0004 + servis + ReportScreen (derleme/SQL DOĞRULANMADI)
[x] P2 | tasarim | akislar.md v0.2 (kod fark listesi §14a)
[x] P1 | cto | İlan detay S7 + ReportScreen bağlandı (§14a #5,#6,#9,#10,#12 kaldı; derleme DOĞRULANMADI)
[x] P2 | tasarim | S19/S20 tasarımı → docs/tasarim/s19-s20.md
[x] P1 | cto | Sohbet ekranı (S12) + mesajlaşma (migration 0005; derleme/SQL DOĞRULANMADI)
[x] P2 | cto | moderasyon.md §9 K8: migration 0006 hesap durumu + mesaj engeli (SQL DOĞRULANMADI)
[x] P2 | cto | Gelen kutusu ekranı (tsc/web export temiz)
[ ] P3 | cto | Push (Apple hesabı gerekir), buluşma öner/foto, K2 sistem mesajı, moderasyon paneli (mock veri modu bitti)
[ ] P2 | cto | akislar.md §14a kalan maddeler (#5,#6,#9,#10,#12)
[x] P3 | hukuk | Askıdaki hesap/buluşma kuralı → moderasyon.md §9
[ ] P2 | cto | Taslak otomatik kayıt, konum rıza ekranı, profil ilçesi

## Döngü 9 (kurucu önceliği: telefonda/web'de açılan, örnek verili ilk sürüm) — tamamlandı
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

## Döngü 10 (kurucu önceliği: açılıp gezilebilen, örnek verili ilk sürüm — doğrulama + içerik uyumu)
[ ] P1 | cto | Mock seed'i Selin'in demo-veri.md'sine göre güncelle; yer tutucu foto | demo-veri.md hazır
[ ] P1 | cto | Tarayıcıda elle gezinme testi (demo-senaryo.md adımlarıyla), bulguları docs/teknik/ altına yaz
[ ] P2 | cto | Kategori migration (4 yeni slug), ilan kaynak etiketi, UTM/davet kodu alanı; aydınlatma tablosu-şema karşılaştırması (Murat'a)
[ ] P2 | cto | Konum rıza ekranı ve hesap silme akışı (SSS S13/S15 buna bağlı); akislar.md §14a kalanlar (#5,#6,#9,#10,#12)
[ ] P1 | tasarim | Demo gezinti ekran görüntüleri (scripts/ekran.cjs) → docs/tasarim/ekranlar/; görsel kalite kontrolü
[ ] P2 | tasarim | Kontrast ölçümü (marka.md paleti) → docs/tasarim/kontrast.md
[ ] P2 | tasarim | S13/S14/S15 detay ekranları (konum rıza, hesap silme, profil)
[ ] P3 | tasarim | Mağaza ekran görüntüsü planı (Can ile) → docs/tasarim/magaza-ekranlari.md
[ ] P1 | urun | mvp.md kategori güncellemesi (10 ana kategori); demo-senaryo.md'yi mock seed'e eşle
[ ] P2 | urun | F5/F6 kabul kriterlerini mock'a göre yaz; Can'a "ücretsiz/pilot bölge" cevabı (#genel)
[ ] P2 | urun | Demo geri bildirim soruları → docs/urun/demo-geri-bildirim.md
[ ] P3 | urun | Backlog RICE'ı demo bulgularına göre güncelle
[ ] P2 | hukuk | Topluluk Kuralları metni, S19/S20 kullanıcı metinleri → docs/hukuk/
[ ] P2 | hukuk | Biberon ve sağma pompası kararı (Kerem'in yasak önerisine teyit/itiraz)
[ ] P2 | hukuk | Buluşma ipuçları / mağaza metni / SSS ifade kontrolü; C1 SLA teyidi
[ ] P3 | hukuk | Mağaza veri formları ve saklama-imha politikası taslağı
[ ] P2 | pazarlama | Kadıköy/Ataşehir grup listesi ve izin mesajı taslağı → docs/pazarlama/
[ ] P3 | pazarlama | Hafta 4 kanal bazlı edinim hedefi (pilot-esikler.md açık soru 1)
[ ] P2 | pazarlama | Demo tanıtım metni: kurucunun paylaşabileceği kısa "demoyu dene" mesajı
[ ] P3 | pazarlama | Marka/alan adı alternatifleri ve kontrol listesi (kurucu onayı için)
[ ] P2 | ik | Destek e-postası/kurucu bildirim kanalı kararını destek-plani.md'ye işle
[ ] P3 | ik | Pilot başlangıç kontrol listesi → docs/ik/pilot-baslangic.md
[ ] P3 | ik | kurucu-listesi.md güncelle (Vercel demo, Supabase, avukat vb. sıralı)
[ ] P3 | ik | Döngü 10 sonrası kuyruk/verim notu → docs/ik/
