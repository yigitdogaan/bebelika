# Bebelika Teknik Mimari Önerisi (v1)
Yazan: Ece (CTO) | Durum: öneri, kod henüz yok | Web araması yapılmadı; fiyatlar tahmindir, kesin teklif alınmadan taahhüt edilmez.

## 1. İstemci kararı: Expo (React Native) + TypeScript
| Kriter | Web+webview | Expo/RN | Tam native (2 kod tabanı) |
|---|---|---|---|
| Maliyet | En düşük | Düşük (tek kod tabanı) | Yüksek (2x iş) |
| Hız (MVP) | Hızlı | Hızlı | Yavaş |
| Mağaza riski | YÜKSEK: App Store "minimum işlevsellik" reddi | Düşük | Düşük |
| Bakım | Kolay ama native özellikler zayıf | Tek kod, OTA güncelleme | Zor |
| Push, kamera, konum | Kısıtlı | İyi | En iyi |

**Karar: Expo (managed + dev build, EAS).** Gerekçe: webview reddi riski pilotu geciktirir; push, kamera (ilan fotoğrafı), konum ve mesaj bildirimi birinci sınıf gerekir; tek kod tabanı küçük ekip için en ucuzu. Tam native bu aşamada gereksiz. İleride paylaşım/SEO için hafif bir web açılış sayfası eklenebilir (uygulamanın yerine değil).

## 2. Backend: Supabase (PostgreSQL + PostGIS)
- Auth (e-posta + Apple/Google; telefon OTP opsiyonel), Storage (ilan fotoğrafları), Realtime, Edge Functions, Row Level Security.
- Neden: PostGIS yerleşik, ilişkisel model (ilan/kullanıcı/mesaj/şikayet) doğal, RLS ile yetkilendirme veritabanında, hızlı geliştirme. Firestore'da geo-sorgu ve raporlama zayıf.
- Bölge: AB (Frankfurt); KVKK notu aşağıda. Kilitlenme riski düşük: standart Postgres, taşınabilir.
- Reddedilen: kendi sunucusu (operasyon yükü), Firebase (geo/SQL zayıflığı).

## 3. Konuma göre arama
- `listings.location geography(Point,4326)` + GIST indeksi; `ST_DWithin` ile yarıçap araması, `ST_Distance` ile sıralama; RPC fonksiyonu (filtre: kategori, yaş grubu, fiyat, yarıçap 1-25 km).
- Gizlilik: tam adres asla saklanmaz/gösterilmez. Konum ~300-500 m'ye yuvarlanır, kullanıcıya yaklaşık mahalle/mesafe gösterilir; sadece yuvarlanmış nokta saklanır.
- Pilot: İstanbul; ilçe/mahalle listesi için açık veri (lisans doğrulanacak).
- İlk sürümde liste + mesafe; harita MVP dışı. Gerekirse `react-native-maps` (Apple/Google yerel harita) kullanılır, ücretli harita API'si gerekmez.
- Metin arama: Postgres `tsvector` + `pg_trgm`; ayrı arama servisi gerekmez.

## 4. Uygulama içi mesajlaşma
- Supabase Realtime ile `conversations`, `messages` tabloları; RLS: sadece iki katılımcı okur/yazar.
- Push: Expo Notifications (FCM/APNs); yeni mesajda Edge Function tetikler.
- Moderasyon: engelle, şikayet et, telefon/IBAN paylaşımı için uyarı (basit regex); mesaj saklama süresi hukuk (Murat) ile belirlenir. Uçtan uca şifreleme MVP dışı.
- Güvenli buluşma: halka açık yer önerisi, buluşma onayı mesajı, teslim sonrası karşılıklı değerlendirme. Ödeme uygulama dışı (elden), ödeme altyapısı YOK.

## 5. Güvenlik ve KVKK
- OWASP Mobile: token'lar `expo-secure-store`'da; istemcide yalnız anon key + RLS, gizli anahtar asla koda girmez (EAS secrets); girdi doğrulama; Edge Function'da hız sınırı.
- Görsellerde EXIF konumu silinir; boyut/tür sınırı.
- KVKK: aydınlatma + açık rıza, konum için ayrı rıza, veri silme/dışa aktarma, hesap silme (Apple zorunlu kılar). AB bölgesi yurt dışı aktarım sayılabilir; hukuk değerlendirmesi gerekir. VERBİS yükümlülüğü hukuka sorulacak.
- Mağaza: Apple UGC kuralları (şikayet, engelleme, moderasyon, hesap silme) MVP'ye dahil; Google Play Data Safety formu.

## 6. Veri modeli (özet)
users/profiles, listings (kategori, yaş, durum, fiyat, location, status), listing_photos, conversations, messages, reports, blocks, reviews, devices (push token). Hepsinde RLS.

## 7. Geliştirme ve yayın
- `app/` altında Expo projesi, Supabase migrasyonları `app/supabase/`. TypeScript strict, ESLint, Jest, CI (GitHub Actions).
- Ortamlar: dev / prod ayrı Supabase projeleri. EAS Build + EAS Update (OTA).
- Küçük döngüler: 1) iskelet+auth 2) ilan CRUD+foto 3) konum arama 4) mesajlaşma+push 5) şikayet/engel/hesap silme 6) TestFlight/iç test.
- Kod, bu belge belgelendikten sonra başlar; mağazaya yayın kurucu onayına tabidir.

## 8. Maliyet (TAHMİN; güncel fiyatlar doğrulanmalı)
**Ücretsiz / onay gerektirmeyen:** Expo SDK, React Native, EAS ücretsiz kota, Expo Notifications, Supabase ücretsiz plan (geliştirme/test), GitHub Actions ücretsiz kota, PostGIS, react-native-maps.

**ONAY GEREKİR (ücretli / kalıcı maliyet):**
| Kalem | Tahmini maliyet |
|---|---|
| Apple Developer Program (yayın için zorunlu) | ~99 USD/yıl |
| Google Play Console | ~25 USD tek sefer |
| Supabase Pro (canlı için; ücretsiz plan prod'a uygun değil) | ~25 USD/ay + kullanım aşımı |
| EAS ücretli plan (gerekirse) | ~19-99 USD/ay, başta gerekmeyebilir |
| SMS OTP sağlayıcısı (kullanılırsa) | kullanım başı, hacme bağlı |
| Alan adı + e-posta | ~15-30 USD/yıl |
| Hata izleme (Sentry ücretsiz kota yeterli olabilir) | 0 veya ~26 USD/ay |
| İçerik moderasyon API'si (pilot sonrası) | kullanım başı |

Pilot için tahmini sabit maliyet: ~25-50 USD/ay + yıllık ~115-130 USD (+ SMS kullanılırsa). Doğrulanmamış tahmindir.

## 9. Varsayımlar ve riskler
- İlk sürümde e-posta + Apple/Google girişi önerilir; telefon OTP sonraya bırakılırsa SMS maliyeti ertelenir (Kerem ile netleşecek).
- Supabase Realtime bağlantı limitleri pilot için yeterli varsayıldı; ölçekte yeniden değerlendirilir.
- Dolandırıcılık ve içerik moderasyonu operasyonel yük getirir; insan moderasyonu ayrıca planlanmalı.
