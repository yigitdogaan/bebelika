# Sonraki Sürüm Backlog Sıralaması (RICE) (v0.1)
Sahip: Kerem (Ürün) | Tarih: 2026-10-17 | Girdi: mvp.md §5, pilot-esikler.md, gorevler.md
Durum: ön sıralama. Tüm değerler TAHMİN; Ece'nin efor tahmini henüz yok, Effort kaba.

## 1. Yöntem ve varsayımlar
RICE = (Reach × Impact × Confidence) / Effort. Reach: kullanıcı yüzdesi. Impact: 0.5/1/2. Confidence: %. Effort: kişi-hafta.
Bu liste MVP sonrasıdır; F5 buluşma ve F6 teslim onayı kodu P0 olduğundan RICE'a girmez.
Varsayım: North Star'ı (haftalık teslim) en çok güven ve likidite etkiler.

## 2. Skor tablosu
| # | Özellik | R | I | C% | E | RICE | Gerekçe |
|---|---|---|---|---|---|---|---|
| 1 | Push bildirim (mesaj, buluşma hatırlatma) | 90 | 2 | 80 | 1.5 | 96 | Yanıt süresi ve teslim; Apple hesabı kurucuda |
| 2 | Buluşma noktası geliştirme (kürasyonlu liste) | 70 | 1 | 60 | 1 | 42 | "Buluşma olmadı"yı düşürür |
| 3 | Favori + fiyat düşüş/verildi bildirimi (F9) | 50 | 1 | 70 | 1 | 35 | Alıcı geri dönüşü |
| 4 | Kayıtlı arama / yeni ilan uyarısı | 40 | 1 | 60 | 1 | 24 | Arz-talep eşleşmesi |
| 5 | Telefon doğrulama rozeti (SMS OTP) | 60 | 1 | 60 | 2 | 18 | Güven; SMS maliyeti, kurucu onayı |
| 6 | Harita görünümü | 50 | 0.5 | 50 | 2 | 6 | MVP'den çıkarıldı; listeye göre kazanç belirsiz |
| 7 | Doğrulanmış satıcı (kimlik) | 20 | 2 | 40 | 4 | 4 | Hukuki/maliyet belirsiz |
| 8 | Öne çıkarma (gelir) | 30 | 1 | 40 | 3 | 4 | Yalnız başarılı pilot sonrası (ONAY-002) |
| 9 | Kişiselleştirilmiş öneri | 60 | 0.5 | 30 | 4 | 2 | Veri yok |
RICE dışı: Moderasyon paneli (iç zorunluluk, şikâyet SLA'sı moderasyon.md) ve ikinci şehir (stratejik karar).

## 3. Önerilen sıra (pilot başladıktan sonra)
1. Moderasyon paneli (hafta 1'e kadar)
2. Push bildirim
3. Buluşma noktası geliştirme
4. Favori + bildirim
5. Kayıtlı arama
6. Telefon rozeti (sahte hesap sorunu çıkarsa öne alınır)
Öne çıkarma ve doğrulanmış satıcı pilot başarısına bağlıdır.

## 4. Tetikleyiciler
- Buluşma olmadı >%25: hatırlatma ve nokta işleri öne.
- İlk mesaj oranı <%40: push ve kayıtlı arama öne.
- Sahte hesap/spam artışı: telefon rozeti öne (otp-karar.md).
- Ciddi güvenlik olayı: pilot durur, Murat ile süreç.

## 5. Açık sorular
- Ece: push ve panel için efor tahmini → RICE güncellenir.
- Can: kampanyalar ürüne ek istek getirir mi?
- Kurucu: Apple geliştirici hesabı zamanı (push buna bağlı).
