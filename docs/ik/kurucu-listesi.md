# Kurucu: Senin Yapman Gerekenler

Tarih: 2026-10-17 | Sahip: Zeynep (İK) | Durum: liste (kurucu işi; ekip bu adımları yapamaz)
Kural (CLAUDE.md): para harcama, ücretli servis, mağaza yayını, imza ve resmi başvuru kurucunun hesabı, kartı veya kimliğiyle yapılır. Ekip bunları sormaz; bu liste CEO raporunda "👤 Senin yapman gereken" olarak da geçer.
Fiyatlar tahmindir (docs/teknik/mimari.md §5, ONAY-003); güncel tutar kurucu tarafından doğrulanmalı.

## Öncelik sırası

| # | İş | Neden | Tahmini maliyet | Onay | Öncelik |
|---|---|---|---|---|---|
| 1 | **Supabase hesabı** + test (dev) projesi | Migration 0001-0006 gerçek veritabanında denenmeli; CTO P1 görevi bu hesaba bağlı | Geliştirme için ücretsiz plan | ONAY-003 | P1 (bloker) |
| 2 | **Apple Developer Program** hesabı | iOS yayını, push (APNs), Sign in with Apple zorunlu | ~99 USD/yıl | ONAY-003 | P1 |
| 3 | **Google Play Console** hesabı | Android yayını, Google girişi | ~25 USD tek sefer | ONAY-003 | P1 |
| 4 | **Google OAuth** yapılandırması (hesap sahibi olarak) | E-posta + Apple/Google girişi (pilot) | Ücretsiz | — | P1 |
| 5 | **Alan adı + e-posta** (destek adresi dahil) | S19/S20 "Destek" butonu adres bekliyor | ~15-30 USD/yıl | ONAY-003 | P1-P2 |
| 6 | **Dış avukat incelemesi** paketi (Topluluk kuralları, KVKK, sözleşme) | Yayın öncesi zorunlu kabul (ONAY-004); Murat paketi hazırlayacak | Ücretli; en az 2 teklif önerilir | ONAY-004 | P2 (yayın öncesi) |
| 7 | **Mağaza yayın tarihi** kararı | Yayın takvimi, lansman planı | — | — | P2 |
| 8 | **Kurucu bildirim kanalı** (C1/C3 şikâyetleri için) | Moderasyon nöbeti ve 4 saatlik SLA (docs/ik/destek-plani.md) | — | — | P1 |
| 9 | **Pilot edinim bütçesi** (mikro-influencer, QR, basılı) | Lansman planı Can hazırlıyor; bütçe kurucu kararı | Kurucu bütçesi | — | P3 |
| 10 | **EAS ücretli plan** (gerekirse) | Başta gerekmeyebilir; yayın sırasında ihtiyaç doğarsa | ~19-99 USD/ay | ONAY-003 (koşullu) | P3 |

## Kurucu için ilk 5 adım (öneri)
1. Supabase hesabı aç; test projesini paylaş (CTO migration denemesi).
2. Alan adı al; destek e-postası oluştur.
3. Apple Developer ve Google Play Console hesaplarını aç.
4. Google OAuth ve Sign in with Apple yapılandırmasını hesap sahibi olarak tamamla.
5. Dış avukat için en az 2 teklif topla (ONAY-004 gereği).

## Açık sorular (kurucu yanıtı)
- Mağaza yayın tarihi hedefi?
- C1/C3 bildirimleri hangi kanaldan (e-posta, Slack, telefon) ulaşsın?
- Pilot edinim bütçesi üst sınırı?
