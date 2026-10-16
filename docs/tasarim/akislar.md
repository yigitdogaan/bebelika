# Bebelika Ana Akışlar ve Metin Wireframe (v0.1)
Sahip: Selin (Tasarım) | Tarih: 2026-10-16 | Durum: ÖNERİ; kesin karar CEO/kurucu.
Girdi: docs/urun/mvp.md (F1-F9), docs/hukuk/politika.md. Marka/isim/logo/renk kurucu onayına bağlı; burada yalnız işlev ve ton.

## 1. Tasarım ilkeleri (gerekçeli)
- Başparmak bölgesi: ana aksiyon ekranın alt 1/3'ünde, sabit alt çubukta. Gerekçe: A2, bebek kucakta tek el.
- Dokunma hedefi ≥48x48 dp (iOS ≥44 pt), hedefler arası ≥8 dp. Yorgun/titrek el hatasını azaltır.
- Üst köşe aksiyonu yok; geri/kapat alt çubukta veya kenardan kaydırma ile de çalışır.
- Güven dili: "Telefonu doğrulandı", puan, "Yeni üye" rozeti. "Doğrulanmış satıcı" rozeti MVP DIŞI, kullanılmaz.
- Hukuk dili: "güvenli nokta" GARANTİ gibi okunmasın; arayüzde "Önerilen buluşma noktası" yazılır (politika bölüm 5).
- Sıcak ama sade: tek vurgu rengi, bol boşluk, ekran başına tek ana buton, kısa cümleler.

## 2. Ekran listesi
| No | Ekran | Özellik |
|---|---|---|
| S1 | Hoş geldin + telefon girişi | F1 |
| S2 | SMS kodu | F1 |
| S3 | Profil: ad, ilçe, foto(ops.) + konum izni | F1, F3 |
| S4 | Keşfet (liste) | F3 |
| S5 | Harita görünümü | F3 |
| S6 | Filtre sayfası | F3 |
| S7 | İlan detay | F3, F5, F8 |
| S8-S10 | İlan ver: foto, bilgi, önizleme | F2 |
| S11 | Sohbet listesi | F4 |
| S12 | Sohbet | F4, F5, F6 |
| S13 | Buluşma öner | F5 |
| S14 | Teslim onayı | F6 |
| S15 | Puanlama | F7 |
| S16 | Profil (kendi/başkası) | F1, F7 |
| S17 | Şikâyet / engelle sayfası | F8 |
| S18 | Favoriler (P2) | F9 |
Gezinme: alt sekme çubuğu 4 sekme: Keşfet, İlan Ver (ortada belirgin), Mesajlar, Profil.

## 3. Onboarding (F1) - 3 ekran
Giriş yapmadan Keşfet salt okunur görülebilir (öneri; hızlı değer gösterir). Mesaj/ilan anında S1'e yönlenir (kabul: doğrulanmamış kullanıcı yapamaz).
**S1 Telefon:** başlık "Yakınındaki bebek eşyaları"; telefon alanı (sayısal klavye); alt: [Kod gönder] tam genişlik; altında 18+ onayı ve ayrı bağlantılar: Aydınlatma Metni, Kullanım Koşulları (onay kutusu metinden ayrı; açık rıza ayrı sunulur, Hukuk 6.4).
**S2 SMS:** 6 haneli kod, otomatik doldurma; [Doğrula]; "Kodu tekrar gönder (süre sayacı)"; yanlış kodda satır içi hata.
**S3 Profil:** ad (zorunlu), ilçe seçici (İstanbul ilçe listesi, arama), foto (atla); konum izni ön bilgi kartı: "Yakınındaki ilanları göstermek için, yalnız uygulama açıkken. Tam adresin kimseyle paylaşılmaz." [Konumu kullan] / [İlçemi seçeceğim]. İzin reddi hata değildir: ilçe ile devam.
Erişilebilirlik: klavye açıkken buton klavyenin üstünde yapışık; hata metni renge ek ikon+metin; SMS kodu ekran okuyucuya haneler halinde okunur.

