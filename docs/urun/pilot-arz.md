# Pilot İlçe Seçimi ve İlk 100 İlan Arz Planı (v0.1)
Sahip: Kerem (Ürün) | Tarih: 2026-10-17 | Girdi: pilot-esikler.md, docs/pazarlama/rakip.md
Durum: taslak. TÜM rakamlar tahmindir; İstanbul'a dair yerel veri yok, kaynaklı istatistik KULLANILMADI.

## 1. Varsayımlar
- P1: Pilot bölgesi Kadıköy + Ataşehir (pilot-esikler.md V1). Seçim mantığı aşağıda; doğrulanmadı.
- P2: Elden teslimde taraflar aynı gün birkaç km içinde buluşabilmeli. Pilotta mesafe ve "buluşma olmadı" payıyla test edilir.
- P3: Edinim kanallarının ücretli kısımları ve mağaza yayını kurucuya bağlıdır.

## 2. İlçe seçimi (mantık, veri değil)
| Ölçüt | Gerekçe | Doğrulama |
|---|---|---|
| Yakınlık | Komşu ilçeler, kısa buluşma mesafesi | Haritadan kontrol |
| Aile yoğunluğu | Genç aile mahalleleri olduğu varsayımı (kanıtsız) | Anne grubu üye sayıları |
| Dijital alışkanlık | Aktif çevrimiçi anne toplulukları varsayımı | Can'ın kanal testi |
| Güvenli buluşma noktası | AVM, metro, park çok olduğu varsayımı | Selin + Ürün nokta listesi |
Alternatifler (pilot sonrası): Üsküdar, Maltepe, Beşiktaş.
Kayma kuralı: hafta 4'te bir ilçede <30 aktif ilan varsa oradaki kampanya durur, diğerine yoğunlaşılır.

## 3. İlk 100 ilan planı (tahmin)
Hedef: hafta 4'te ≥100, hafta 8'de ≥250 aktif ilan (pilot-esikler.md).
Dağılım varsayımı: 40 tohum (ekip/yakın çevre), 40 anne grubu daveti, 20 organik. Hafta 2'de revize edilir.
| Aşama | Zaman | Hedef aktif ilan | Taktik |
|---|---|---|---|
| 0 Tohum | Yayın haftası | 25-40 | Yakın çevreden "ilk 30 ilan" daveti, yardımla ilan verme |
| 1 Anne grubu | Hafta 1-2 | ~60 | Admin izniyle gruplarda ilan daveti (Can) |
| 2 Mikro-influencer | Hafta 2-4 | ~100 | Ücretli iş birlikleri: kurucu işi |
| 3 QR noktaları | Hafta 3-6 | 150-250 | Anne-bebek kafe/oyun alanı QR (izin gerekir) |

## 4. Arz kalitesi kuralları
- Hedef ≥2 foto; zorunlu ≥1 kalır (<60 sn hedefi). İpucuyla desteklenir, zorlanmaz.
- Tohumlamada yasaklı ürün girilmez (kategoriler.md §4).
- SAHTE ilan girilmez: tohum ilanlar gerçek ürün ve gerçek buluşmadır. Tüketici güveni riski; gerekirse Murat'a danışılır.
- Talep çekmek için ilk 2 hafta tohum ilanların bir kısmı uygun fiyat/ücretsiz olabilir; bu Can'a öneridir.

## 5. Ölçüm
Haftalık: aktif ilan, yeni ilan, ilçe bazında aktif ilan, ilk mesaj süresi. İlçe profilde var (F2); ek olarak ilan "kaynak" (tohum/organik) etiketi gerekir.

## 6. Riskler
| Risk | Etki | Önlem |
|---|---|---|
| Tohum ilanlar organik arzı maskeler | Hafta 8 kararı yanıltıcı | Kaynak etiketi, ayrı raporlama |
| Grup yöneticisi spam sayar | Arz gelmez | İzin alma, ödül/hediye yok |
| Talep arzı geçer | Boş sonuç | "Mesafeyi genişlet", ilan daveti |
| Mesafe uzak | Buluşma olmadı artar | Varsayılan 3-5 km, aynı ilçe öncelik |

## 7. Açık sorular
1. Can: grup izinleri ve influencer bütçesi (kurucu onayı).
2. Ece: ilan "kaynak" alanı eklenebilir mi.
3. Kurucu: yayın tarihi (hafta 0).
