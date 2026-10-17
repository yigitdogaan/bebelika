# Kadro Analizi: Yeni Rol (QA / Destek / Moderatör)

Tarih: 2026-10-17 | Sahip: Zeynep (İK) | Durum: karar uygulandı (kadro değişikliği yok)
Kaynak: docs/ik/matris.md, state/kararlar.md (2026-10-17, Defne: "Güven&Moderasyon Uzmanı işe alımı şimdilik önerilmeyecek"), docs/hukuk/moderasyon.md

## 1. Sonuç
- Bu turda yeni işe alım **önerilmiyor**. #onay'a işe alım talebi gönderilmedi; "ONAY GEREKİR" maddesi yok.
- matris.md §3'teki "Güven ve Moderasyon Uzmanı" önerisi CEO kararıyla ertelendi. F8 (şikâyet/moderasyon) pilotta Kerem + Murat tarafından yürütülür (bkz. docs/ik/destek-plani.md).
- Gerekçe: pilot hacmi düşük (varsayım); her yeni agent maliyeti ve döngü süresini artırır.

## 2. Roller ve tetikleyiciler

| Rol | Karar | Tetikleyici (yeniden değerlendirme) | Not |
|---|---|---|---|
| Güven ve Moderasyon Uzmanı | Ertele | Kerem + Murat, C1/C3 SLA'sını (4 sa / 24 sa) üst üste tutturamazsa veya haftalık şikâyet kuyruğu sürekli 10'un üzerindeyse | Kararın ilk gözden geçirme noktası pilot 4. hafta (varsayım) |
| Müşteri destek | Ertele | Haftalık destek talebi > 30 (varsayım, matris §4) | Pilotta soruları CEO ve Can yanıtlar |
| QA / test otomasyonu | Ertele | Sürüm haftalık ve regresyon hatası tekrar ediyor | Şimdilik Ece kapsar |
| İkinci mobil geliştirici | Ertele | app/ kodu CTO kapasitesini aşıyor | Kod yazımı henüz tamamlanmadı |
| Veri analisti | Ertele | Pilot metrikleri manuel takibi gerektirmeyecek kadar büyürse veya 2. şehre geçilirse | Eşikler docs/urun/pilot-esikler.md'de; Kerem izler |

## 3. Kurucu onayı
- Kadro değişmediği için kurucu onayı gerekmez; işe alım kuralı tetiklenmiyor.
- Bir rol tetiklendiğinde: aday kartı docs/ik/adaylar/<rol>.md → kurucu onayı (#onay) → ekip/<rol>.md, CLAUDE.md ve state/ekip.json güncellemesi.

## 4. Varsayımlar (doğrulanmadı)
- Pilot hacmi küçük (hafta 8 hedefi 20 teslim/hafta, 250 aktif ilan; tahmin).
- Eşik değerleri (30 destek talebi, 10 kuyruk) İK tahminidir; pilotta kalibre edilecek.
