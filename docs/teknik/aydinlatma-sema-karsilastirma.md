# Aydınlatma tablosu ↔ veri şeması karşılaştırması
Yazan: Ece (CTO) · Tarih: 17.10.2026 · Alıcı: Murat (Hukuk) · Karşılaştırılan: docs/hukuk/sozlesme-taslak.md Bölüm B tablosu ↔ app/supabase/migrations 0001-0007.
Not: Hukuki değerlendirme Murat'ın/avukatın; burada yalnız "kodda gerçekte ne toplanıyor" yazılı. SQL henüz bir Supabase örneğinde çalıştırılmadı.

## 1. Tablo satırı satırı
| Aydınlatma satırı | Şemada gerçekte | Fark / öneri |
|---|---|---|
| Ad/takma ad, **telefon** veya e-posta | `profiles.display_name` (2-40), e-posta `auth.users` (Supabase Auth). Telefon **toplanmıyor** (pilotta SMS OTP yok: otp-karar.md). Apple/Google ile girişte sağlayıcıdan e-posta gelir. | Tablodan "telefon" çıkarılabilir veya "pilotta toplanmaz" yazılır. Apple/Google ile giriş aydınlatmada anılmalı (sağlayıcıdan alınan veri). |
| İlan içeriği, fotoğraf, **ilçe/mahalle** konumu | `listings` (başlık, açıklama, fiyat, durum, yaş, kategori); fotoğraf Storage `listing-photos` (yeniden kodlanır, **EXIF/GPS silinir**); konum = tetikleyiciyle **~400 m ızgaraya yuvarlanmış nokta** (`ST_SnapToGrid 0.004°`) | Konum "ilçe/mahalle" değil, ≈400 m kesinlikte nokta; ilanda tutulur ve mesafe hesabında kullanılır. Metin "yaklaşık (yaklaşık 400 m) konum" olmalı. Tam adres tutulmaz (doğru). |
| Mesajlar | `conversations`, `messages` (gövde ≤2000, `read_at` okundu zamanı) | "Okundu bilgisi" meta verisi tabloya eklenmeli. Mesajlar şifreli değil (TLS + RLS; uçtan uca değil): gizlilik metninde "uçtan uca şifreli" denmemeli. |
| Şikâyet/moderasyon kayıtları | `reports` (kategori, durum, öncelik, ayrıntı metni), `moderation_actions`, `appeals`, `audit_log` (aktör, işlem) | Tabloda yalnız "şikâyet" var; moderasyon işlemi, itiraz ve denetim günlüğü de saklanıyor, eklenmeli. |
| IP, cihaz bilgisi, log | **Uygulama kodu IP/cihaz/push token toplamıyor, analitik/çökme servisi yok.** IP ve istek günlüğü altyapıda (Supabase, barındırma sağlayıcısı) tutulabilir. | "Altyapı sağlayıcısı günlükleri" diye yazılmalı; saklama süresi sağlayıcı ayarına bağlı (TEYİT, Supabase planına göre). |
| Cihaz konumu (GPS) | Keşfette `nearby_listings(lat,lng,...)` RPC **parametresi** olarak gönderilir; tabloya yazılmaz. İlan verirken yuvarlanıp `listings.location`'a yazılır. `consent_location_at` + `consent_location_version` (0007) rıza kaydı. | "Kesin konum kalıcı saklanmaz" doğru (uygulama düzeyinde); ama RPC parametreleri altyapı/Postgres günlüğüne düşebilir → günlük ayarı kontrol (TEYİT). Rıza ekranı artık kodda (Bölüm C metni). |

## 2. Tabloda OLMAYAN ama şemada olan veriler (eklenmeli)
1. **Engelleme ilişkileri** (`blocks`): kim kimi engelledi. Engellenen kişiye bildirim gitmez.
2. **Rıza kayıtları**: `consent_kvkk_at/_version`, `consent_location_at/_version` (zaman + metin sürümü).
3. **Kayıt kaynağı** (0007, yeni): `utm_source` (küçük harf/rakam etiketi), `invite_code` (4-12 harf/rakam). Kişisel veri değil, ama aydınlatmada "kayıt kaynağı etiketi" olarak yazılmalı; bir kez yazılır, değiştirilemez.
4. **Hesap durumu** (`status`, `suspended_until`): moderasyon kararı.
5. **İlan kaynağı** (`listings.source`: organik/tohum, 0007): kullanıcıya gösterilmez; ekip tohum ilanlarını ayırır. Tohum ilan kullanıcı verisi değildir ama "demo/örnek ilan" sunumu hukuken Murat'a sorulmalı (yanıltıcı olmamalı).
6. **Ek şikâyet ayrıntısı**: şikâyet serbest metni kişisel veri içerebilir.

## 3. Saklama süreleri: kodda NE VAR
| Aydınlatma | Kod |
|---|---|
| Hesap süresince + 1 yıl | Otomatik süre YOK. Hesap silinince `delete_my_account()` (0007) `auth.users` satırını siler, `ON DELETE CASCADE` ile profil, ilan, mesaj, engel gider. "+1 yıl" için ayrı arşiv yok (arşiv de ücretli/karmaşık). |
| İlan kapanışı + 30 gün | Otomatik silme işi YOK. "Verildi" ilanı kalır. Zamanlanmış temizlik (pg_cron, Supabase'te ücretsiz planda var — TEYİT) eklenebilir. |
| Mesaj: kapanış + 1 yıl | Otomatik yok (yukarıdaki gibi). |
| Şikâyet [3 yıl] | **ÇELİŞKİ**: `reports.reporter_id` ve `reports.reported_user_id` — ilki `ON DELETE CASCADE`, ikincisi `SET NULL`. Şikâyet eden hesabını silerse şikâyet kaydı da silinir; hukuki saklama (3 yıl) için `reporter_id`'nin anonimleştirilmesi (SET NULL) gerekir. **Karar bekliyor: Murat/avukat.** Teknik olarak 1 satır migration. |
| Hesap/veri silme (uygulamadan) | **VAR** (Profil → "Hesabımı ve verilerimi sil"): ilan fotoğrafları Storage'dan istemci tarafında silinir, sonra `delete_my_account()`. Eksik: istemci Storage silmesi yarıda kalırsa yetim dosya kalır (sunucu tarafı temizlik işi, sonra). |

## 4. Silme sonuçları (kullanıcıya söylenmesi gereken)
- Hesap silinince **karşı tarafın sohbet geçmişi de** o sohbet için silinir (sender_id CASCADE).
- Başkalarının hesabını etkileyen kayıtlar (şikâyetteki `reported_user_id`) anonimleşir ama kayıt kalır.
- Yedekler (Supabase günlük yedek, plana bağlı) silinen veriyi bir süre tutabilir (TEYİT, sağlayıcı politikası).

## 5. Aktarım / yurt dışı
Veri tabanı ve Storage Supabase'te. **Bölge henüz seçilmedi** (hesap kurucuda): AB (Frankfurt) önerilir; yurt dışı aktarım yine de oluşur (m.9). Statik web: Vercel. Apple/Google giriş: sağlayıcı kendi politikasıyla. Analitik/push/SMS sağlayıcısı: YOK.

## 6. Murat'tan beklenen kararlar
1. `reports.reporter_id` → SET NULL (3 yıl saklama için) onayı. 2. "30 gün / +1 yıl" saklamalar için otomatik silme işini istiyor musun (ben kurarım; ücretsiz). 3. Aydınlatma tablosuna madde 2'deki satırlar. 4. Telefon satırı çıkarılsın mı.
