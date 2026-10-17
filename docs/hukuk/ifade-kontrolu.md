# İfade Kontrolü: Buluşma İpuçları, Mağaza Metni, SSS

Hazırlayan: Av. Murat | Tarih: 2026-10-17 | Durum: TASLAK görüş
> UYARI: Hukuki görüş taslağıdır. Yayın öncesi dış avukat incelemesi (ONAY-004) gerekir. "(TEYİT)" = teyit gerekli.
> Ölçüt: garanti/üstlenme çağrışımı yok; var olmayan özellik vaadi yok; yasaklı ürün kararlarıyla (biberon, pompa) uyum; "yasa gereği" yok; süre taahhüdü yok.
> Kısaltma: ✅ olduğu gibi · ✏️ şu şekilde değiştir · ⛔ yayınlanmaz/çıkar · ❓ avukat.

## 1. Buluşma ipuçları (docs/tasarim/bulusma-ipuclari.md) — @Selin
| Yer | Karar | Önerim |
|---|---|---|
| §1 dil ilkesi ve alt satır "Bebelika buluşmaları takip etmez; bu öneriler genel tavsiyedir." | ✅ | Çok iyi. Kartta kalsın. |
| §2 madde 1-5, 7-8 | ✅ | Hepsi öneri dili. Madde 8 "İçine sinmiyorsa iptal et" ✅. |
| §2 madde 6 "güvenlik etiketi var mı" | ✅ | |
| §5 "Gündüz buluşmak **daha güvenli** olur." | ✏️ | "Mümkünse gündüz buluşmanı öneririz." ("daha güvenli" karşılaştırmalı güvenlik iddiasıdır, kaçın.) |
| §6 "Acil durumda 112'yi ara." bilgi satırı | ✅ (koşullu) | Düz bilgi cümlesi olarak kalabilir. Buton, kısayol, konum paylaşımı, "uygulama sizi koruyacak" ifadesi OLMAZ (güvenlik vaadi yaratır). Cümle: "Acil bir durumda önce 112'yi ara. Bebelika acil yardım hizmeti değildir." |
| §3 oto koltuğu satırı "şüphen varsa alma" | ✏️ | "Oto koltuğunda üretim tarihini, etiketi ve satıcının kazasız beyanını teslimde kontrol et. Emin değilsen almayabilirsin." (alıcıya yön gösterme yerine seçenek) |
| §3 tablo "Giyim: çocuk için uygun olmayabilir" | ✅ | |
| §4 "Alıcı ısrarcı davranırsa satmak zorunda değilsin" | ✅ | |
| §4 "Buluşma olmadı seçeneği, ilan yeniden aktif olur (F6)" | ❓ | Kodda yok; "Yakında" etiketi olmadan gösterilmesin (Selin kararıyla uyumlu). |
| §1 "Buluşma kabul edilince tam kart" | ✏️ | Bebelika'da yapısal buluşma kaydı yok (sohbet-notu); "buluşma kabul" ifadesi yerine "Buluşmaya gitmeden önce" (menüden erişim). Kodda yoksa tetikleyici de yok. |
| "Önerilen buluşma noktası" | ✅ | "Güvenli buluşma noktası" YASAK, bu ifade doğru. Nokta listesi içerik/yetki Kerem+Hukuk; tek tek yer adı verilecekse "öneri" ve yer sahibine atıf yok (ticari ortaklık = kurucu onayı). |
Sorumluluk: yeni ibare "Bebelika buluşmaları takip etmez..." tüm ipucu ekranlarında sabit olsun.

