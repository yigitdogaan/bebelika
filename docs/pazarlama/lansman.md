# İstanbul Pilot Lansman Planı — v0.1 taslak
Sahip: Can (Pazarlama) | Tarih: 2026-10-17 | Durum: taslak; mağaza yayın tarihi kurucu işi, bu yüzden tarihler göreli (T = ilk herkese açık sürüm günü)
Girdi: docs/pazarlama/rakip.md §4 (3 kanal), docs/urun/pilot-esikler.md, docs/pazarlama/magaza-metni.md, state/kararlar.md (2026-10-17 pilot edinim kararı)

## 0. Varsayımlar
- V1: Pilot bölge Kadıköy + Ataşehir (kararlar.md, Defne). Dışarısı kapalı; kanallar bu iki ilçeye sınırlı.
- V2: Lansman "arz önce" mantığıyla: T-2 hafta satıcı davetiyesi, T gününde talep kanalları açılır.
- V3: Tüm sayılar tahmindir; kanal başına dönüşüm oranı yok, ilk 2 hafta ölçülerek kalibre edilir.
- V4: Mağaza yayını ve hesaplar kurucu işi. Mağaza gecikirse T kayar, plan göreli kalır.
- V5: Hiçbir ücretli kanal kurucu onayı olmadan başlamaz (CLAUDE.md: para harcama ekip tarafından yapılmaz).

## 1. Hedefler (pilot hafta 4 ve 8 eşikleriyle uyumlu)
| Hedef | Hafta 4 | Hafta 8 | Kaynak |
|---|---|---|---|
| Aktif ilan (pilot bölge) | ≥100 | ≥250 | pilot-esikler.md §2 |
| Haftalık tamamlanan teslim (North Star) | ≥5 | ≥20 | pilot-esikler.md §2 |
| Kayıtlı satıcı (tahmin) | ≥150 | ≥400 | Can tahmini, kanal 1 + 3 ağırlıklı |

Not: "Kayıtlı satıcı" hedefi tahmindir; pilot-esikler.md'de yoktu. Hafta 4'te kanal bazlı yeniden kurulur (pilot-esikler.md §6 açık soru 1).

## 2. Kanallar ve sorumluluk
Her kanal için: ne yapılır, kim onaylar, ölçüm, risk. Kanal 2 ve 3'ün basılı/influencer kısmı ONAY GEREKİR (para).

### Kanal 1 — Mahalle anne grupları (ücretsiz, öncelikli)
- Yöntem: Kadıköy ve Ataşehir'de Facebook/WhatsApp anne grupları. Yönetici izni alınmadan paylaşım yok. Kişisel tanıtım, "anne olarak" dili; kurumsal kampanya görünümü yok.
- Hafta: T-2 ile T+3 arası, 10-15 grup, her grupta tek paylaşım + yorum yanıtlama.
- Mesaj: "İlk satıcılar için erken erişim" çağrısı (ilk 50 satıcı), tek yönlü reklam değil, soru-cevap.
- Ölçüm: grup başına tıklama (kısa link + UTM), kayıt, ilk ilan.
- Risk: Grup kuralları reklamı yasaklayabilir; ihlal eden grup listesi tutulur. Kişisel veri (üye isimleri) toplanmaz.
- Sorumlu: Can. Hukuk: paylaşım metni (güven ifadeleri) için Murat teyidi.

### Kanal 2 — Mikro-influencer (5 hesap ile başlama; ücret/takas ONAY GEREKİR)
- Yöntem: Kadıköy/Ataşehir çevresi 5-20 bin takipçili anne hesapları. İçerik: "bebeğimin büyüdüğü eşyaları nasıl verdim" hikâyesi; teslim güvenliği vurgusu ama garanti dili yok.
- Hafta: T-1 ile T+3 (5 hesap).
- Ölçüm: hesap başına UTM ve davet kodu; indirme, kayıt, ilk ilan.
- ONAY GEREKİR (para): ücretli iş birliği, ürün takası (ürün alımı varsa), kampanya bütçesi. Bu planda rakam önerilmedi.
- Hukuk: "reklam" etiketi (sponsorlu içerik işareti) ve yanıltıcı beyan kontrolü Murat'ın işi.
- Sorumlu: Can (liste ve brief), kurucu (bütçe onayı).

