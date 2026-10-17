# Pilot Başarı Eşikleri (v0.1)
Sahip: Kerem (Ürün) | Tarih: 2026-10-17 | Girdi: docs/pazarlama/rakip.md §5, state/kararlar.md, docs/urun/mvp.md
Durum: önerilen taslak; hafta 8 North Star (20 teslim/hafta) ve 250 aktif ilan CEO kararıyla kayıtlı (kararlar.md).

## 1. Varsayımlar (hepsi doğrulanmadı)
- V1: Pilot 8 hafta, tek ilçe kümesi (Kadıköy + Ataşehir). Başlangıç = ilk herkese açık sürümün yayın günü.
- V2: Tüm rakamlar TAHMİNDİR; İstanbul'da anne-bebek ikinci el yoğunluğuna dair yerel veri yok. Hafta 4'te kalibre edilir.
- V3: Mağaza yayını ve ücretli edinim kanalları kurucu onayına/işine bağlı; gecikirse 8 hafta saati yayından başlar.
- V4: "Teslim" = iki tarafın onayı (F6). Tek taraflı onay sayılmaz; bu yüzden gerçek teslim sayısı biraz düşük ölçülebilir (tahmin).
- V5: Pilotta SMS OTP yok (otp-karar.md); sahte hesap oranı bu yüzden izlenir, gerekirse eşik dışı müdahale.

## 2. Eşik tablosu
| Metrik | Hafta 4 (ara) | Hafta 8 (karar) | Rol |
|---|---|---|---|
| Haftalık tamamlanan teslim (North Star) | ≥5 | ≥20 | Ana karar metriği |
| Aktif ilan (pilot bölge) | ≥100 | ≥250 | Arz yoğunluğu |
| İlan sonrası 7 günde ilk mesaj | ≥%40 | ≥%50 | Arz-talep eşleşmesi |
| Teslim sonrası puanlama oranı | ≥%20 | ≥%30 | Güven |
| "Buluşma olmadı" payı | ≤%25 | ≤%15 | Operasyonel kalite |
| İlan başına şikâyet | ≤%3 | ≤%1 | Moderasyon yükü |
| İlan verme süresi (medyan) | ≤90 sn | ≤60 sn | F2 hedefi |

Tutarlılık kontrolü (tahmin): 250 aktif ilan ve 20 teslim/hafta, haftada aktif ilanların yaklaşık %8'inin teslim olması demek. Bu oranın makul olup olmadığı bilinmiyor; hafta 4 verisiyle yeniden hesaplanır.

## 3. Karar kuralı
- Hafta 8 North Star ≥20 VE güven metriklerinden (puanlama, buluşma olmadı, şikâyet) en az ikisi tutuyor: başarılı; ikinci ilçe kümesi planlanır.
  (Not: rakip.md "en az üçü" diyor, güven metriği 3 olduğundan "en az ikisi" öneriyorum; CEO/Can ile uzlaşılacak, açık.)
- North Star 10-19: 4 hafta uzatma, arz artırımı (aynı kanallar).
- North Star <10 ve aktif ilan <100: pivot değerlendirmesi, kurucuyla birlikte.
- Güvenlik ihlali (ciddi olay) hangi metrik olursa olsun pilotu durdurma gerekçesidir; Hukuk ile belirlenir.
- Öne çıkarma ücreti (ONAY-002 a) yalnız başarılı pilottan sonra tasarlanır; pilotta test edilmez.

## 4. Ölçüm gereksinimleri (CTO'ya)
- Olaylar: ilan_olusturuldu, ilk_mesaj, bulusma_onerildi/kabul, teslim_onay (taraf bazlı), bulusma_olmadi, puan_verildi, sikayet.
- Haftalık panel (basit SQL/dashboard yeterli); kullanıcı bazlı kişisel veri minimum (KVKK, Hukuk ile).

## 5. Şimdi değil
- Segment/kohort analizi, A/B test altyapısı, gelir ve LTV metrikleri, NPS anketi.

## 6. Açık sorular
1. Can: kanal bazında hafta 4 edinim hedefi (kayıt sayısı) ayrı yazılmalı.
2. CEO/Can: karar kuralında güven metriği sayısı (2 mi 3 mü).
3. Kurucu: mağaza yayın tarihi (8 hafta saatini belirler).