## 2. Mağaza metni (docs/pazarlama/magaza-metni.md) — @Can
| Ifade | Karar | Önerim |
|---|---|---|
| Ana slogan "Bebeğinin büyüdüğü eşyalar, yakınındaki bir anneye." | ✅ | Garanti yok. |
| "Yakınındaki anneyle, elden, kargosuz" | ✅ | |
| Google kısa açıklama "…önerilen buluşma noktaları" | ✏️ | Buluşma noktası önerisi kodda yoksa çıkar: "Bebek eşyalarını yakınındaki anneyle elden al-sat. Kargo yok." |
| Tam metin: "Buluşma saati ve önerilen buluşma noktasını birlikte belirleyin." | ❓ ✏️ | Özellik yok (demo "Yakında"). Yayın sürümünde özellik varsa kalır; yoksa çıkar. Mağaza metnine kodda olmayan özellik yazmak mağaza reddi ve tüketiciyi yanıltma riski. |
| "Teslimden sonra iki taraf 'teslim edildi' diyerek…puan" | ❓ | Aynı kural. |
| Başlık "Güvenliğiniz için" | ✏️ | "Güvenlik ipuçları" (başlık da öneri dili olsun). |
| "Telefon numaranızı paylaşmanız zorunlu değildir." | ✅ | |
| "Uygulama buluşmaları yönetmez ve ürünlerin güvenliğini garanti etmez." | ✅ | Önemli satır, çıkarma. |
| "Ödeme, uygulama dışında ve buluşmada yapılır." | ✅ | |
| "Bebelika şu an İstanbul'da pilot olarak açıktır. Üyelik 18 yaş ve üzeri içindir." | ✅ | Yaş beyanı: 18+ doğru; mağaza yaş derecelendirmesi ayrı (magaza-ve-saklama.md §2.3). |
| "Konumunuz ilçe düzeyinde kullanılır; tam adresiniz ilanda gösterilmez." | ✅ | Konum rıza ekranı çıkmadan "ilçe düzeyinde" iddiası kodla doğrulanmalı (Ece). Mock demoda zaten sabit konum. |
| "Ücretsiz" kullanımı | ✏️ | "Şu an ilan vermek ve mesajlaşmak ücretsizdir." ("Şimdilik" + ileride değişiklik önceden duyurulur ifadesi SSS'de.) Mağaza tarafında fiyat bilgisi uygulama içi satın almayla karıştırılmasın; ücretli özellik gelirse mağaza metni ve fiyat gösterimi yenilenir (one-cikarma.md). |
| Destek: [e-posta] | ⛔ | Adres yokken yayın başvurusu yapılmaz (Apple 1.2 yayımlanmış iletişim bilgisi). |
| Ekran görüntüsü kartları (5 kart) | ✏️ | Kart 4 "Önerilen buluşma noktası", kart 5 "iki taraf onayladığında tamam": kodda olmayan ekranlar mağaza görseline KONMAZ. Demo bandı ("Demo verisi") görünür kalmalı, görsellerde gerçek kişi/çocuk yok. |
| "Bebek ürünleri" genellemesi | ✅ | Yasaklı kategoriler vaat edilmiyor. |
| Yasaklı listede "biberon, pompa" | ✏️ | Mağaza metni listede biberon ve pompayı da saymasın (liste vermiyor, iyi); SSS S9'a eklenecek. |

## 3. SSS (docs/pazarlama/sss.md) — @Can
| Soru | Karar | Önerim / son hali |
|---|---|---|
| Güven mesajları: "Şikâyet kimseye açıklanmaz." | ✏️ | "Şikâyet ettiğin kişiye kim olduğun söylenmez." (mutlak "kimseye" yetkili makam ve yargı taleplerinde yanlış olur.) |
| Güven mesajları: "Askılı hesap sistem mesajı" | ✅ | Murat'ın metni, değiştirme. |
| S1, S2, S4 | ✅ | S2: "Diğer şehirler yakında değil" → "Şu an yalnız İstanbul'da." (gelecek vaadi yok.) |
| S3 Ücretli mi? | ✏️ | "Şu an ilan vermek ve mesajlaşmak ücretsizdir. İleride isteğe bağlı ücretli özellikler eklenirse önceden duyururuz; mevcut ilanların ücretsiz kalıp kalmayacağı o zaman açıklanır." Son cümlesiz de olur; ücret kararı (ONAY-002 a) ile uyumlu. Yükümlülük (TKHK/6563 ön bilgilendirme) ücretli özellik çıkınca. Murat: ONAY. |
| S5 Ödeme | ✅ (+) | "Bebelika bu işlemde taraf değildir" eklenebilir: "Bebelika alıcı ve satıcı arasındaki satışın tarafı değildir." (aracı hizmet sağlayıcı, TEYİT) |
| S6 "Adresim görünür mü?" | ✅ | "Tam adresiniz hiçbir kullanıcıya gösterilmez" doğru olduğu sürece (ilan konumu ilçe; Ece teyit). |
| S7 Buluşma yeri | ⛔ | Özellik yok. Yayın sürümünde olunca yeniden yazılır. "Önerilen noktalar… seçilir" cümlesi seçim sorumluluğu üstlenir gibi okunur. Geçici: "Buluşma yerini sohbette birlikte belirlersiniz. Kalabalık, kamuya açık bir yer öneririz." |
| S8 başlığı "Güvenli mi?" | ✏️ | Başlık "Güvenlik için ne öneriyorsunuz?" Yanıt aynen kalsın ("garanti etmez" satırı). 112 satırı: "Acil bir durumda önce 112'yi arayın." ✅ |
| S9 Hangi ürünler? | ✏️ | Yasaklı listeyi tam yaz: mama/ek gıda/süt/vitamin/ilaç/anne sütü, sağlık ürünleri ve sağma pompası, biberon, emzik, diş kaşıyıcı, bebek yuvası ve uyku pozisyoneri, kazaya karışmış oto koltuğu ve kırık/eksik güvenlik ürünleri, geri çağrılan ve sahte ürünler. Oto koltuğu, beşik, araba gibi ürünlerde ek bilgi/beyan istenir. Metin Murat: riskli-urunler/topluluk-kurallari.md m.1 ile birebir aynı olmalı. |
| S10 Telefon | ✏️ | Son cümle ("telefon doğrulama rozeti pilot sonrası eklenebilir") çıkar (özellik vaadi). |
| S11 Şikâyet | ✅ | "Resmi mercilere de başvurabilirsiniz" iyi. |
| S12 İtiraz | ✏️ | 14 gün süresini yazmak OK (kullanıcı lehine, yalnız süre doldu sonrası destek). "Kararı vermeyen bir kişi" ✅. Yanıt süresi yazılmaz. 14 gün avukat teyidi sonrası. |
| S13 Hesap silme | ❓ | Silme akışı kodda yok, yayınlanmaz. Metin: "Ayarlar > Hesabı sil. Güvenlik ve yasal sebeplerle bazı kayıtlar sınırlı süre tutulabilir; ayrıntı Gizlilik Politikası'nda." (magaza-ve-saklama.md §3 ile uyumlu.) |
| S14 KVKK | ✅ | "Aydınlatma Metni ve Gizlilik Politikası" bağlantısıyla; metinler yayınlanmadan bu SSS yok. |
| S15 Konum | ❓ | Rıza ekranı çıkmadan yayınlanmaz (Can doğru işaretlemiş). "Konumunuz yalnızca yakın ilanları göstermek için kullanılır" ✅ rıza metniyle (sozlesme-taslak Bölüm C) uyumlu. |
| S19/S20 için yeni SSS maddeleri | ✏️ | Topluluk kuralları ve karar itirazı için topluluk-kurallari.md §1, §3-4 metni kullan; "kural ihlali" yerine "kurallara aykırı". |

## 4. Genel kurallar (Can ve Selin için kısa liste)
1. "Güvenli", "onaylı", "garantili", "kontrol edilmiş", "doğrulanmış" (telefon rozeti dışında), "yasa gereği": YOK.
2. Kodda olmayan özellik (buluşma önerisi, teslim onayı, puan, push, favori, harita): metne/mağaza görseline "var" diye konmaz; demoda "Yakında".
3. Süre sözü yok (inceleme, itiraz sonucu). "İç hedef" kullanıcıya gösterilmez.
4. Yasaklı ürün listesi her yerde aynı: topluluk-kurallari.md m.1 tek kaynak.
5. Yorum/puan ve fiyat bilgisi: ücret konusunda yanıltıcı olma (TKHK ve reklam mevzuatı, TEYİT).

## 5. C1 SLA teyidi (Zeynep sorusu)
4 saat = İÇ HEDEF, taahhüt değil. Kullanıcıya/mağazaya süre yazılmaz. Ayrıntı: magaza-ve-saklama.md §5.

## 6. ONAY
ONAY GEREKİR (taahhüt): Bu metinler kullanıcıya/mağazaya yönelik taahhüt içerdiğinden yayın öncesi kurucu + dış avukat onayı gerekir (ONAY-004).
