# Telefon OTP MVP Kararı
Yazan: Ece (CTO) | Tarih: 2026-10-16 | Web araması yapılmadı; tüm fiyatlar TAHMİNDİR, sağlayıcı teklifi alınmadan taahhüt edilmez.
Girdi: docs/teknik/mimari.md (§2, §5, §8, §9), docs/hukuk/politika.md (§6: telefon KVKK kimlik/iletişim verisi, 18+ üyelik, ücretli SMS onay gerektirir).

## KARAR (tek öneri)
**Pilotta (İstanbul) SMS OTP ZORUNLU DEĞİL.** Giriş: e-posta (doğrulamalı) + Sign in with Apple + Google. Sahte hesap riski SMS yerine **davranışsal sınırlarla** yönetilir. Telefon doğrulama, pilot sonrası **isteğe bağlı "doğrulanmış telefon" rozeti** olarak eklenir (Supabase Phone Auth + Send SMS Hook).
Gerekçe: pilotta SMS maliyeti ve sağlayıcı/sender-ID (alfanumerik başlık) kayıt süreci, MVP hızını yavaşlatır; telefon toplanmazsa KVKK veri yüzeyi de küçülür (minimizasyon).

## Seçenekler
| Seçenek | Maliyet (TAHMİN) | Sahte hesap koruması | Karar |
|---|---|---|---|
| A. OTP yok, e-posta+Apple/Google | 0 | Düşük-orta (e-posta tek kullanımlık açılabilir) | PİLOT |
| B. Supabase Phone Auth + Twilio Verify | ~0,05-0,10 USD/SMS (TR, belirsiz) | Orta-yüksek | Alternatif, pahalı |
| C. Supabase Phone Auth + yerel SMS (Netgsm/İleti Merkezi vb.) Send SMS Hook ile | ~0,02-0,05 USD/SMS (belirsiz), sender-ID başvurusu gerekir | Orta-yüksek | PİLOT SONRASI |
| D. Firebase Phone Auth (yalnız doğrulama için) | Ücretsiz kota var gibi, DOĞRULANMADI; ikinci backend karmaşası | Orta-yüksek | Reddedildi (iki auth sistemi) |
| E. Maliyetsiz: Supabase test OTP / e-posta OTP | 0 | Yalnız geliştirme | Sadece dev |

Not: Supabase Phone Auth yerleşik sağlayıcılar (Twilio, MessageBird, Vonage) ile çalışır; yerel sağlayıcı için Send SMS Hook (Edge Function) gerekir. Güncel destek doğrulanmalı.

## Sahte hesap / kötüye kullanım önlemleri (maliyetsiz, pilotta uygulanır)
- E-posta doğrulaması zorunlu; tek kullanımlık e-posta alan adları engel listesi.
- Apple/Google girişi önerilir (daha pahalı hesap açma maliyeti).
- Yeni hesap kısıtı (RLS + Edge Function): ilk 24 saatte en fazla 3 ilan, günlük mesaj başlatma sınırı, linkli/telefon/IBAN içeren mesaj uyarısı.
- IP + cihaz başına hız sınırı (Edge Function), Supabase Auth rate limit ayarları, CAPTCHA (Cloudflare Turnstile ücretsiz) kayıt ekranında.
- Şikayet eşiği: N şikayette ilan/hesap otomatik gizlenir, insan moderasyonu bakar.
- Davetli pilot: ilk kullanıcılar kapalı grup/davetle; yüksek güven, düşük hacim.
- 18+ beyanı kayıtta (hukuk önerisi); yaş doğrulama MVP dışı.

## Aylık maliyet tahmini (TAHMİN)
Varsayım: pilot ilk 3 ay 500-1.500 kayıt, kayıt başına ~1,5 SMS (yeniden gönderim dahil), kur 1 USD ≈ sabit.
| Senaryo | SMS/ay | Aylık maliyet |
|---|---|---|
| A (önerilen pilot) | 0 | 0 USD |
| C yerel sağlayıcı, 1.000 kayıt | ~1.500 | ~30-75 USD |
| B Twilio Verify, 1.000 kayıt | ~1.500 | ~75-150 USD |
SMS pompalama (toll fraud) saldırısı riski: hız sınırı ve ülke kısıtı olmadan maliyet patlayabilir; bu yüzden sağlayıcıda harcama limiti zorunlu.

## Pilot sonrası geçiş planı
1. Tetikleyici (herhangi biri): sahte/spam hesap oranı >%5 veya şikayet/aktif kullanıcı eşiği aşıldı, ya da mesajlaşma dolandırıcılık vakası.
2. Aşama 1: Telefon doğrulama **isteğe bağlı rozet** (ilan yayınlama zorunlu değil); Supabase Phone Auth, seçenek C; sender-ID başvurusu pilot ortasında başlatılır.
3. Aşama 2: Yeni satıcı için ilk ilanda telefon doğrulaması zorunlu; alıcı için isteğe bağlı.
4. Önlemler: sağlayıcıda aylık harcama tavanı, ülke kodu +90 kısıtı, numara başına günlük 3 deneme, aynı numara tek hesap (unique indeks).
5. KVKK: telefon aydınlatma metnine eklenir, numara karma (hash) + şifreli saklanır, hesap silmede silinir; Murat onayı (hukuk) alınır.
6. Mesaj/ilan dışında telefon numarası kullanıcıya gösterilmez (güvenli buluşma ilkesi).

## Varsayımlar
- Fiyat ve sağlayıcı destek bilgileri doğrulanmadı; karar öncesi 2 sağlayıcıdan teklif alınmalı.
- Pilot hacmi küçük ve davetli olduğundan A yeterli; varsayım bozulursa C hızla devreye alınır (mimari buna hazır, ek şema değişikliği yok: `profiles.phone_verified_at`).
- Apple, Google girişi sunulduğunda Sign in with Apple'ı da şart koşar (uygulanacak).

## Onay
- Seçenek A: ONAY GEREKMEZ (ücretsiz).
- Seçenek B/C (pilot sonrası): ONAY GEREKİR (para): SMS sağlayıcı hesabı ve kullanım bedeli, kurucunun kartı/kimliği ile açılır.
