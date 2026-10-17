# Güvenli Buluşma İpuçları Ekranı İçeriği (v0.1)
Sahip: Selin (Tasarım) | Tarih: 2026-10-17 | Durum: ÖNERİ; metinler Hukuk (Murat) incelemesine gider.
Girdi: akislar.md §8, politika.md §5-6, moderasyon.md §9, mvp.md F5.

## 1. Ne zaman gösterilir
1. İlk sohbette sabit kart (kapatılabilir): yalnız 2 madde (numara/ödeme).
2. Buluşma kabul edilince: tam kart (aşağıda) tek ekran.
3. Buluşma günü bildirimi: kısa özet + [İpuçlarını gör].
4. Menü: Profil > Güvenlik ipuçları (her zaman erişilebilir).
Dil ilkesi: ipucu = öneri, GARANTİ değil. "Güvenli", "garantili", "doğrulanmış" kelimeleri kullanılmaz; "Önerilen buluşma noktası" denir. Bebelika buluşmayı yönetmez ve sorumluluk üstlenmez (moderasyon.md §9). Alt satır: "Bebelika buluşmaları takip etmez; bu öneriler genel tavsiyedir."

## 2. Ana kart: "Buluşmadan önce" (8 madde, ikon + tek cümle)
| # | İkon | Metin |
|---|---|---|
| 1 | Bina | Kalabalık, aydınlık, herkese açık bir yerde buluş: AVM, metro çıkışı, kafe önü. |
| 2 | Güneş | Mümkünse gündüz buluş. |
| 3 | Ev (üstü çizili) | Ev adresini paylaşma. Tam adres gerekmez. |
| 4 | Kişi | Yanında biri olsun ya da buluşmayı bir yakınına haber ver. |
| 5 | Telefon (üstü çizili) | Telefon numaranı vermek zorunda değilsin; sohbet uygulama içinde yapılabilir. |
| 6 | Büyüteç | Ürünü teslimde birlikte kontrol et: parçalar tam mı, çalışıyor mu, güvenlik etiketi var mı. |
| 7 | Cüzdan | Ödemeyi buluşmada yap. Önceden para göndermeni isteyenlere dikkat et. |
| 8 | Saat | İçine sinmiyorsa buluşmayı iptal et. Sorun olursa [şikâyet et]. |
Butonlar: [Anladım] (ana, alt), ikincil metin bağlantı [Sorun var, şikâyet et] (S17'ye gider).
Kart uzunluğu: tek ekran, kaydırma gerekmeden; metin sistem boyutuyla büyüyünce kaydırılabilir olmalı.

## 3. Ürün cinsine göre ek ipucu (ilan kategorisine göre ek satır)
Kaynak: politika.md §3.2 riskli ürün koşulları. Alıcıya, "ürünü teslimde kontrol et" satırının altında gösterilir.
| Kategori | Ek ipucu |
|---|---|
| Bebek arabası, mama sandalyesi | Fren, kilit ve kemerleri teslimde dene. |
| Park yatak, beşik (uyku) | Bağlantı parçaları eksiksiz mi, kırık ya da dökülen boya var mı bak. |
| Elektrikli ürün | Adaptör ve kablo tam mı, çalışıyor mu gör. |
| Oyuncak | Küçük parça, düğme pil ve kırık yer var mı kontrol et. |
| Giyim | İpli ya da kordonlu boyun/kapüşon varsa çocuk için uygun olmayabilir. |
| (Oto koltuğu) | MVP'de ilan verilebilir ama koşullu (politika §3.2): üretim tarihi, etiket ve kazasız beyanı; şüphen varsa alma. Metin Hukuk'ta kesinleşir. |

## 4. Satıcıya özel kısa ek
- Alıcı ürünü beğenmezse ısrar etme; ürünü geri almak serbest, zorunlu değil.
- Alıcı ısrarcı davranır ya da fiyatı buluşmada zorla değiştirmek isterse satmak zorunda değilsin; [şikâyet et] seçeneği var.
- Buluşma gerçekleşmezse "Buluşma olmadı" seçeneğini kullan; ilan yeniden aktif olur (F6).

## 5. Sohbet içi mikro metinler
- İlk sohbet kartı: "Numaranı paylaşmak zorunda değilsin. Ödeme buluşmada yapılır."
- IBAN/telefon algılanınca: "Kişisel bilgi ve IBAN paylaşma. Ön ödeme isteyenlere dikkat." (akislar.md §7 ile aynı)
- Gece 20:00 sonrası saat seçilirse: "Gündüz buluşmak daha güvenli olur." (yumuşak uyarı; engel yok; "daha güvenli" yine tavsiye dili, Hukuk gözden geçirsin.)
- Buluşma günü bildirimi başlığı: "Bugün buluşman var" / gövde: "Saat 11:00, Kadıköy iskele önü. İpuçlarını gör."
- Teslim sonrası: "Her şey yolunda mıydı?" [Evet, teslim edildi] [Buluşma olmadı] [Sorun var].

## 6. Yapılmayacaklar
- Canlı konum, "buluşmaya gidiyorum" paylaşımı: MVP dışı (mvp.md §5).
- Acil durum butonu / 112 kısayolu: MVP dışı. Kart altında yalnız bilgi satırı olarak "Acil durumda 112'yi ara." düşünülebilir; bunu Hukuk'a soruyorum (uygulama güvenlik vaadi gibi okunabilir).
- Nokta listesinde ticari yer önerisi yok; ticari ortaklık varsa kurucu onayı gerekir (akislar.md §8).

## 7. Erişilebilirlik
- İkon tek başına anlam taşımaz; her maddede metin var, ikon dekoratif (ekran okuyucu atlar).
- Madde numarası okunur ("1 / 8").
- Kart tüm dokunma hedefleri ≥48 dp; [Anladım] başparmak bölgesinde.

## 8. Açık noktalar
- Hukuk: "daha güvenli" ifadesi, 112 satırı, oto koltuğu ek satırı. (Murat'a not düşüyorum.)
- Önerilen buluşma noktası listesi içerik/yetki: Kerem+Hukuk (S13 kodda yok).
- Metinler sade Türkçe; gerçek kullanıcı testi pilotta yapılacak (anlaşılırlık testi 5 kişi).
