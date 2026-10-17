# Mağaza Uyumu, Veri Formları ve Saklama-İmha Politikası (Taslak)

Hazırlayan: Av. Murat | Tarih: 2026-10-17 | Durum: TASLAK
> UYARI: Hukuki görüş taslağıdır. Yayın öncesi dış avukat incelemesi (ONAY-004) gerekir. "(TEYİT)" = teyit gerekli.
> ONAY GEREKİR (taahhüt): Mağaza veri formları ve gizlilik beyanları kurucunun geliştirici hesabından, kurucu adına gönderilir (👤 Senin yapman gereken). Saklama-imha politikası yayını ve VERBİS kararı kurucu + avukat onayındadır.
> Kaynaklar (bu tur arandı): Apple App Review Guidelines 1.2 (developer.apple.com/app-store/review/guidelines/), Google Play UGC politikası (support.google.com/googleplay/android-developer/answer/9876937), Google Play hesap silme gereksinimi (support.google.com/googleplay/android-developer/answer/13327111), KVKK Silme/Yok Etme/Anonim Hale Getirme Yönetmeliği (Resmî Gazete 28.10.2017; ikincil kaynaklar, mevzuat.gov.tr'den birincil metin doğrulanmadı). Politika sayfaları sık değişir; gönderim öncesi güncel hali tekrar kontrol edilmeli.

## 1. UGC mağaza uyumu: bulgu ve uygulama durumu
| Mağaza gereği | Kaynak | Bebelika durumu | Eksik / sahip |
|---|---|---|---|
| Uygunsuz içeriği filtreleme yöntemi | Apple 1.2 | Anahtar kelime yumuşak uyarı + yasaklı kategori engeli planlı | Ece: pilotta asgari kelime filtresi; auto-hide (migration 0004) var |
| İçerik şikâyet mekanizması, zamanında yanıt | Apple 1.2, Play UGC | ReportScreen + 0004 var (derleme doğrulanmadı) | SLA iç hedef; Apple forumunda "24 saat" geçen bir red alıntısı var, resmi metinde YOK; yine de C1/C2 için 24 saat içinde aksiyon mümkün olmalı |
| Kötüye kullanan kullanıcıyı engelleme | Apple 1.2, Play UGC | blocks tablosu var | Ece |
| Yayımlanmış iletişim bilgisi | Apple 1.2 | Destek e-postası YOK (alan adı bekliyor) | 👤 Kurucu: alan adı + e-posta; mağaza başvurusundan ÖNCE şart |
| Kullanım koşulu/EULA'da kabul, uygunsuz içeriğe tolerans yok | Apple 1.2 (uygulama içi kabul), Play UGC | Sözleşme + Topluluk Kuralları taslakta (topluluk-kurallari.md) | Kayıt ekranında kabul kutusu (Ece/Selin) |
| Raporlama/engel ekranda kolay bulunur ve etiketli | Play UGC | S7 detayda Şikâyet var | Selin teyit |
| Sürekli UGC moderasyonu | Play UGC | moderasyon.md; nöbet insan bağımlı | İK: destek-plani.md; gece/hafta sonu açığı bilinen risk |
| Hesap silme: uygulama içi + web bağlantısı | Play (hesap silme politikası) ve Apple (hesap oluşturan uygulamada uygulama içi silme zorunluluğu, bilgi: Apple 5.1.1(v), bu turda doğrulanmadı TEYİT) | Kodda YOK (görev listesinde) | Ece: uygulama içi silme akışı; web silme talebi sayfası/formu (alan adı gerekir) |
| Saklama pratiklerinin açıklanması (güvenlik, dolandırıcılık, yasal sebeple tutulan veri) | Play hesap silme | §3 taslak | Gizlilik politikasına eklenecek |
| 17+/yaş derecelendirme anketi | Apple/Google | UGC, mesajlaşma ve kullanıcılar arası iletişim var, soruları doğru işaretle | Kurucu formu doldurur (👤); Can/Murat cevap taslağı §2 |

Yorum: Silme, destek e-postası ve moderasyon süreci mağaza incelemesinde en sık takılan noktalar (kullandığım kaynaklar kılavuz metni; ret deneyimi ampirik değil, TEYİT).

## 2. Mağaza veri formları: cevap taslağı
Gerçek cevaplar kurucu tarafından, gerçek koda ve seçilen servislere göre işaretlenir. Aşağıda KOD VE ŞEMA doğrulaması (Ece) beklenen taslak:

### 2.1 Google Play Veri Güvenliği (Data safety)
| Veri türü | Toplanıyor mu | Paylaşılıyor mu (3. taraf)* | Amaç | Opsiyonel mi | Not |
|---|---|---|---|---|---|
| E-posta adresi | Evet | Hayır (hizmet sağlayıcı = işleyen) | Hesap yönetimi | Hayır | Apple/Google ile girişte alınabilir |
| Ad / takma ad | Evet | Hayır | Hesap, uygulama işlevi | Hayır | |
| Yaklaşık konum (ilçe) | Evet | Hayır | Uygulama işlevi | Evet (ilçe seçerek konumsuz) | |
| Hassas (GPS) konum | Rıza verilirse, anlık; kalıcı saklanmaz | Hayır | Yakındaki ilanlar | Evet | Kesin konum saklanmıyorsa "toplanıyor" sayılıp sayılmayacağı TEYİT; Google "toplama" kapsamını işleme anında alır |
| Fotoğraflar | Evet | Hayır | Uygulama işlevi (ilan) | Hayır (ilan için) | Çocuk görüntüsü istenmez |
| Mesajlar (uygulama içi) | Evet | Hayır | Uygulama işlevi, güvenlik | Hayır | |
| Kullanıcı kimliği (ID) | Evet | Hayır | İşlev, güvenlik | Hayır | |
| Cihaz/diğer ID, çökme günlükleri | Analitik/çökme servisi seçilince | Servise bağlı | Analitik | | Servis yok = "hayır". Ücretli/yeni servis ONAY GEREKİR |
| Ödeme bilgisi | Hayır | | | | Pilotta ödeme yok |
*Hizmet sağlayıcıya (barındırma) aktarım Google formunda genellikle "paylaşım" sayılmaz; kapsam dışı koşullar TEYİT.
Ek: Veriler aktarımda şifrelenir (HTTPS/Supabase) → evet (CTO teyit). Silme talebi: uygulama içi + web bağlantısı → eksik (Ece). Aile politikası: çocuklara yönelik değil, hedef kitle yetişkin ebeveynler (18+); "Çocuklara yönelik" işaretlenmez.

### 2.2 Apple Uygulama Gizliliği ("Privacy Nutrition Labels")
Aynı envanter: İletişim bilgisi (e-posta, ad), Kullanıcı içeriği (fotoğraf, mesaj, ilan), Konum (kaba; kesin rıza varsa), Tanımlayıcılar (kullanıcı ID). "Takip" (tracking) YOK (reklam/3. taraf izleme yok; kararlaşmadan bu değişmez). Bağlı olduğu kimlikle (linked to user) işaretlenir; hizmet amacı "App Functionality". Gizlilik politikası URL'si zorunlu: yayınlanan sayfa gerekir (alan adı/yayın yeri kurucu; Vercel statik sayfa olabilir).
Apple "Sign in with Apple": üçüncü taraf girişi (Google) sunuluyorsa eşdeğer seçenek olarak Sign in with Apple gerekir (Apple 4.8, bu turda doğrulanmadı TEYİT; mimari karar Ece).

### 2.3 Yaş derecelendirme anketi (taslak cevaplar)
Kullanıcı üretimli içerik: Evet (ilan, mesaj). Kullanıcılar arası mesajlaşma: Evet. Kumar: Hayır. Cinsel/şiddet içerik: Hayır (moderasyon var). Satın alma/ödeme: Hayır (uygulama içi). Konum paylaşımı: yaklaşık, kullanıcıya gösterilen ilçe. Sonuç derecesi mağazanın hesaplamasına bağlı (Apple'da UGC serbest mesajlaşma yaşı yükseltebilir, TEYİT).

## 3. Saklama ve İmha Politikası (taslak)
> Dayanak: KVKK m.7, Silme/Yok Etme/Anonim Hale Getirme Yönetmeliği. Periyodik imha aralığı yönetmelikte en fazla 6 ay olarak biliniyor ama birincil metinden bu turda doğrulanmadı (TEYİT). Politikanın yazılı hazırlanması ve VERBİS'e kayıtlı veri sorumlularında zorunluluğu şirket statüsüne bağlıdır (VERBİS muafiyeti ve eşiği TEYİT; avukat paketi soru 13). Pratikte tutulması önerilir.

### 3.1 Saklama süreleri (öneri; sözleşme-taslak Bölüm B tablosuyla uyumlu)
| Veri | Süre | Sonra | Gerekçe |
|---|---|---|---|
| Hesap bilgisi (e-posta, takma ad) | Hesap açıkken; silme talebinde 30 gün içinde sil | Sil/anonimleştir | Sözleşmenin ifası; KVKK m.7 |
| Aktif ilan ve fotoğraflar | Yayında kaldıkları süre | İlan kapanınca 30 gün sonra sil | İşlevsel; itiraz payı |
| Sohbet mesajları | Sohbet süresince; hesap/ilan kapanışı + 1 yıl (şikâyetli olanlar kayıt süresince) | Sil | Dolandırıcılık/uyuşmazlık, meşru menfaat (TEYİT) |
| Şikâyet, karar, itiraz kaydı | 2 yıl (moderasyon.md §6; sözleşme-taslak "3 yıl" diyor → AVUKAT netleştirsin, çelişki var) | Sil/anonimleştir | Hakkın tesisi/ispat |
| Kaldırılan ilan anlık görüntüsü, ilgili mesaj alıntısı | 1 yıl | Sil | Aynı |
| C1 (çocuk görüntüsü) kanıtı | Yetkili makam talebi için Hukuk kararıyla daha uzun | Hukuk kararıyla | Savcılık/talep |
| Banlı hesap göstergeleri (e-posta hash, cihaz hash) | Ban süresince, tekrar kaydı engellemek için (TEYİT: KVKK uygunluğu, avukat paketi) | İtiraz kabulünde sil | Meşru menfaat |
| Erişim logları (5651 anlamında yer sağlayıcı yükümlülüğü varsa) | Mevzuat süresi (genelde 6 ay-2 yıl aralığı bilinir, TEYİT) | Sil | Hukuki yükümlülük |
| Rıza kaydı (konum rızası, sözleşme kabulü; zaman, sürüm) | Hesap + 2 yıl (TEYİT) | Sil | İspat |
| Kesin GPS konumu | Kalıcı saklanmaz; yalnız anlık sorgu | Yok | Minimizasyon |

### 3.2 İmha yöntemleri
Silme: veritabanı kaydı ve depolama nesneleri (fotoğraf) silinir; yedeklerde kalan veri yedek döngüsünde (örn. [30] gün) kaybolur (Ece: Supabase yedek süresi). Anonimleştirme: kullanıcı kimliğiyle ilişki kesilir (moderasyon istatistikleri). Silme/imha işlemleri kayda alınır (yönetmelik gereği imha kaydı, TEYİT). İmha periyodu: pilotta 3 ayda bir periyodik imha taraması (yönetmeliğin üst sınırının altı), sorumlu: Murat (kontrol), Ece (otomasyon: retention job, moderasyon.md §7).

### 3.3 Hesap silme akışı (hukuki gereklilikler; Ece/Selin için)
1. Ayarlar > Hesabı sil; kullanıcıya silinecek ve yasal sebeple tutulacak veri kısaca anlatılır (güvenlik kaydı, şikâyet kaydı).
2. Aktif ilanlar kapatılır; sohbetler karşı tarafta "Bu kullanıcı hesabını sildi" olarak kalır, mesaj geçmişi karşı tarafta (kendi verisi olarak) kalabilir (TEYİT).
3. Askıdaki/banlı hesap silme talep ederse: yaptırım kaydı süresince tutulur, hesap erişimi kapatılır; "silme ile ban kaçırma" engellenir (meşru menfaat).
4. Web üzerinden silme talebi: e-posta ile oturum açmadan talep formu (Play gereği); kimlik doğrulama (hesap e-postasına bağlantı).
5. Apple/Google ile girişte token iptali ve ilgili kayıt silme (Ece).

## 4. Aydınlatma tablosu - şema karşılaştırması
Ece henüz çıkarmadı. Hazır olunca sozlesme-taslak Bölüm B tablosu migration 0001-0006 ile satır satır karşılaştırılacak. Murat'ın ön kontrol listesi: users (e-posta, ad, ilçe), listings (konum alanı kesin mi?), messages, reports/blocks/moderation_actions, phone_hash/device_id_hash (kodda var mı?), rıza kaydı tablosu (YOK olabilir), consent versiyonu. Bu karşılaştırma Ece'nin çıktısını bekliyor.

## 5. C1 4 saat SLA teyidi (İK sorusu)
Zeynep'in sorusu (destek-plani.md §6): "C1 için 4 saatlik inceleme iç hedef mi, taahhüt mü?"
**Cevap: İÇ HEDEF, kullanıcıya veya mağazaya taahhüt değildir.** Mağaza ve kullanıcı metinlerinde süre yazılmaz ("en kısa sürede", "hızla"). Gerekçe: nöbet insan bağımlı; gece/hafta sonu karşılanamaz, taahhüt ihlali sorumluluk doğurur. Karşılanan kısım: C1/C2'de otomatik gizleme (0004) hemen devreye girer, bu asıl koruma. İnceleme için "mümkün olan en kısa sürede, hedef 4 saat (iç)" olarak destek-plani.md'ye işlenebilir. Not: C1 ve kişisel verinin yetkili makama bildirimi yalnızca Hukuk + kurucu onayıyla.

## 6. Açık konular
- Avukat: VERBİS/saklama-imha politikası zorunluluğu; log saklama süreleri; ban hash KVKK; sözleşme-taslak 3 yıl ile 2 yıl çelişkisi; Apple 4.8/5.1.1(v) güncel metin.
- 👤 Kurucu: alan adı + destek e-postası, geliştirici hesapları, mağaza formları, avukat seçimi, gizlilik politikası yayını.
- Ece: hesap silme + konum rıza ekranı; şema-aydınlatma karşılaştırması; retention job.
