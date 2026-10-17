# Ekip Yetkinlik Matrisi ve Eksik Rol Analizi
Tarih: 2026-10-17 | Hazırlayan: Zeynep (İK) | Kaynak: ekip/*.md, docs/urun/mvp.md (F8, §5), state/kararlar.md

## 1. Mevcut ekip ve yetkinlik matrisi
Gösterim: ● birincil sahip | ○ destek/ikincil | — yok

| Yetkinlik | ceo (Defne) | urun (Kerem) | cto (Ece) | tasarim (Selin) | hukuk (Murat) | ik (Zeynep) | pazarlama (Can) |
|---|---|---|---|---|---|---|---|
| Kapsam, önceliklendirme, MVP | ○ | ● | ○ | — | — | — | ○ |
| Ürün metrikleri, pilot eşikleri | ○ | ● | — | — | — | — | ○ |
| Mobil/web geliştirme (RN/Expo, TS) | — | — | ● | — | — | — | — |
| Konum tabanlı veri, PostGIS, altyapı | — | — | ● | — | — | — | — |
| Güvenlik (OWASP, hız sınırı, kimlik) | — | — | ● | — | ○ | — | — |
| UX/UI, tasarım sistemi, erişilebilirlik | — | ○ | — | ● | — | — | — |
| KVKK, sözleşme, ürün güvenliği | ○ | — | ○ | — | ● | — | — |
| Mağaza politikaları (App Store/Play) | — | ○ | ● | — | ● | — | — |
| Pazar/rakip analizi, ASO | ○ | ○ | — | — | — | — | ● |
| Topluluk, anne grupları, edinim | — | — | — | — | — | — | ● |
| Şikâyet ve ilan moderasyonu (F8, P0) | ○ | ○ | ○ | — | ○ | — | — |
| İşe alım, rol tanımı, ekip ölçekleme | ○ | — | — | — | — | ● | — |
| Müşteri destek (kullanıcı soruları) | — | — | — | — | — | — | — |
| QA / test otomasyonu | — | ○ | ● | — | — | — | — |
| Buluşma güvenliği, saha operasyonu | ○ | ● | — | — | ○ | — | ○ |

Varsayım: "birincil sahip" dosya/kural sahipliğine göre belirlendi (ekip/*.md tanımları); fiili iş yükü henüz ölçülmedi.

## 2. Boşluklar
1. **Güven ve moderasyon (P0 boşluk).** MVP F8 (şikâyet, engelleme, ilan moderasyonu) P0. Bugün sahibi yok; CTO "yöntem" verir, Hukuk risk görüşü verir, uygulama işi kimsede değil. Pilot ilanları çocuk ürünleri ve fotoğraf içerdiği için günlük kuyruk gerektirir. Kalıcı ve net ihtiyaç.
2. **Müşteri destek.** Pilotta kullanıcı soruları (buluşma, doğrulama, şikâyet sonucu) gelecek. Şimdilik CEO ve Can yönetebilir; hacim pilotta ölçülene kadar ertelenmeli.
3. **QA.** CTO kapsıyor. Ayrı rol gerekmez; kod hacmi artınca yeniden değerlendirilir.
4. **Mobil geliştirici (ikinci).** Tek CTO, app/ altında kod yazar. Darboğaz riski var ama kod yazımı henüz başlamadı; şimdi gerekli değil.
5. **Veri analisti.** Pilot eşikleri (docs/urun/pilot-esikler.md) Kerem tarafından izlenebilir. Ayrı rol şimdilik gereksiz.

## 3. Öneri (yeni rol)
**Güven ve Moderasyon Uzmanı** (öneri, aday kartı YAZILMADI)
- Gerekçe: F8 P0, pilot öncesi zorunlu; kötüye kullanım ve çocuk ürünü riski.
- Model önerisi: günlük kuyruk ve standart kararlar için haiku; politika ve itiraz kararları için sonnet.
- Sorumluluk: şikâyet kuyruğu, ilan moderasyon kuralları (CTO ile araç, Murat ile politika), sonuç bildirimi.
- Alternatif (daha hafif): F8 işini geçici olarak Kerem + Murat üstlenir. Bu, pilot hacmi küçükse yeterli olabilir (varsayım).
- Onay: CEO'ya sunulacak; kurucu onayı gerekir (işe alım kuralı). Bu dosya onay değildir.

## 4. Şimdi değil (tetikleyiciler)
| Rol | Tetikleyici |
|---|---|
| Müşteri destek | Haftalık destek talebi > 30 (varsayım) |
| QA | Sürüm sıklığı haftalık ve regresyon hatası tekrar ediyor |
| İkinci mobil geliştirici | app/ kodu CTO kapasitesini aşıyor |
| Veri analisti | Pilot metrikleri haftalık manuel takip gerektirmeyecek kadar büyürse, veya ölçek 2. şehre geçince |

## 5. Varsayımlar (doğrulanmadı)
- Pilot hacmi küçük (hafta 8 hedefi 20 teslim/hafta, tahmin: docs/urun/pilot-esikler.md).
- Her agent aynı model maliyetiyle çalışır; rol sayısı arttıkça döngü süresi uzar.
- Yetkinlik hücreleri agent tanımlarından çıkarıldı; gerçek performansla kalibre edilecek.
- ekip/ceo.md dosyası ekip/ klasöründe yok; CLAUDE.md'de CEO listelenmiş. CEO tanımının yeri CEO tarafından teyit edilmeli.
