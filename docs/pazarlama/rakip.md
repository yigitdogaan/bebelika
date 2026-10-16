# Rakip ve Pazar Analizi: Anne-Bebek İkinci El (İstanbul Pilot)
Sahip: Can (Pazarlama) | Tarih: 2026-10-16 | Durum: v0.1, ilk tarama
Girdi: docs/urun/mvp.md, state/kararlar.md | Web araması: 5 (sınır)

## 0. Varsayımlar ve doğrulama notları
- "Tahmin" etiketli her rakam tahmindir; kaynaksız rakam yazılmadı.
- Web araması sonuçları çoğunlukla başlık/özet düzeyinde okundu; birincil kaynaklar tam doğrulanmadı.
- Sahibinden ve Letgo'nun bebek kategorisi hakkında güncel kaynak bulunamadı; bu satırlar "doğrulanmadı" diye işaretli.
- Dolap komisyon bilgisi resmi değil; kaynak tek taraflı şikâyet platformu.
- Tutarsızlık: kararlar.md'de ONAY-002 (gelir modeli a: ücretsiz + öne çıkarma) 2026-10-17 tarihli kayıtta "onaylandı" görünüyor, mvp.md bölüm 6 ise hâlâ "bekliyor" diyor. Bu dokümanda MVP "ücretsiz ilan" varsayımıyla çalışıldı. Kerem'in mvp.md güncellemesi gerekiyor.
- Hedef kitle varsayımı (A2 ile uyumlu): Satıcı anne 25-38 yaş, İstanbul'da bebeğin 0-3 yaş dönemi, çoğunlukla mobil.

