# Güven Odaklı Mesajlar ve Sık Sorulan Sorular (SSS) — v0.1 taslak
Sahip: Can (Pazarlama) | Tarih: 2026-10-17 | Durum: taslak; yayın öncesi Hukuk (Murat) teyidi zorunlu (ONAY-004 dış avukat paketine eklenecek)
Girdi: docs/hukuk/politika.md (§3 yasaklı, §5 elden teslim), docs/hukuk/moderasyon.md (§2 kategoriler, §9 askı), docs/tasarim/akislar.md (güven dili), state/kararlar.md, docs/pazarlama/magaza-metni.md

## 0. Yazım kuralları
- Garanti yok: "güvenli", "kontrol edilmiş", "onaylı" gibi sonuç vaadi kullanılmaz. Dil: "öneri", "ipucu", "önerilen".
- "Doğrulanmış" yalnız telefon rozeti (pilot sonrası) için; MVP'de kullanılmaz. E-posta doğrulaması "e-posta adresiniz doğrulandı" diye anlatılabilir.
- Yanıt süresi vaadi yok. Moderasyon hedefleri iç tercihtir (moderasyon.md §6, TEYİT); dışarıya "en kısa sürede" denir.
- Acil durum: fiziksel tehlike varsa önce 112; uygulama şikâyeti acil yardımın yerini tutmaz. Bu cümle SSS ve güvenlik kartında yer alır.
- Ödeme ve iade: Bebelika ödeme aracılığı yapmaz; ödeme buluşmada ya da taraflar arasında yapılır (A4).
- Bebek güvenliği: yasaklı kategoriler (emzik, biberon emziği, tıbbi cihaz, bebek yuvası/uyku pozisyoneri, kırık ya da eksik parçalı güvenlik ürünü) SSS'de açıkça listelenir; kesin liste Hukuk onayından sonra eklenir.

## 1. Güven mesajları (kısa, ekran ve mağaza için)
| Yer | Mesaj | Not |
|---|---|---|
| Kayıt ekranı | "Hesabınızı e-postanızla ya da Apple/Google ile açın. Üyelik 18 yaş ve üzeri içindir." | politika §5, F1 |
| İlan önizleme (S10) | "Beyanlarınızın doğru olduğunu onaylıyorsunuz." | Hukuk 3.4 onay kutusu |
| İlan detay | "Konum: Kadıköy (profil ilçesi). Tam adres gösterilmez." | akislar S10 ile aynı |
| Sohbet üstü | "Telefon numaranızı paylaşmanız zorunlu değildir." | F4 |
| Buluşma kartı | "Önerilen buluşma noktası. Kalabalık, aydınlık ve kamuya açık bir yer seçin." | "garanti" yok |
| Teslim öncesi | "Ürünü teslimde kontrol edin. Ödeme buluşmada yapılır; Bebelika ödeme aracılığı yapmaz." | politika §5 |
| Teslim onayı (S14) | "Teslim edildi mi? Karşı tarafın onayı ile işlem tamamlanır." | F6 |
| Şikâyet | "Sorunlu bir ilan ya da kullanıcı için şikâyet edin. Şikâyet kimseye açıklanmaz." | moderasyon §9 K7 (kimliği açıklamama) |
| Askılı hesap (K2 sistem mesajı) | "Bu kullanıcıyla görüşmeniz sürdürülemiyor. Planlı bir buluşma varsa iptal sayılmasını öneririz." | Murat'ın nötr metni; değiştirilmez |

## 2. Sık sorulan sorular (SSS taslağı)

**S1. Bebelika nedir?**
Anne-bebek ürünlerinin ikinci el alım satımı için yakınınızdaki kişilerle elden teslim yapılan bir uygulamadır. Kargo yoktur.

**S2. Şu an nerede kullanabilirim?**
Pilot olarak İstanbul'da, başlangıçta Kadıköy ve Ataşehir çevresinde kullanılabilir. Diğer şehirler yakında değildir. (Pilot bölge kararı değişirse güncellenir.)

**S3. Ürün satmak ücretli mi?**
Şimdilik ilan vermek ve mesajlaşmak ücretsizdir. [Kerem ve Murat onayı bekleniyor: "şimdilik" ifadesi ve ücret beyanı; ileride öne çıkarma gibi isteğe bağlı ücretli özellikler gelebilir ve önceden bildirilir.]

**S4. Kargo yapıyor musunuz?**
Hayır. Bebelika yalnızca elden teslimi destekler. Kargo, kurye ve adrese gönderim yoktur.

**S5. Ödemeyi uygulama üzerinden mi yapıyorum?**
Hayır. Uygulama ödeme almaz ya da iade yapmaz. Ödeme buluşmada ya da taraflar arasında yapılır. Uygulama dışında ön ödeme istenmesi bir dolandırıcılık işareti olabilir; bu durumda şikâyet edin.

