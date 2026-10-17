# Pilot Destek ve Moderasyon Vardiya / SLA Planı

Tarih: 2026-10-17 | Sahip: Zeynep (İK) | Durum: TASLAK (Murat ve Kerem teyidi bekliyor)
Girdi: docs/hukuk/moderasyon.md §2, §4-6, §9; docs/tasarim/s19-s20.md; docs/ik/kadro.md; state/kararlar.md

## 1. Kapsam
- **Moderasyon kuyruğu** (şikâyet, otomatik gizleme, itiraz): pilotta Kerem + Murat (moderasyon.md V1).
- **Kullanıcı destek soruları** (doğrulama, buluşma, itiraz sonucu): destek e-postası alan adı alınana kadar YOK (Defne kararı, 2026-10-17; alan adı kurucu işi, bkz. docs/ik/kurucu-listesi.md #6). Geçici: CEO ve Can (varsayım, matris.md §4).

## 2. Sorumluluk tablosu (öneri)

| İş | Birincil | Yedek | SLA (moderasyon.md §2) |
|---|---|---|---|
| C1 çocuk görüntüsü / istismar şüphesi: gizle + incele | Murat | Kerem | Gizle hemen, inceleme en geç 4 saat |
| C3 taciz, tehdit, buluşmada güvenlik olayı | Murat | Kerem | 24 saat; fiziksel tehlikede 112 yönlendirmesi |
| C2 güvensiz ürün, C4 dolandırıcılık | Kerem | Murat | 24 saat |
| C5 sahte/taklit ürün, C6 spam/yanlış beyan | Kerem | Murat | 72 saat |
| İtiraz kararı (S20) | Murat | Kerem | 7 gün iç hedef (kararlar.md, yasal taahhüt değil) |
| Kullanıcı destek soruları | Can | Defne | İş günü içinde ilk yanıt (varsayım) |

## 3. Nöbet ve kontrol sıklığı (öneri)
- **Kuyruk kontrolü:** iş günü en az 2 kez (sabah ve akşam). Hafta sonu kuyruk yalnız C1/C3 bildirimleri için kontrol edilir.
- **Haftalık dönüşümlü nöbetçi:** ilk hafta Kerem, yedek Murat; ikinci hafta yer değiştirir. Nöbetçi haftalık metrikleri CEO raporuna yazar.
- **Kurucu kanalı (karar, Defne 2026-10-17):** C1/C3 ve kurucu bildirimleri #ceo-rapor ve #onay üzerinden gider. Push bildirimi Apple Developer hesabına bağlı; hesap açılana kadar bu Slack kanalları kullanılır.

## 4. Riskler (kararsız, teyit gerekli)
1. **C1 için 4 saat inceleme SLA'sı insan nöbeti olmadan garanti edilemez.** Agent'lar sürekli çalışmıyor; gece ve hafta sonu kuyruk boşta kalabilir. Gizleme tarafı zaten kodlandı: C1/C2 şikâyeti ilanı `hidden_auto` yapar (docs/teknik/sikayet-engel-notu.md §2, migration 0004). Kalan açık nokta inceleme süresi: 4 saat, nöbet yoksa karşılanmaz. Öneri: Murat "4 saat" değerini iç hedef mi taahhüt mü olduğunu netleştirsin; Ece gizleme kaydının kuyruğa öncelikli düşmesini teyit etsin.
2. **Murat ve Kerem'in erişilebilirliği** bilinmiyor; nöbet tablosu bu teyide bağlı.
3. **Destek e-postası yok**; S19/S20 "Destek" butonu adres bekliyor. Alan adı gelene kadar kullanıcı destek soruları için bir kanal kararı YOK (açık nokta, aşağıda §6).

## 5. Haftalık ölçümler
moderasyon.md §6'dan: şikâyet/ilan oranı (pilot eşiği ≤ %3), tür dağılımı, SLA karşılama oranı, itiraz oranı; ek olarak destek talebi sayısı (kadro.md tetikleyicisi: > 30/hafta).

## 6. Karar bekleyenler
- Murat: 4 saatlik C1 inceleme SLA'sının metni (iç hedef mi, taahhüt mü?).
- Ece: C1/C2 `hidden_auto` kaydının kuyrukta öncelikli görünmesi.
- Kerem: nöbet ilk hafta teyidi ve Kerem + Murat erişilebilirliği.
- Defne: kurucu bildirim kanalı KARARLANDI (#ceo-rapor, #onay); destek e-postası alan adına bağlı.
- Defne (açık): alan adı gelmeden kullanıcı destek soruları hangi kanaldan alınacak? Varsayım: uygulama içi ilan/sohbet üzerinden (kesin değil).
