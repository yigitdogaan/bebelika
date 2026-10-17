# Hafta 4 ve Hafta 8 Kanal Bazlı Edinim Hedefi (v0.1 taslak)
Sahip: Can (Pazarlama) | Tarih: 2026-10-17 | Durum: taslak; tüm rakamlar TAHMİN, hafta 4 verisiyle kalibre edilir
Kapatır: pilot-esikler.md §6 açık soru 1 ("kanal bazında hafta 4 edinim hedefi"), gorevler.md P3 "Hafta 4 kanal bazlı edinim hedefi"
Girdi: docs/pazarlama/lansman.md §1-2, docs/urun/pilot-esikler.md §2, state/kararlar.md (pilot edinim kararı, 2026-10-17)

## 0. Varsayımlar
- E1: Edinim hedefi "kayıtlı satıcı" sayısıdır (ilk ilan vermeden kayıt olan). Ölçüm: hesap oluşturma olayı + kanal etiketi (UTM / davet kodu / QR).
- E2: Hedefler T (herkese açık sürüm günü) sonrası kümülatif. Hafta 4 = T+4 hafta, hafta 8 = T+8 hafta.
- E3: Kanal payları tahmindir ve pilotta değişir. Hiçbir kanal kurucu onayı olmadan başlamaz (lansman.md V5); ücretli kanal (2 ve 3'ün basılı kısmı) hedefi, onay gelmezse 0 kabul edilir ve hedef kanal 1 ve 4'e kayar.
- E4: "İlk ilan" ile "kayıt" ayrı izlenir; kayıt hedefi ilan hedefini (pilot-esikler.md: hafta 4 ≥100 aktif ilan) karşılamaz. Dönüşüm tahmini: kayıtlı satıcının %50'si ilk ilanını verir (tahmin; hafta 4'te ölçülür).

## 1. Hedef tablosu (kümülatif kayıtlı satıcı, tahmin)
| Kanal | Pay (tahmin) | Hafta 4 hedefi | Hafta 8 hedefi | Ön koşul |
|---|---|---|---|---|
| K1 Mahalle anne grupları | %45 | ≥66 | ≥180 | Yönetici izni; grup listesi (grup-izin.md) |
| K2 Mikro-influencer (5 hesap) | %15 | ≥23 | ≥60 | ONAY GEREKİR (para) (ücret/takas) |
| K3 Fiziksel noktalar | %25 | ≥38 | ≥100 | Mekân izni; QR baskısı ONAY GEREKİR (para) |
| K4 Davet kodu (ağızdan) | %15 | ≥23 | ≥60 | Davet kodu ödülsüz (lansman.md açık soru 2) |
| **Toplam** | %100 | **≥150** | **≥400** | Lansman tahmini ile aynı |

Toplam kontrolü: hafta 4 için 66+23+38+23 = 150; hafta 8 için 180+60+100+60 = 400. Yuvarlamalar K1'de yapılmıştır.

## 2. Kanal bazlı ara eşik (hafta 2 kontrolü)
Hafta 2 (T+2): kümülatif toplam ≥60 kayıt (hafta 4 hedefinin %40'ı). Altındaysa:
- K1 yanıt oranı düşükse (izin verilen grup sayısı < 8) grup listesi genişletilir (T-3 listesinde 15 üstü yok; yeni grup kurucu bilgisiyle).
- K4 davet kodu hiç kullanılmamışsa ilk teslim sonrası mesaj metni gözden geçirilir.

## 3. Kanal dağılımı kuralı (hafta 4 sonrası)
- Kanal kayıt başına "ilk ilan" oranı (tahmin %50) hedefin altındaysa, o kanalın payı azaltılır; ilan veren satıcı üreten kanal artırılır.
- Hiçbir kanal tek başına pilotun %60'ını aşarsa risk notu yazılır (tek kanala bağımlılık).
- Kanal bazlı oran, pilot-esikler.md'deki "ilk 7 günde ilk mesaj" ve teslim metrikleriyle birlikte okunur; sadece kayıt sayısı ile karar verilmez.

## 4. Ölçüm gereksinimi (Ece'ye, teknik not)
- Kayıt olayında kanal alanı: `kaynak` (grup / influencer / qr / davet / organik) + `kaynak_kodu` (grup kodu, hesap kodu, QR kodu, davet kodu). Kişisel veri değil; KVKK minimizasyonu için Murat teyidi.
- Haftalık panel kırılımı: kanal × kayıt × ilk ilan. Lansman.md §4 ile aynı panel.

## 5. Karar kuralı (Can önerisi, pilot-esikler.md §3 ile uyumlu)
- Hafta 4 kayıt ≥150 VE ilk ilan ≥%40 ise: K1/K4 kanallarında devam, K3 ve K2 kurucu onayına göre ölçekle.
- Hafta 4 kayıt <100: kanal 1'e yoğunlaş, kurucuya "para" harcamadan önce ara değerlendirme sun.
- Sayılar pilot-esikler.md §3 karar kuralının yerine geçmez; bu dosya sadece kanal dağılımını verir.

## 6. Açık sorular
1. Kurucu: K2 ve K3 bütçe tavanı gelmeden hedefler "ücretsiz kanallar + ONAY bekleyen" olarak okunur (butce.md de bu tavana bağlı).
2. Kerem: hafta 4 kayıt hedefi pilot-esikler.md tablosuna eklensin mi? (Öneri: evet, "kayıtlı satıcı ≥150" olarak; kararı Kerem verir.)
3. Ece: kanal alanı olay şemasına eklenebilir mi (lansman.md §4 ile aynı).