## 4. Keşfet: liste ve harita (F3)
**S4 Liste** (üstten alta):
1. Arama kutusu (üstte, odak alanı) + [Filtre] ikonu; sık kullanılan çipler: Kategori, Mesafe, Fiyat (başparmak için çipler de alt yarıdan erişilebilir: kaydırılır).
2. Konum satırı: "Kadıköy ve çevresi, 3 km" (dokununca mesafe değişir).
3. İlan kartı (tek sütun, büyük foto): foto, fiyat/"Ücretsiz", ürün adı, durum etiketi (Yeni gibi/İyi/Orta), "~1,2 km" yaklaşık mesafe (tam konum yok), satıcı puanı veya "Yeni üye".
4. Alt yüzen buton: [Harita] (S5'e geçiş).
Sıralama varsayılan: mesafe + yenilik; menüden değiştirilebilir. Çekerek yenile; sonsuz kaydırma.
Boş sonuç: illüstrasyon + "Yakında ilan yok" + [Mesafeyi genişlet] ana buton + [Filtreleri temizle].
**S5 Harita:** harita tam ekran; ilanlar yaklaşık konum DAİRESİ (tam nokta işareti değil) olarak; alt çekmece kart (sürüklenebilir) seçilen ilanı gösterir; [Liste] yüzen buton. Erişilebilirlik: harita yalnız ek görünüm; tüm bilgi listede de var; harita öğeleri için ekran okuyucuya "5 ilan, yaklaşık 1 km" özeti.
**S6 Filtre** (alt sayfa, %80 yükseklik): Kategori (çoklu), Fiyat aralığı (iki alan + kaydırıcı), Mesafe (1/3/5/10 km seçim çipleri), Bebek yaş aralığı (0-6 ay, 6-12 ay, 1-2 yaş, 2+). Alt sabit: [N ilanı göster], yanında [Temizle].
Yasaklı kategori (mama, emzik vb.) listede yer almaz.

## 5. İlan detay (S7) (F3, F5, F8)
Üstten alta: foto galerisi (kaydır, sayaç "2/5"); fiyat + durum etiketi; başlık; "~1,2 km, Kadıköy" ; satıcı kartı (ad, ilçe, puan, işlem sayısı, "Telefonu doğrulandı"); açıklama; ürün özellikleri (kategori, yaş aralığı; kategoriye göre beyanlar: ör. oto koltuğunda "Kazasız" beyanı, üretim tarihi, kullanım ömrü bilgisi).
**Güvenlik şeridi (kaydırmada kaybolmaz, satıcı kartının altı):** "Ödemeyi ve ürün kontrolünü buluşmada yap. Ön ödeme/IBAN isteyenlere güvenme." [Güvenlik ipuçları].
Oto koltuğu, beşik gibi riskli kategoride ek uyarı kutusu: "Etiketi ve geri çağırma durumunu teslimde kontrol et" + resmi kaynak bağlantısı (Hukuk 3.2/3.3).
Üst sağ "..." menüsü: [İlanı şikâyet et], [Güvensiz ürün bildir] (ayrı, görünür satır olarak da ilan sonunda).
**Alt sabit çubuk (başparmak):** [Favori] (P2) ikonu + ana buton [Satıcıya mesaj yaz] tam genişlik. Hızlı seçenekler: "Hâlâ var mı?" çipi doğrudan gönderir.
Kendi ilanında: [Düzenle] [Verildi işaretle] [Kaldır]. Verilmiş ilanda buton pasif, "Bu ilan verildi".

## 6. İlan ver (F2) - 3 adım, hedef <60 sn
İlerleme: "1/3" metni + çubuk. Taslak otomatik kaydedilir; açılışta "Yarım kalan ilanına devam et" kartı.
**S8 Foto (adım 1):** kamera + galeri, en az 1, en çok 8 (öneri). Yönlendirme metni: "Ürünü düz zeminde çek. Çocuk yüzü görünmesin." (Hukuk 4). Alt: [Devam].
**S9 Bilgi (adım 2):** tek kaydırmasız ekran hedefi: Kategori (büyük döşeme seçim, ilk ikon ızgarası), Durum (3 büyük segment: Yeni gibi/İyi/Orta), Fiyat (sayısal klavye) + [Ücretsiz] anahtarı. Başlık/açıklama "isteğe bağlı" bölümünde; başlık kategoriden otomatik önerilir. Alt: [Devam].
Kategori seçilince koşullu uyarı: yasaklı ürün kısa listesi satırı "Mama, emzik, ilaç ilan verilemez" + [Neden?]. Riskli kategoride ek zorunlu alanlar (oto koltuğu: üretim tarihi, marka/model, kazasız onayı) satır içi belirir; adım uzar, kullanıcıya önceden "+1 küçük adım" yazılır.
Geri çağırma eşleşmesinde: engelleyici kart "Bu ürün için güvenlik uyarısı var" + resmi bağlantı; [Yayınla] pasif.
**S10 Önizleme (adım 3):** kartın alıcıda görünüşü; konum satırı "Kadıköy (profil ilçen). Tam adresin gösterilmez." ; onay kutusu: "Beyanlarımın doğru olduğunu onaylıyorum." (sorumluluk metni, Hukuk 3.4). [Yayınla] ana buton alt sabit. Başarı: "İlanın yayında" + [İlanı paylaş] [Yeni ilan].
Erişilebilirlik: fotoğraf alanlarına alt metin alanı yok ama otomatik etiket "Foto 1"; segment seçimleri rol=radyo; hata ilk hatalı alana odaklanır.

## 7. Mesajlaşma (F4)
**S11 Sohbet listesi:** satır: ilan küçük fotosu, karşı taraf adı, son mesaj, okunmamış sayacı; üstte süzgeç: Hepsi / Alıyorum / Satıyorum. Boş durum: "Henüz mesajın yok" + [Keşfet'e git].
**S12 Sohbet:** üst bant ilan özeti (foto, fiyat, durum; dokununca S7). Mesaj akışı. Alt: yazma alanı + gönder; üstünde hızlı yanıt çipleri: "Hâlâ var mı?", "Bugün uygun", "Buluşalım mı?" (kaydırılır). Yazma alanı yanında [+]: Buluşma öner, Foto gönder. Üst "..." : Engelle, Şikâyet et.
İlk açılışta sabit güvenlik kartı (kapatılabilir): "Numaranı paylaşmak zorunda değilsin. Ödeme buluşmada yapılır."
Telefon/IBAN algılanırsa (engelleme yok) gönder öncesi satır içi uyarı: "Kişisel bilgi ve IBAN paylaşma. Ön ödeme isteyenlere dikkat." [Yine de gönder] [Düzenle]. Karşı tarafa gelen mesajda da küçük etiket "IBAN/telefon içeriyor, dikkatli ol" (öneri; mesaj içeriği taranır, rutin okuma yok: Hukuk 6.3 TEYİT).
Doğrulanmamış kullanıcı yazma alanında S1'e yönlenir. Engellenen kullanıcıya bildirim gitmez.
Erişilebilirlik: yeni mesaj canlı bölge olarak okunur; çipler odaklanabilir; metin boyutu sistemle büyür, balonlar taşmaz.

## 8. Buluşma ve güvenlik (F5)
**S13 Buluşma öner (alt sayfa, sohbet üzerinde):**
1. Gün/saat: bugün/yarın hızlı çipleri + saat seçici; gündüz saatleri öne çıkarılır (gece 20:00 sonrası seçilirse yumuşak uyarı "Gündüz buluşmak daha güvenli olur").
2. Nokta: kürasyonlu liste (AVM, metro çıkışı, kamu binası önü vb.), iki tarafın ilçesine yakınlık sırası, harita önizlemesi; etiket "Önerilen buluşma noktası" (garanti ifadesi YOK). Liste içeriği/ortaklık: ONAY GEREKİR değil ise ürün+hukuk; ticari ortaklık varsa kurucu onayı gerekir.
3. Alt: [Teklifi gönder]. Not: "Tam adresini paylaşman gerekmez."
Sohbette teklif kartı: saat, nokta, [Kabul et] [Başka saat öner] [Reddet]. Kabulde kart "Buluşma ayarlandı" olur, iki tarafa hatırlatma bildirimi (buluşmadan önce; süre ürün kararı).
**Güvenlik ipuçları kartı (kabulde ve buluşma günü bildirimiyle gösterilir):** kalabalık, aydınlık, kamuya açık yer; gündüz; ev adresi paylaşma; yanında biriyle git; ürünü ve güvenlik etiketini teslimde kontrol et; ödeme buluşmada. Altında [Sorun var, şikâyet et]. Kart tek ekran, madde başına ikon+kısa cümle, "Anladım" butonu.
Rozet: buluşma kartında "Önerilen nokta" rozeti; "Doğrulanmış" kelimesi yalnız telefon doğrulaması için.
MVP dışı: canlı konum / "buluşmaya gidiyorum" paylaşımı (mvp.md bölüm 5).

## 9. Teslim onayı ve puanlama (F6, F7)
**S14 Teslim onayı:** buluşma saatinden sonra push + sohbette kart: "Teslim edildi mi?" iki büyük buton: [Evet, teslim edildi] [Buluşma olmadı]. Tek taraf onayladıysa durum satırı "Karşı tarafın onayı bekleniyor"; 48 saat sonra hatırlatma. İki onayda ilan "Verildi" olur. "Buluşma olmadı": neden çipleri (gelmedi, vazgeçti, ürün uygun değildi, güvensiz hissettim) -> ilan yeniden aktif; "güvensiz hissettim" seçilirse şikâyet sayfası önerilir.
**S15 Puanlama (teslim sonrası):** 5 büyük yıldız (≥48 dp, yıldıza ek sayı etiketi), etiketler (Zamanında geldi, Ürün tarife uygun, Nazikti), [Gönder]; atlanabilir. Metin: "Puanlar ikiniz de verince veya 7 gün sonra görünür." 
**S16 Profil:** ad, ilçe, "Telefonu doğrulandı", ortalama + işlem sayısı; az işlemde "Yeni üye" rozeti (eşik pilotta); aktif ilanlar; sekme Aldıklarım/Sattıklarım; ayarlar: bildirimler, konum izni, hesabı ve verileri sil (KVKK/mağaza gereği), engellenenler.

## 10. Şikâyet ve engelleme (F8) - S17
Girişler: ilan menüsü, sohbet menüsü, profil menüsü, teslim sonrası. Alt sayfa: nesne (ilan/kullanıcı) + kategori seçimi tek dokunuş: Yasaklı/güvensiz ürün, Dolandırıcılık (IBAN/ön ödeme), Uygunsuz foto (çocuk görüntüsü dahil), Taciz, Sahte ilan, Diğer. İsteğe bağlı not. [Gönder] + [Ayrıca engelle] anahtarı. Sonuç: "Bildirimin alındı. Teşekkürler." (süre sözü verilmez; 24 saat SLA iç hedef, kullanıcıya taahhüt yazılmaz).
Yasaklı ürün uyarısı: ilan verirken S9'da (bölüm 6), arama boş sonucunda gerekmez.

## 11. F1-F9 kapsam eşlemesi
| Özellik | Ekran/akış |
|---|---|
| F1 | S1-S3, S16 |
| F2 | S8-S10, taslak kartı |
| F3 | S4-S7 |
| F4 | S11-S12, IBAN/telefon uyarısı |
| F5 | S13, teklif kartı, ipuçları kartı |
| F6 | S14 |
| F7 | S15, S16 |
| F8 | S17, S7 menüsü, S9 yasaklı uyarısı, geri çağırma engeli |
| F9 (P2) | S18 Favoriler, S7 kalp ikonu; bildirim: fiyat düştü / verildi |

## 12. Güvenlik uyarısı yerleşim özeti
| Nokta | Uyarı | Biçim |
|---|---|---|
| S3 | Konum yalnız uygulama açıkken, adres paylaşılmaz | Bilgi kartı |
| S9 | Yasaklı ürünler, riskli kategori beyanları | Satır içi, koşullu |
| S8 | Çocuk yüzü görünmesin | Yönlendirme metni |
| S7 | Ödeme buluşmada, ön ödeme/IBAN tuzağı | Kalıcı şerit |
| S12 | Numara paylaşma zorunlu değil; IBAN/telefon algılama | Kart + satır içi |
| S13 | Gündüz öner, tam adres gerekmez | Yumuşak uyarı |
| Kabul sonrası | Güvenlik ipuçları | Tam ekran kart + bildirim |
| S14 | Güvensiz hissettim -> şikâyet | Seçenek |

## 13. Genel erişilebilirlik (WCAG 2.2 AA hedefi)
- Metin kontrastı ≥4,5:1; bilgi yalnız renkle verilmez (durum etiketi metinli).
- Dinamik yazı tipi (sistem ayarı %200'e kadar) bozulmadan; sabit alt çubuklar uzayabilir.
- Her ikon butonun metin etiketi (ekran okuyucu); odak sırası görsel sırayla aynı.
- Hareketi azalt ayarına saygı; animasyon kısa. Haritaya alternatif liste.
- Tek parmak alternatifi: sürükle-bırak/pinç zorunlu değil.
- Uyarı metinleri 6. sınıf okuma düzeyinde, kısa; Türkçe karakter ve sayı biçimi (1.250 TL).

## 14. Açık noktalar ve varsayımlar
- Kategori listesi (A3) Ürün ile netleşecek; yasaklı kategoriler Hukuk listesine göre.
- Buluşma noktası listesi kaynağı ve ortaklık varsa onay: ONAY GEREKİR (ticari/imza gerekiyorsa).
- Yüz bulanıklaştırma, SMS servisi gibi ücretli servisler: ONAY GEREKİR. Mağaza yayını: ONAY GEREKİR.
- Varsayım: girişsiz gezinme kabul edilebilir; pilot testiyle doğrulanacak. Kullanılabilirlik testi (5 anne, tek el, bebek kucakta) önerilir, henüz yapılmadı.
- Marka rengi/logo/isim kurucu onayına bağlı.
