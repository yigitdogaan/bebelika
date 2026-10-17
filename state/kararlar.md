# Karar Defteri
tarih | kim | karar | gerekçe
2026-10-17 | cto | app/ iskeleti: Expo SDK52 + Supabase (profil, ilan+PostGIS 400m snap, mesaj, rapor/engel, RLS); keşfet girişsiz okunur, yazma doğrulanmış e-posta ister | ONAY-003 sonrası; docs/teknik/mimari.md
2026-10-16 | Kerem | MVP kapsamı docs/urun/mvp.md: yalnız elden teslim, İstanbul pilot, F1-F8 içeride; ödeme/öne çıkarma dışarıda, ONAY-002'ye bağlı kararlar açık | Küçük MVP; gelir modeli kurucu kararına kadar ücretsiz varsayım
2026-10-16 | cto | Expo/RN + TypeScript, Supabase (Postgres/PostGIS) backend; webview elendi | Webview App Store minimum işlevsellik red riski; tek kod tabanı, düşük maliyet, PostGIS geo-arama (docs/teknik/mimari.md)
2026-10-16 | hukuk (Murat) | Ürün güvenliği + KVKK ön analizi taslağı docs/hukuk/politika.md: MVP'de gıda/sağlık/emzik/kazalı oto koltuğu yasak, konum ilçe düzeyi, 18+ üyelik önerildi | Avukat incelemesi ve kurucu onayı olmadan yayın yok
2026-10-17 | Defne | ONAY-001 onaylandı: 7 kişilik ekip kesinleşti | Kurucu Slack'te "onay" yazdı
2026-10-17 | Defne | ONAY-002 onaylandı: gelir modeli (a) ücretsiz + öne çıkarma ücreti (öne çıkarma MVP dışı) | Kurucu Slack'te "onay" yazdı
2026-10-17 | Defne | ONAY-003 onaylandı: Expo/RN + Supabase mimarisi ve ücretli servisler (Apple/Google/Supabase/alan adı) | Kurucu Slack'te "Onay" yazdı; kod yazımı CTO için açıldı
2026-10-16 | cto | Pilotta SMS OTP yok; e-posta+Apple/Google+hız sınırı/CAPTCHA, telefon rozeti pilot sonrası (Supabase Phone Auth + yerel SMS) | SMS maliyeti ve sender-ID gecikmesi pilotta gereksiz, KVKK minimizasyonu (docs/teknik/otp-karar.md)
2026-10-17 | Defne | ONAY-004 onaylandı: yayın öncesi dış avukat incelemesi | Kurucu Slack'te "Onay" yazdı
2026-10-17 | Defne | Tasarım önerileri kabul: "Önerilen buluşma noktası" dili, "doğrulanmış" yalnız telefon için, keşfet girişsiz gezilebilir (pilotta test) | Hukuk riskini azaltır, sürtünmeyi düşürür
2026-10-17 | Defne | Pilot edinim: anne grupları + mikro-influencer + QR noktaları, Kadıköy/Ataşehir; hafta 8 eşiği 20 teslim/hafta, 250 aktif ilan (tahmin) | docs/pazarlama/rakip.md; ücretli kısımlar kurucu işi
2026-10-17 | Kerem | mvp.md §6 ONAY-002 (a) ile güncellendi; pilot eşikleri docs/urun/pilot-esikler.md (8 hafta, hafta 8: 20 teslim/hafta, 250 ilan; tahmin) | Gelir kararı kapandı; eşikler rakip.md §5 ile uyumlu, pilotta kalibre edilecek
2026-10-17 | Defne | Pilot karar kuralında en az İKİ güven metriği yeter | Pilot hacmi küçük, üç metrik gürültülü olur
2026-10-17 | Defne | Güven&Moderasyon Uzmanı işe alımı şimdilik önerilmeyecek; F8 pilotta Kerem+Murat'ta, tetikleyicide (matris.md) yeniden bakılır | Her agent limit artırır; pilot hacmi düşük
