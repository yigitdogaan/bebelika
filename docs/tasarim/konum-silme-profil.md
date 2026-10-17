# Konum Rızası, Hesap Silme ve Profil/Ayarlar Ekranları — v0.1
Hazırlayan: Selin · 17.10.2026. Girdi: akislar.md S3/S16, hukuk/sozlesme-taslak.md Bölüm C ve §Haklar, pazarlama/sss.md S13/S15, marka.md, kontrast.md.
Not: Hukuk metinleri TASLAK; ekrandaki ifadeler Murat'ın teyidine açıktır. Renkler token adıyla (marka.md); kod henüz bu paleti kullanmıyor.

## Ortak ilkeler
- Tek eli kullanan ebeveyn: ana eylem alt sabit, tam genişlik, ≥56 dp; ikincil eylem hemen üstünde/altında, ≥44 dp.
- Reddetmek hata değildir: reddet butonu ikincil ama aynı boyda ve görünür; "Şimdi değil" cezalandırılmaz.
- Rıza onay kutusuyla önceden işaretli gelmez; konum rızası ile uygulama kullanımı birbirine bağlanmaz (Hukuk Bölüm C: "kapatman uygulamayı kullanmanı engellemez").

## 1. Konum rıza ekranı (S3 içinde ve ilk "Yakınımda" dokunuşunda)
```
(üstte 120 dp çizim: harita iğnesi + ilçe sınırı, Nane Açık zemin)
H1: "Yakınındaki ilanları gösterelim mi?"
Gövde: "Cihazının konumunu yalnızca uygulama açıkken kullanırız."
Madde ✓ "Kesin konumun kimseye gösterilmez; yalnız ilçe düzeyinde yaklaşık konum görünür."
Madde ✓ "Kesin konumunu kalıcı olarak saklamayız."   [TEYİT: Murat — Bölüm C ile uyumlu mu]
Madde ✓ "İzni Ayarlar'dan dilediğin zaman kapatabilirsin."
Bağlantı: "Aydınlatma metnini oku"  (Çam, alt çizgili)
[Konumumu kullan]        birincil, alt sabit
[İlçemi kendim seçeceğim] ikincil, hemen altında
```
- Birincil buton işletim sistemi izin penceresini açar; ekran, OS penceresinden ÖNCE gösterilir (ön bilgi).
- İşletim sistemi reddederse: aynı ekranda hata rengi YOK; bilgi bandı (Nane Açık): "Konum kapalı. İlçeni seçerek devam edebilirsin." + [İlçe seç]. Ayarlar'a götüren bağlantı küçük metinle.
- "İlçemi seçeceğim" → ilçe seçici (arama + liste, ≥48 dp satır). Keşfet o ilçeye göre çalışır.
- Rıza kaydı: zaman damgası + metin sürümü Ece'nin tarafında tutulur (Hukuk ispat gerekliliği; TEYİT).
- Yaklaşık konum ibaresi ilan kartında "Kadıköy · 2 km" gibi; km yuvarlanır (kesin mesafe değil), kart bunu değiştirmez.
- Erişilebilirlik: çizim `accessibilityElementsHidden`; maddeler tek okuma sırasında; butonlar etiketli.

## 2. Ayarlar (S16'dan açılır)
Liste satırları (her biri ≥56 dp, sağda ok/anahtar), bölümlü:
| Bölüm | Satır | Not |
|---|---|---|
| Bildirimler | Mesajlar, buluşma hatırlatmaları, kararlar | Anahtar; kararlar (S19) kapatılamaz, satır gri "Zorunlu" |
| Gizlilik | Konum izni | Anahtar + alt metin "Yalnız uygulama açıkken. Kapatırsan ilçeni kendin seçersin." Kapatınca onay istemez |
| Gizlilik | Aydınlatma metni, Kullanım Sözleşmesi, Topluluk Kuralları | Bağlantı satırları |
| Güvenlik | Engellenenler | Liste; her satırda [Engeli kaldır] |
| Destek | Yardım ve iletişim | |
| Hesap | Çıkış yap | Metin satırı |
| Hesap | **Hesabı ve verileri sil** | Hata kırmızısı #B3261E metin, ayrı bölümde en altta |
Sürüm numarası en altta küçük gri-kömür.