## 1. Pazar bağlamı
| Gösterge | Değer | Kaynak | Güven |
|---|---|---|---|
| Genel ikinci el işlem hacmi (Türkiye, 2024) | 9,8 milyar TL, 17,5 milyon işlem | Ticaret Bakanlığı e-ticaret raporuna atıf (web arama özeti); [ekonomist.com.tr](https://www.ekonomist.com.tr/makale/ikinci-el-in-altin-cagi-63204) | Orta. Birincil rapor doğrulanmadı; 2025 karşılığı bulunamadı |
| Bebek giyiminde ikinci el büyümesi | "3 kat" beklentisi | Veri analiz firması tahmini, Türkiye'ye özgü değil; [ekonomigazetesi.com](https://www.ekonomigazetesi.com/sektor-haberleri/dogumlar-azaldi-bebe-giyim-ihracati-yariya-yakin-dustu-76506) (yalnız başlık okundu) | Düşük. Tahmin |
| Bebek ürünü yeni satış adedi (ebebek, 8 ay, Ağustos 2026 sonu) | 82,5 milyon adet | ebebek KAP bildirimi, [kap.org.tr](https://kap.org.tr/tr/Bildirim/1659814) | Yüksek; yeni ürün, ikinci el değil |
| Doğum oranı trendi | Düşüş sinyali (başlık: "Doğumlar azaldı") | [ekonomigazetesi.com](https://www.ekonomigazetesi.com/sektor-haberleri/dogumlar-azaldi-bebe-giyim-ihracati-yariya-yakin-dustu-76506) | Düşük. Tahmin; TÜİK verisi kontrol edilmeli |

Yorum: Talep tarafı bebek ürünlerinde kısa ömürlü ürünler (büyüyen bebek) nedeniyle yüksek görünüyor (tahmin). Arz ve güven bariyeri ana sorun olacak.

## 2. Rakip tablosu
| Rakip | Tür | Bebek/anne odağı | Model ve ücret | Güçlü yön | Zayıf yön | Güven |
|---|---|---|---|---|---|---|
| Dolap | Genel ikinci el moda pazarı | Bebek kategorisi var mı: doğrulanmadı | Kargo + komisyon; şikâyetlerde süper satıcı için %15 standart, %50 iddiası, kargo kesintileri | Büyük kullanıcı tabanı (tahmin), bilinirlik | Kargo ağırlıklı; ürün boyutu/desi sorunu; yüksek kesinti şikâyetleri | Orta: [şikâyet 1](https://www.sikayetvar.com/dolap/super-satici-komisyon), [şikâyet 2](https://www.sikayetvar.com/dolap/dolap-yuksek-komisyon-ve-kesintilerle-satis-yapmak-imkansiz), [şikâyet 3](https://www.sikayetvar.com/dolap/dolap-satisinda-asiri-kargo-ucreti-kesintisi-ve-uyari-eksikligi) |
| Letgo | Genel ilan (yerel) | Doğrulanmadı | Yerel ilan, ücretsiz (bilinen model; doğrulanmadı) | Yerel, konum odaklı; eski büyük marka | Türkiye'deki güncel aktifliği ve bebek kategorisi doğrulanmadı; Wikipedia Türkiye'yi aktif pazar olarak listeliyor | Düşük: [Wikipedia](https://en.wikipedia.org/wiki/Letgo) |
| Sahibinden | Genel ilan | Bebek alt kategorisi var (tahmin) | İlan ücreti ve paket (doğrulanmadı) | Yüksek trafik | Anne-bebek güveni ve buluşma güvenliği yok (tahmin) | Düşük, doğrulanmadı |
| Bebecruz | Bebek/çocuk ikinci el uygulaması | Evet | Ödeme uygulama içinden; alıcı ürünü onaylayınca satıcıya aktarılıyor | Aracılı ödeme (MVP'de yok, rakip referansı) | Kullanıcı sayısı küçük görünüyor (218 indirme, [tamindir](https://www.tamindir.com/indir/bebecruz/amp/)) | Orta |
| Tutumlu Anne | Anne-çocuk ikinci el uygulaması | Evet | Yalnız iyi durumdaki ürünler; ücret doğrulanmadı | Anne odaklı konumlandırma | App Store puanı 3.6/5 ([App Store](https://apps.apple.com/tr/app/tutumlu-anne/id1297964156)) | Orta |
| Anneysen Pazar | Hamile/anne/bebek alım-satım | Evet, sıfır ve ikinci el | Doğrulanmadı | Geniş kategori (araç gereç, bakım, beslenme, giyim, oyuncak) | Kargo/buluşma modeli belirsiz; uygulama yalnız iOS sayfasıyla görüldü ([App Store](https://apps.apple.com/us/app/id1336409466)) | Düşük |
| Facebook/WhatsApp anne grupları (İstanbul) | Topluluk pazarı | Yüksek (tahmin) | Ücretsiz, elden teslim | Ücretsiz, kolay erişim, güven "tanıdık" ağı üzerinden | Dağınık ilan, sahte ilan, moderasyon yok, arama zor; üye sayıları doğrulanmadı | Düşük: somut veri bulunamadı |
| Instagram anne hesapları / satış hesapları | Sosyal satış | Evet (tahmin) | DM ile, kapora/ödeme dışarıda | Influencer güveni | Güven ve ödeme riski, arama yok | Düşük, doğrulanmadı |

Not: Second Chance Boutique (Bebek, İstanbul) gibi fiziksel ikinci el mağazaları doğrudan rakip değil; "yakın alternatif" olarak izlenebilir.

## 3. Boşluk ve fırsat
1. Bebek odaklı + elden teslim + konum yakınlığı: Dolap ve Sahibinden kargo/genel kategori ağırlıklı; anne-bebek özelinde yerel buluşma modeli bu tabloda net görünmüyor (orta güven, rakip tarama sınırlı).
2. Güven: Facebook grupları ücretsiz ama moderasyonsuz. Doğrulanmış telefon, puanlama (F7), "teslim edildi" iki taraflı onayı (F6) bu boşluğu kapatır. Rakiplerde kargo şikâyetleri ağırlıklı; buluşma güvenliği yok.
3. Kullanım bağlamı: Kucakta tek elle ilan (F2, <60 sn). Rakip uygulamalar ilan akışını uzun tutuyor (tahmin; tek tek test edilmedi).
4. Komisyonsuz MVP (ONAY-002 durumuna göre, bkz. bölüm 0): Dolap şikâyetlerindeki kesintiler, "ücretsiz" konumlandırmasını fırsata çeviriyor. Ancak ücretsiz modelin sürdürülebilirliği ayrı bir risk.

Riskler (tahmin):
- Arz soğuk başlangıcı: ilk hafta İstanbul'da ilan sayısı yetersiz kalırsa alıcı kaybolur.
- Güven: ilk teslimde kötü deneyim (sahte ilan, boşuna buluşma) tüm pilotu bitirebilir.
- Büyüyen çocuk nedeniyle ürün ömrü kısa; ilan yenileme alışkanlığı gerekir.

## 4. Pilot edinim önerisi (3 kanal)
Ön koşul: Tek ilçe kümesi (öneri: Kadıköy + Ataşehir, tahmin: iki yakın semt, toplam ~1 milyon nüfus civarı ve çocuklu hane yoğunluğu yüksek; nüfus verisi doğrulanmadı). Önce arz, sonra talep.

**Kanal 1: Mahalle anne grupları ve ilçe bazlı Facebook/WhatsApp toplulukları (ücretsiz)**
- Yöntem: Grup yöneticileriyle izin alarak "ilk 50 satıcı" çağrısı; yönetici olarak değil, anne olarak tanıtım. Kurumsal dil yok.
- Aksiyon: Hafta 1-2, 10-15 grup, her grupta tek paylaşım ve yorum yanıtlama.
- Ölçüm: Kayıt olan satıcı sayısı, ilk ilan oranı.
- Risk: Grup kuralları reklamı yasaklayabilir; izin alınmadan paylaşım yapılmaz.

**Kanal 2: Mikro-influencer (5-10 İstanbul anne hesabı, 5-20 bin takipçi, tahmin)**
- Yöntem: Ürün takası veya sabit ücret ile "bebeğimin büyüdüğü eşyaları nasıl verdim" içeriği. Güven odaklı mesaj, teslim güvenliği vurgusu.
- Aksiyon: Hafta 2-4, 5 hesap ile başlama.
- Ölçüm: İndirme, kayıt, ilk ilan oranı; hesap başına UTM ve davet kodu.
- ONAY GEREKİR (para): Ücretli iş birliği, ürün ve kampanya bütçesi. Ücret/bütçe rakamı bu dokümanda önerilmedi; kurucu onayı olmadan yapılmaz.

**Kanal 3: Fiziksel anne-bebek noktaları (ücretsiz başlangıç, ortak izni gerekir)**
- Yöntem: Pilot ilçedeki bebek-çocuk kafeleri, anne-bebek atölyeleri, doğum sonrası kliniklerde QR kodlu broşür ve "ilk ilanını bugün ver" davetiyesi.
- Aksiyon: Hafta 3-6, 5-8 nokta.
- Ölçüm: QR tarama, kayıt sayısı, nokta başına kayıt.
- Risk: Mekân yetkilisinden izin ve basılı materyal maliyeti; materyal alımı için ONAY GEREKİR (para).

Bu üç kanal dışında: Google/Meta reklamı, ebebek veya marka iş birliği önerilmedi (bütçe ve kurucu onayı gerektirir; mağaza yayını da kurucu onayına bağlı, mvp.md bölüm 6).

## 5. Pilot başarı eşiği önerisi (tahmin, pilotta kalibre edilecek)
Pilot süresi: 8 hafta, tek ilçe kümesi. North Star ve destek metrikleri mvp.md bölüm 1'den alınmıştır.

| Metrik | Hafta 4 (ara kontrol) | Hafta 8 (karar eşiği) | Not |
|---|---|---|---|
| Aktif ilan (aynı hafta, pilot ilçe) | ≥100 | ≥250 | Arz yoğunluğu; soğuk başlangıç için ilk gösterge |
| Haftalık TAMAMLANAN teslim (North Star, iki taraflı onay) | ≥5 | ≥20 | Pilotun ana karar metriği |
| İlan sonrası 7 gün içinde ilk mesaj oranı | ≥%40 | ≥%50 | Talep-arz eşleşmesi |
| Teslim sonrası puanlama oranı (F7) | ≥%20 | ≥%30 | Güven |
| "Buluşma olmadı" oranı (tamamlanan buluşmaların payı) | ≤%25 | ≤%15 | Güven, operasyonel kalite |
| Şikâyet oranı (ilan başına) | ≤%3 | ≤%1 | Moderasyon kapasitesi |
| İlan verme süresi (medyan) | ≤90 sn | ≤60 sn | F2 hedefiyle uyumlu |

Karar kuralı (öneri):
- Hafta 8'de North Star ≥20 ve güven metriklerinin en az üçü tutuyorsa: İstanbul'da ikinci ilçe kümesi.
- North Star 10-19 arası: 4 hafta uzatma; aynı kanallarda arz artırımına odaklanılır.
- North Star <10 ve aktif ilan <100: pivot değerlendirmesi (kategori daraltma veya model değişikliği), kurucu ile birlikte.

Eşiklerin dayanağı: Yerel pazar yoğunluğu için sayı verisi yok; rakamlar tahmin. Hukuk (Murat) ve ürün ekibi onaylı kategori listesi gelmeden eşikler kesinleşmez.

## 6. Açık sorular ve sonraki adımlar
1. Kerem: mvp.md bölüm 6 ile kararlar.md arasındaki ONAY-002 tutarsızlığını giderin.
2. Kerem/Selin: Pilot ilçe seçimi için ilçe bazlı çocuklu hane verisi (TÜİK/ilçe nüfus) lazım; Pazarlama bunu ayrıca çıkarabilir.
3. Murat: Anne grupları ve influencer içeriğinde kullanılacak "güven" ifadeleri için hukuki görüş (yanıltıcı beyan riski).
4. Kurucu: Kanal 2 ve Kanal 3 için bütçe kararı (ONAY GEREKİR (para)).
5. Sosyal medya taraması: Facebook grupları için üye sayısı ve kural taraması (manuel, 5 arama sınırına takıldık).

## 7. Kaynaklar
- Ticaret Bakanlığı e-ticaret raporu atfı (2024 ikinci el hacmi): [ekonomist.com.tr](https://www.ekonomist.com.tr/makale/ikinci-el-in-altin-cagi-63204)
- Bebek giyimi ikinci el ve doğum trendi (başlık): [ekonomigazetesi.com](https://www.ekonomigazetesi.com/sektor-haberleri/dogumlar-azaldi-bebe-giyim-ihracati-yariya-yakin-dustu-76506)
- ebebek KAP bildirimi: [kap.org.tr](https://kap.org.tr/tr/Bildirim/1659814)
- Dolap şikâyetleri (tek taraflı): [süper satıcı komisyonu](https://www.sikayetvar.com/dolap/super-satici-komisyon), [yüksek komisyon](https://www.sikayetvar.com/dolap/dolap-yuksek-komisyon-ve-kesintilerle-satis-yapmak-imkansiz), [kargo ücreti](https://www.sikayetvar.com/dolap/dolap-satisinda-asiri-kargo-ucreti-kesintisi-ve-uyari-eksikligi)
- Letgo: [Wikipedia](https://en.wikipedia.org/wiki/Letgo)
- Bebecruz: [tamindir](https://www.tamindir.com/indir/bebecruz/amp/)
- Tutumlu Anne: [App Store](https://apps.apple.com/tr/app/tutumlu-anne/id1297964156)
- Anneysen Pazar: [App Store](https://apps.apple.com/us/app/id1336409466)
