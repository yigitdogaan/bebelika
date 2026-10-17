# Pilot Başlangıç Kontrol Listesi (Kadıköy + Ataşehir)

Tarih: 2026-10-17 | Sahip: Zeynep (İK) | Durum: TASLAK; T günü ve tarihler göreli (T = ilk herkese açık sürüm günü, pilot-esikler.md V1)
Girdi: docs/urun/pilot-esikler.md, docs/pazarlama/lansman.md, docs/ik/destek-plani.md, docs/ik/kurucu-listesi.md, docs/ik/kadro.md, state/kararlar.md

Kural: bu listede ücretli, hesap veya imza gerektiren her madde kurucu işidir (CLAUDE.md). Ekip onu sormaz; CEO raporunda "👤 Senin yapman gereken" olarak geçer.

## 1. Yayın öncesi kapılar (hepsi işaretlenmeden T günü yok)

| # | Kapı | Sahip | Kanıt / belge | Durum |
|---|---|---|---|---|
| K1 | Vercel demo yayını (gezilebilir ilk sürüm) | Kurucu (hesap), Ece (yayın) | app/README.md | Kurucu işi |
| K2 | Supabase migration 0001-0006 gerçek DB'de denendi | Ece (CTO) | docs/teknik/ | Kurucu Supabase hesabı bekliyor (bloker) |
| K3 | Tarayıcıda elle gezinme testi (demo-senaryo adımları) | Ece, Kerem | docs/teknik/ bulgu notu | Döngü 10'da |
| K4 | Mağaza hesapları (Apple, Google Play) ve mağaza metni | Kurucu (hesap), Can (metin), Murat (ifade) | docs/pazarlama/magaza-metni.md | Kurucu işi |
| K5 | Dış avukat incelemesi: sözleşme, aydınlatma, Topluluk Kuralları, S19/S20 metinleri | Murat (paket), kurucu (teklif ve imza) | docs/hukuk/avukat-paketi.md | ONAY-004 |
| K6 | Konum rıza ekranı ve hesap silme akışı | Ece (kod), Selin (ekran) | docs/tasarim/akislar.md §14a; S13-S15 tasarımı henüz yok (Döngü 10) | Açık |
| K7 | Destek kanalı: e-posta alan adına bağlı; #ceo-rapor ve #onay bildirim kanalı | Defne, kurucu (alan adı) | docs/ik/destek-plani.md §6 | Kısmen karar verildi |
| K8 | Moderasyon nöbeti: ilk hafta Kerem, yedek Murat; C1 4 saat SLA metni Murat'ta | Kerem, Murat | docs/ik/destek-plani.md §2-4 | Teyit bekliyor |
| K9 | Kategori ağacı (10 ana kategori) ve mock seed = demo-veri.md | Kerem, Ece | docs/urun/kategoriler.md | Döngü 10'da |
| K10 | Mağaza yayın tarihi kararı (pilot 8 haftalık sayacı buna bağlı) | Kurucu | docs/ik/kurucu-listesi.md #8 | Kurucu işi |

Kapılardan biri açıkken T günü ertelenir. Ertelemenin yeni tarihi CEO raporunda kurucuya bildirilir; T'nin kayması pilot haftalarını da kaydırır.

## 2. Ekip hazırlığı (İK kontrolü)

- Moderasyon kuyruğu: K8 tamam olmadan kuyruk kapatılamaz. Hafta sonu kuyruğu yalnız C1/C3 için kontrol edilir (destek-plani.md §3).
- Destek sahibi: kullanıcı soruları için birincil Can, yedek Defne (varsayım; matris.md §4).
- Kurucu bildirimi: #ceo-rapor ve #onay kanallarının kurucu tarafından takip edildiği T-1 haftada teyit edilir.
- Pilot ekibi çağrı listesi: Ece (teknik açılış), Kerem (moderasyon ve ürün), Murat (hukuk ve itiraz), Can (kanallar), Selin (materyal). Her biri T gününde kendi kanalına durum notu yazar.
- Yeni işe alım yok: kadro.md tetikleyicileri (destek > 30/hafta gibi) pilot ilk 2 haftadan sonra yeniden bakılır. Tetiklenirse #onay talebi açılır, onay gelmeden kimse eklenmez.

## 3. Gün T

1. Kurucu demo bağlantısını ve mağaza yayınını (varsa) teyit eder.
2. Ece teknik açılışı yapar; Supabase ve mock modu dışında kalan hata izleme kontrol edilir.
3. Can T-2 hafta satıcı davetiyesini gönderir; kanal 1 ve 2 yayına girer (lansman.md §3).
4. Moderasyon kuyruğu açılır; nöbetçi ilk kontrolü yapar ve sonucu #genel'e yazar.
5. CEO raporunda "T günü durumu" tek satır olarak geçer.

## 4. Hafta 1-8 ritmi

| Zaman | İş | Sahip | Çıktı |
|---|---|---|---|
| Her iş günü (sabah, akşam) | Moderasyon kuyruğu kontrolü | Nöbetçi (Kerem / Murat) | Haftalık metrik notu |
| Haftalık | Destek talepleri sayımı (eşik > 30/hafta) | Can | destek-plani.md §5 satırı |
| Haftalık | Pilot eşikleri (teslim, ilan, mesaj, şikâyet) | Kerem (sahip), Ece (panel) | pilot-esikler.md §2 kıyası |
| Hafta 2 | Arz planı revizyonu (ilk 100 ilan) | Kerem | docs/urun/pilot-arz.md §3 |
| Hafta 4 | Ara değerlendirme: kanal bazlı edinim, ilçe kayma kuralı (<30 aktif ilan) | Kerem, Can | pilot-esikler.md §3, pilot-arz.md §2 |
| Hafta 4 | Kadro tetikleyicisi yeniden bakılır | Zeynep | kadro.md güncellemesi |
| Hafta 8 | Karar: başarılı / uzatma / pivot | Defne (CEO), Kerem (veri) | kararlar.md ve kurucu raporu |

## 5. Geri çekilme ve durdurma kuralları

- Ciddi güvenlik olayı (C1 istismar şüphesi, fiziksel tehlike) hangi metrik olursa olsun pilotu durdurma gerekçesidir; Hukuk ile belirlenir (pilot-esikler.md §3).
- C1 bildirimi: gizleme hemen (hidden_auto), inceleme 4 saat iç hedef. Nöbet yoksa bu süre karşılanmaz; bu durum kurucuya bildirilir.
- Kullanıcıya "güvenli ürün", "onaylı ilan", "yasa gereği" gibi ifadeler yasak (kararlar.md, Murat 2026-10-17). Metin kontrolü T-1 haftada yapılır.

## 6. Bu listede bilinmeyenler (varsayım)

- Murat'ın K5 ve K8 teyidi gelmeden moderasyon süreleri kesinleşmiş sayılmaz.
- Mağaza yayın tarihi yoksa T göreli kalır; takvim kurucu kararıyla sabitlenir.
- Pilotta SMS OTP yok (otp-karar.md); sahte hesap riski izlenir, bu liste onu kapatmaz.