**S6. Adresim diğer kullanıcılara görünür mü?**
Hayır. İlanlarda yalnızca ilçe ve yaklaşık mesafe görünür. Tam adresiniz hiçbir kullanıcıya gösterilmez.

**S7. Buluşma yerini nasıl seçiyorum?**
Sohbetten "buluşma öner" diyerek saat ve önerilen bir nokta seçebilirsiniz. Karşı taraf kabul eder ya da değiştirir. Önerilen noktalar kalabalık ve kamuya açık yerlerden seçilir; yine de her buluşmanın sorumluluğu buluşmaya katılan taraflardadır.

**S8. Güvenli mi?**
Bebelika, buluşmaların güvenliğini ya da ürünlerin güvenliğini garanti etmez. Sizi korumak için şunları öneririz:
- Buluşmayı gündüz, kalabalık ve aydınlık bir yerde yapın.
- Ev adresinizi paylaşmayın; yanınızda bir yakınınızla gidin.
- Ürünü teslimde kontrol edin.
- Şüphe duyduğunuzda buluşmayı iptal edin; "buluşma olmadı" seçeneğini kullanın.
Acil bir durumda önce 112'yi arayın.

**S9. Bebek ürünlerinde hangi ürünleri satabilirim?**
Bebek giyimi ve oyuncak gibi bebek ürünleri ilan edilebilir. Yasaklı ürünler (emzik, biberon emziği, tıbbi cihaz, bebek yuvası ve uyku pozisyoneri, kırık ya da eksik parçalı güvenlik ürünü, sahte ürün) ilan edilemez. [Kategori listesi ve araba koltuğu gibi güvenlik ürünlerinin kuralı Hukuk teyidinden sonra kesinleşir; bu SSS'de kesin ilan izni verilmez.]

**S10. Neden telefon numaram istenmiyor?**
Mesajlaşma uygulama içinde yapılır; bu, kişisel bilgilerinizi korumaya yardımcı olur. Telefon doğrulama rozeti pilot sonrası eklenebilir; o zamana kadar "doğrulanmış" ifadesi kullanılmaz.

**S11. Bir ilanı ya da kullanıcıyı nasıl bildiririm?**
İlan ya da profil ekranındaki "Şikâyet et" düğmesi ile bildirebilirsiniz. Şikâyetiniz kimseye açıklanmaz. Yasa dışı, tehlikeli ya da dolandırıcılık içeren durumlarda uygulamadan bildirmenin yanında resmi mercilere de başvurabilirsiniz.

**S12. Bir karara itiraz edebilir miyim?**
Evet. Hesabınız ya da ilanınızla ilgili bir karara uygulama içinden itiraz edebilirsiniz. İtiraz, kararı vermeyen bir kişi tarafından incelenir. [İtiraz süresi 14 gün; yanıt süresi TEYİT bekliyor: dışarıya süre vaadi yazılmaz.]

**S13. Hesabımı nasıl silerim?**
Ayarlar > Hesabı ve verileri sil yolunu izleyin. [Silme ve saklama süreleri Murat'ın KVKK teyidiyle netleşecek; bu yanıt yayın öncesi güncellenir.]

**S14. Kişisel verilerim nasıl kullanılıyor?**
Gizlilik politikamızda açıklanır. [Yayın öncesi Murat onayı; KVKK aydınlatma metni ayrıca yayınlanacak.]

**S15. Konumum nasıl kullanılıyor?**
Konumunuz yalnızca yakın ilanları göstermek için kullanılır ve ilçe düzeyinde işlenir. Tam konumunuz başka kullanıcılara gösterilmez. Konum izni istemeden de ilçe seçerek kullanabilirsiniz. [Konum rıza ekranı kodda henüz yok (cto görev listesi); bu cümle ancak o ekran çıktıktan sonra yayınlanır.]

## 3. Yayın öncesi kontrol listesi
- [ ] Murat: tüm güven mesajları ve SSS (S3, S5, S8, S9, S12, S13, S14, S15).
- [ ] Murat: yasaklı ürün listesi ve araba koltuğu kuralı son hâli.
- [ ] Ece: konum rıza ekranı ve silme akışı çıkmadan S13 ve S15 yayınlanmaz.
- [ ] Kerem: S2 (pilot bölge) ve S3 (ücret) ürün kararı.
- [ ] Selin: SSS ekran metinleri (kısa cümle, tek el okunabilir).

## 4. Açık noktalar
1. Hukuk (Murat): "şimdilik ücretsiz" ifadesi ve itiraz süresinin dışarıya yazılması.
2. Kerem: pilot bölge adının SSS'de geçmesi (mağaza bölge ayarıyla uyumlu olmalı).
3. Kurucu: destek e-postası adresi alan adı alındıktan sonra eklenir (S19/S20 kararı; 👤 Senin yapman gereken).