### Kanal 3 — Fiziksel anne-bebek noktaları (ücretsiz başlangıç, izin gerekir)
- Yöntem: Pilot ilçedeki bebek-çocuk kafeleri, anne-bebek atölyeleri, doğum sonrası kliniklerin bekleme alanı (klinik izni ayrı). QR kodlu kart: "ilk ilanını bugün ver".
- Hafta: T-1 ile T+4, 5-8 nokta.
- Ölçüm: QR tarama, kayıt, nokta başına kayıt (her noktaya ayrı QR).
- Basılı materyal: ONAY GEREKİR (para) (tasarım dosyası Selin'den; basım kurucu onayı).
- Risk: Mekân izni, sağlık alanında tanıtım kısıtı (klinik kanalı Hukuk teyidi olmadan başlamaz).
- Sorumlu: Can; Selin materyal.

### Kanal 4 — Kendi kanalları ve ağızdan (ücretsiz, düşük maliyet)
- Yöntem: Pilot anneleri ilk teslimden sonra "arkadaşını davet et" kısa kodu (davet kodu). Kişisel veri istemeyen, sade bağlantı.
- Ölçüm: davet kodundan kayıt.
- Not: Davet kodu ödül içermez (ödül bir ekonomik teşvik; ayrı Hukuk ve onay gerektirir). Bu varsayım kurucu onayına sunulacak.

## 3. Takvim (göreli)
| Zaman | İş | Sorumlu |
|---|---|---|
| T-4 hf | Mağaza metni ve SSS Hukuk teyidi (ONAY-004 paketine ekle) | Can, Murat |
| T-3 hf | Kanal 1 grup listesi (10-15), yönetici izin mesajları taslağı | Can |
| T-2 hf | Satıcı davetiyesi (grup + kanal 4); satıcılar için erken erişim | Can |
| T-1 hf | Mikro-influencer brief (ONAY sonrası); QR kartları (ONAY sonrası) | Can, Selin |
| T | Herkese açık sürüm; kanal 1 ve 2 yayını | Can, Ece (teknik açılış) |
| T+1 hf | Kanal 3 noktaları başlar; günlük ilan ve kayıt izlemesi | Can |
| T+4 hf | Ara kontrol (hafta 4 eşikleri), kanal bazlı yeniden dağılım | Can, Kerem |
| T+8 hf | Pilot karar toplantısı (pilot-esikler.md §3) | Kerem, Can, Defne |

## 4. Ölçüm ve raporlama
- Haftalık panel: kayıt, ilk ilan, ilan sayısı (aktif), mesaj, teslim (iki taraf onayı), kanal ve davet kodu kırılımı.
- Veri kaynağı: CTO'nun olay ölçümleri (pilot-esikler.md §4). Kanal bilgisi için UTM ve davet kodu ek alan gerektirebilir; Ece'ye not: kişisel veri minimizasyonu (KVKK) ile uyumlu olmalı, Murat onayı.
- Rapor: haftalık kısa özet #pazarlama'ya ve CEO'ya.

## 5. Riskler ve azaltımlar
| Risk | Etki | Azaltım |
|---|---|---|
| Arz yetersiz (ilk hafta ilan az) | Alıcı kaybolur | T-2 hafta satıcı davetiyesi; influencer'ı arzdan önce değil sonra kullan |
| İlk teslimde kötü deneyim (sahte, boş buluşma) | Güven kaybı | Güvenlik ipuçları kartı, "buluşma olmadı" seçeneği, hızlı şikâyet yanıtı (moderasyon.md) |
| Mağaza gecikmesi | Takvim kayar | Göreli takvim; T gününe kadar satıcı listesi bekletilmez, ama davet kişisel veri toplamaz |
| Grup/platform reklam kuralı ihlali | Hesap engeli | Yönetici izni; izinsiz paylaşım yok |
| Hukuki iddia riski (güvenlik vaadi) | Yasal sorun | Garanti dili yok (magaza-metni.md §0) |

## 6. Kurucu için ONAY GEREKİR (para) ve 👤 maddeleri
- ONAY GEREKİR (para): mikro-influencer ücret/takas bütçesi (kanal 2).
- ONAY GEREKİR (para): QR ve basılı materyal baskısı (kanal 3).
- ONAY GEREKİR (para): Google/Meta reklam kampanyası — bu planda ÖNERİLMEDİ; yalnız arz doğrulandıktan sonra ayrı değerlendirilir.
- 👤 Senin yapman gereken: mağaza hesapları, uygulama adı/marka onayı, mağaza yayın tarihi (plan T'yi belirler).

## 7. Açık sorular
1. Kurucu: influencer ve basım için bütçe tavanı (rakam verilirse kanal sayısı ayarlanır).
2. Kerem: davet kodunun ödülsüz tutulması onaylanır mı?
3. Murat: kanal 3 (klinik) için izin ve tanıtım kısıtları; "reklam" etiketi zorunluluğu.
