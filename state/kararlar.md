# Karar Defteri
tarih | kim | karar | gerekçe
2026-10-17 | Defne | Döngü 9 önceliği: Supabase'siz mock veri moduyla telefonda/web'de açılan demo | Kurucu önceliği; migration'lar gerçek Supabase olmadan doğrulanamıyor
2026-10-17 | cto | app/ iskeleti: Expo SDK52 + Supabase (profil, ilan+PostGIS 400m snap, mesaj, rapor/engel, RLS); keşfet girişsiz okunur, yazma doğrulanmış e-posta ister | ONAY-003 sonrası; docs/teknik/mimari.md
2026-10-17 | cto | K8 teyit: 0006 migration ile profiles.status/suspended_until + can_act()/can_message(); askı/ban hesap mesaj/sohbet/ilan açamaz, sohbet salt okunur; gelen kutusu my_inbox() RPC + InboxScreen | 0001-0005'te hesap durumu yoktu (gerçek boşluk); docs/teknik/gelen-kutusu-notu.md, SQL gerçek DB'de DOĞRULANMADI
2026-10-17 | cto | S7 ilan detay + ReportScreen bağlantısı, §14a #1-4,#11 uygulandı; sohbet butonu pasif | Mağaza UGC şikâyet girişi şart; sahte işlev yok; docs/teknik/ilan-detay-notu.md
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
2026-10-17 | Defne | moderasyon.md pilot iç süreç taslağı olarak kabul; Topluluk Kuralları yayını ONAY-004 dış avukat incelemesine bağlı | Pilot ölçeğine uygun, hukuki süreler teyitsiz
2026-10-17 | Defne | Pilotta giriş e-posta+Apple/Google, telefon rozeti pilot sonrası (mvp.md/akislar.md) | otp-karar.md ile tutarlılık
2026-10-17 | Defne | Harita ekranı (S5) MVP'den çıkarıldı; liste+mesafe filtresi yeter; ilan detay ekranı CTO için P1 | Pilotta karmaşıklığı azaltır (Selin önerisi)
2026-10-17 | Ece | Şikâyet/engel: mevcut reports+blocks genişletildi; sütun bazlı GRANT + trigger ile öncelik ve auto-hide (N=3) | İstemciye güvenilmez; tsc/migration doğrulanamadı (docs/teknik/sikayet-engel-notu.md)
2026-10-17 | Defne | moderasyon.md §9 (askıdaki hesap/buluşma: yeni sohbet yok, mevcutlar salt okunur, nötr bildirim, Bebelika buluşmayı yönetmez) kabul; K2/K3 sözleşme metni ONAY-004 dış avukat incelemesine bağlı | Ayrı onay gerekmez, yayın öncesi avukat teyidi var
2026-10-17 | Defne | S19/S20 kabul: itiraz 14 gün, yanıt hedefi 7 gün pilot iç hedef (yasal taahhüt değil), ikinci itiraz yok, destek e-postası alan adı sonrası | Hukuk süreleri teyitsiz; teyit ONAY-004 dış avukatta
2026-10-17 | Murat | Askıda/banlı hesap: yeni eylem kapanır, sohbet salt okunur, karşı tarafa nötr sistem mesajı (sebep/şikâyetçi/süre yok; güvenlik vakalarında "buluşmayın" uyarısı), Bebelika buluşma/ödeme/iade yönetmez | Kişisel veri ve itibar riski, pilotta ödeme yok; moderasyon.md §9, Av. teyidi gerekir
2026-10-17 | Ece | Sohbet: Supabase Realtime + RLS, hız sınırı trigger (20 sohbet/gün, 20 mesaj/dk), IBAN/telefon uyarısı engellemez; buluşma önerisi ve foto sonraya | Ücretsiz, ek servis yok; tsc/SQL doğrulanamadı (docs/teknik/sohbet-notu.md)
2026-10-17 | Ece | Mock veri modu ekran koduna dokunmadan istemci seviyesinde (supabase.ts); demoda konum sabit (Kadıköy), izin istenmez | Ekranlar gerçek arayüzle test edilir, tek anahtar env; web'de GPS demoyu bozmasın
2026-10-17 | Murat | Kullanıcıya "güvenli ürün/onaylı ilan/güvenli buluşma noktası" yasak, "öneri/satıcı beyanı" kullanılır; engel metinlerinde "yasa gereği" yazılmaz | Garanti çağrışımı sorumluluk doğurur, yasal dayanak teyitsiz
2026-10-17 | Zeynep | Güven&Moderasyon ve diğer roller için #onay açılmadı; tetikleyiciler kadro.md'de | Önceki CEO kararıyla uyumlu, pilot hacmi düşük
2026-10-17 | Can | Mağaza/SSS'de garanti dili yok; davet kodu ödülsüz; lansman "arz önce" | politika.md uyumu; ödül ayrı Hukuk+onay ister; hafta 4 arz eşiği
2026-10-17 | Selin | Demoda yasaklı ürün ve sahte işlev yok, kapatılamaz "Demo verisi" bandı; palet Nane+Şeftali, "doğrulanmış" rozeti yok | Dürüstlük, mağaza incelemesi, Hukuk dili
2026-10-17 | Kerem | Pilotta biberon yasak; kategori ağacı 10 ana kategori; demoda buluşma/teslim adımları "Yakında" | Hijyen belirsizliği (Murat itiraz edebilir); kodda olmayan işlev gösterilmez
2026-10-17 | Defne | Destek e-postası alan adı alınana kadar yok; kurucu bildirim kanalı #ceo-rapor ve #onay | Alan adı kurucu işi (👤); pilotta ek servis yok
2026-10-17 | Defne | Biberon pilotta yasak (Kerem önerisi) geçici kabul; sağma pompası ve nihai karar Murat'ta | Hijyen belirsizliği; yasak sonradan gevşetilebilir
2026-10-17 | Defne | Tur 10 önceliği: demo doğrulama + içerik uyumu (mock seed = demo-veri.md, tarayıcı testi, kategori) | Kurucu önceliği: açılıp gezilebilen ilk sürüm
2026-10-17 | Ece | 'beslenme' slug'ı korundu, adı Beslenme gereçleri; Alert yerine dialog.ts; Keşfet varsayılan yarıçap 10 km; beyan ilan açıklamasına Satıcı beyanı olarak yazılır | demo-veri.md uyumu; RN-web'de Alert çalışmıyor; pilot ilçeleri ~6 km; şema değişikliği gerektirmesin
2026-10-17 | Murat | Biberon ve sağma pompası pilotta YASAK; C1 4 saat iç hedef, taahhüt değil; kodda olmayan özellik mağaza metni/SSS'ye yazılmaz | Pompa tıbbi cihaz olabilir; nöbet insan bağımlı; yanıltma ve mağaza red riski
2026-10-17 | Kerem | Mağazada şimdilik ücretsiz ve İstanbul pilot (Kadıköy/Ataşehir) yazılabilir; demoda sahte satıcı yanıtı yok | ONAY-002 (a) uyumu; aldatıcı olur
2026-10-17 | Selin | Şeftali yalnız süs/rozet dolgusu, anlam taşıyan öğeler Mürekkep/Nane Koyu | Ölçülen kontrast 2:1
2026-10-17 | Can | Grup listesi uydurulmadı, manuel doğrulanacak; edinim hedefi kayıt üzerinden (K1 %45/K2 %15/K3 %25/K4 %15, tahmin) | Kapalı gruplar web'de görünmüyor; ücretli kanallar onay bekler
2026-10-17 | İK | Kurucu bildirim kanalı #ceo-rapor ve #onay; ücretli/hesap maddeleri kurucu işi | CLAUDE.md kuralı
