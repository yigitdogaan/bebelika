# Kurucu: Senin Yapman Gerekenler

Tarih: 2026-10-17 | Sahip: Zeynep (İK) | Durum: liste, v0.2 (kurucu işi; ekip bu adımları yapamaz)
Kural (CLAUDE.md): para harcama, ücretli servis, mağaza yayını, imza ve resmi başvuru kurucunun hesabı, kartı veya kimliğiyle yapılır. Ekip bunları sormaz; bu liste CEO raporunda "👤 Senin yapman gereken" olarak da geçer.
Fiyatlar tahmindir (docs/teknik/mimari.md §5, ONAY-003); güncel tutar kurucu tarafından doğrulanmalı.

## Öncelik sırası

| # | İş | Neden | Tahmini maliyet | Onay | Öncelik |
|---|---|---|---|---|---|
| 1 | **Vercel hesabı** + demo yayını (app/vercel.json, app/README.md 5 adım) | Kurucunun istediği "açılıp gezilebilen" ilk sürüm; mock veriyle çalışır, Supabase gerekmez | Ücretsiz plan (doğrulanmadı) | — | P1 (kurucu önceliği) |
| 2 | **Supabase hesabı** + test (dev) projesi | Migration 0001-0006 gerçek veritabanında denenmeli; CTO P1 görevi bu hesaba bağlı | Geliştirme için ücretsiz plan | ONAY-003 | P1 (bloker) |
| 3 | **Apple Developer Program** hesabı | iOS yayını, push (APNs), Sign in with Apple zorunlu | ~99 USD/yıl | ONAY-003 | P1 |
| 4 | **Google Play Console** hesabı | Android yayını, Google girişi | ~25 USD tek sefer | ONAY-003 | P1 |
| 5 | **Google OAuth** yapılandırması (hesap sahibi olarak) | E-posta + Apple/Google girişi (pilot) | Ücretsiz | — | P1 |
| 6 | **Alan adı + e-posta** (destek adresi dahil) | S19/S20 "Destek" butonu adres bekliyor; destek e-postası bu olmadan açılmaz (kararlar.md, 2026-10-17) | ~15-30 USD/yıl | ONAY-003 | P1-P2 |
| 7 | **Dış avukat incelemesi** paketi (Topluluk kuralları, KVKK, sözleşme) | Yayın öncesi zorunlu kabul (ONAY-004); Murat paketi hazırlayacak; en az 2 teklif önerilir | Ücretli | ONAY-004 | P2 (yayın öncesi) |
| 8 | **Mağaza yayın tarihi** kararı | Pilot 8 haftalık sayacı ve lansman takvimi bu tarihe bağlı (pilot-esikler.md V3) | — | — | P2 |
| 9 | **Pilot edinim bütçesi** (mikro-influencer, QR, basılı) | Lansman planı Can hazırlıyor; ücretli kısım her kalem için kurucu onayı gerektirir | Kurucu bütçesi | — | P3 |
| 10 | **EAS ücretli plan** (gerekirse) | Başta gerekmeyebilir; yayın sırasında ihtiyaç doğarsa | ~19-99 USD/ay | ONAY-003 (koşullu) | P3 |

Not (#8 eski "Kurucu bildirim kanalı" maddesi kapandı): C1/C3 şikâyet bildirimleri ve kurucu kanalı için CEO kararı #ceo-rapor ve #onay olarak kaydedildi (state/kararlar.md, 2026-10-17). Kurucudan ek bir iş beklenmiyor; yalnızca bu iki kanalı takip etmesi yeterli (teyit: kurucu).

## Kurucu için ilk 5 adım (öneri)
1. Vercel hesabı aç; demo yayınını yap (app/README.md, 5 adım). Bağlantıyı paylaş.
2. Supabase hesabı aç; test projesini paylaş (CTO migration denemesi).
3. Alan adı al; destek e-postası oluştur.
4. Apple Developer ve Google Play Console hesaplarını aç.
5. Dış avukat için en az 2 teklif topla (ONAY-004 gereği).

## Açık sorular (kurucu yanıtı)
- Mağaza yayın tarihi hedefi? (pilot 8 hafta sayacını belirler)
- Pilot edinim bütçesi üst sınırı?