## 3. Hesabı ve verileri sil (mağaza ve KVKK gereği, SSS S15)
Adım 1 — Bilgi ekranı (tam ekran, geri var):
```
H1: "Hesabını silmek üzeresin"
Kart "Silinecekler":  profilin, ilanların ve fotoğrafların, favorilerin
Kart "Bilmen gerekenler":
  • Mesajların karşı tarafta, kişisel verin olmadan kalabilir [TEYİT: Murat]
  • Yasal yükümlülük gereği bazı kayıtlar [süre: TEYİT Murat] saklanır, sonra silinir/anonimleştirilir
  • Aktif buluşman varsa önce iptal edilir; karşı tarafa haber gider [TEYİT: Ece]
  • Bu işlem geri alınamaz
Bağlantı: "Silme ve saklama süreleri" (Aydınlatma metni)
[Vazgeç]                 birincil görünümde (Nane Koyu) — güvenli seçenek öne çıkar
[Devam et]               ikincil, hata kırmızısı çerçeve + metin
```
Adım 2 — Onay (alt sayfa):
- "Devam etmek için SİL yaz" girişi (büyük/küçük harf duyarsız; boş bırakılınca buton pasif, nedeni altında yazılı). Giriş çerçevesi #85837B (kontrast.md).
- [Hesabımı kalıcı olarak sil] hata kırmızısı dolgu (beyaz yazı 6,54:1 ✅), [Vazgeç] metin butonu.
- Yükleniyor: buton içinde dönen gösterge, çift dokunma engellenir.
Adım 3 — Sonuç: tam ekran onay: ikon + "Hesabın silindi." + "Verilerini silme isteğini aldık. Yasal saklama süresi olan kayıtlar süre sonunda silinir." + [Tamam] (giriş ekranına döner).
Hata durumu: "Şu an silemedik. Birazdan tekrar dene; olmazsa destek@… [adres: İK/Ürün belirler]" + [Tekrar dene]. Sahte başarı mesajı yok.
Mock/demo modu: ekran görünür ama nihai adım "Demo modunda silme yapılmaz" bandı gösterir ve hiçbir veri silinmez; sahte başarı gösterilmez (karar: demo dürüstlüğü).

## 4. Profil (S16) — kendi profilim
```
Üst: avatar 80 dp (foto yoksa baş harf, Nane Açık zemin), ad (H1), "Kadıköy" ilçe, [Profili düzenle] (ikincil)
Rozet satırı: "Yeni üye" (az işlemde) | "12 işlem · ★ 4,8" (yeterliyse) — "doğrulanmış" rozeti YOK (marka kararı)
Sekmeler: Aktif ilanlar | Satılanlar | Aldıklarım   (alt çizgi Nane Koyu, ≥44 dp)
İlan ızgarası: 2 sütun ilan kartı; boş durum: bos-durumlar.md "Henüz ilanın yok" + [İlan ver]
Sağ üst: dişli ikonu → Ayarlar (§2)
```
Başkasının profili: aynı üst bölüm, [Mesaj gönder] birincil, ⋯ menüsü: Şikâyet et / Engelle (S17). Ayarlar ve telefon/e-posta alanı görünmez. Puan yorumları pilotta yok (yalnız etiketler).
Profili düzenle: ad, ilçe, foto; kaydet alt sabit. Ad alanında "tam ad gerekmez; ilk ad yeterli" yardım metni (veri azaltma).

## 5. Ece'ye kod notları
- Tema token'ları: `girisCerceve #85837B`, `pasifMetin #4F5A63`, `hata #B3261E`, `nane #2F7D6D`.
- Konum rıza durumu üç değerli: `verildi | reddedildi | sorulmadı`; "sorulmadı" ise Keşfet ilk açılışta ekranı gösterir.
- Hesap silme: mock'ta hiçbir şey silmeyen sahte uç yok; gerçek modda tek RPC + oturum kapatma.
- Açık soru (Murat): Mesajların silme sonrası durumu ve yasal saklama süreleri; metinler netleşince ekran metinleri güncellenir.
