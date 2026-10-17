# Boş Durum, Hata ve Yükleniyor Ekranları (v0.1)
Sahip: Selin (Tasarım) | Tarih: 2026-10-17 | Durum: ÖNERİ. Girdi: akislar.md, moderasyon.md, mevcut app/src ekranları.

## 1. Ortak ilkeler
- Her boş/hata durumunda: 1 kısa başlık, 1 cümle açıklama, TEK ana buton (alt üçte birde). Suçlayıcı dil yok ("Bir şeyler ters gitti" değil, ne olduğu + ne yapılacağı).
- Ton: sıcak, kısa, "sen" dili. Ünlem en fazla 1, emoji yok (marka.md ile uyumlu; ikon çizim).
- Hata metni teknik detay içermez; ayrıntı (kod) küçük gri satırda "Hata kodu: …" olarak destek için saklanır.
- Yükleniyor: 300 ms altında gösterge yok (titreme olmasın); sonra iskelet (skeleton). Spinner yalnız buton içi işlemde.
- Erişilebilirlik: durum değişimi ekran okuyucuya canlı bölge ile bildirilir ("Yükleniyor", "Yüklendi, 12 ilan"). Hareket azaltma ayarında iskelet animasyonu durur.
- Yeniden dene butonu her ağ hatasında vardır; başarısız form verisi KAYBOLMAZ (özellikle ilan taslağı).

## 2. Ekran bazında

### Keşfet (S4)
| Durum | Başlık | Açıklama | Buton |
|---|---|---|---|
| Yükleniyor | (iskelet: 4 ilan kartı) | - | - |
| Sonuç yok (filtresiz) | Yakınında henüz ilan yok | İlk ilanı sen ver, yakındakiler seni bulsun. | [İlan ver] |
| Filtreyle sonuç yok | Bu filtreyle ilan bulunamadı | Mesafeyi genişletmeyi veya filtreyi azaltmayı dene. | [Mesafeyi genişlet] ikincil: [Filtreyi temizle] |
| Arama sonucu yok | "…" için sonuç yok | Yazımı kontrol et ya da kategoriye göz at. | [Kategorilere bak] |
| Ağ hatası | Bağlanamadık | İnternet bağlantını kontrol edip tekrar dene. | [Tekrar dene] |
| Konum izni yok | Yakınındakileri göstermek için ilçeni seç | Tam konumunu istemiyoruz; ilçe yeterli. | [İlçe seç] ikincil: [Konum izni ver] |
Not: pilot dışı ilçe seçilirse: "Bebelika şimdilik yalnız İstanbul'da. Sıraya yazıl" butonu vaat gibi okunur, bu yüzden yalnız "Şimdilik İstanbul'dayız" bilgisi + [İlçe değiştir]. (Bekleme listesi kurucu/Kerem kararı.)

### İlan detay (S7)
- Yükleniyor: foto alanı + 3 satır iskelet.
- İlan bulunamadı/silindi: "Bu ilan artık yok" / "Satıcı kaldırmış ya da ilan verilmiş olabilir." [Keşfet'e dön].
- İlan "verildi": üstte bant "Bu ürün teslim edildi"; mesaj butonu pasif; [Benzer ilanlara bak].
- Moderasyonla gizlenmiş: kullanıcıya sebep gösterilmez: "Bu ilan şu an görüntülenemiyor." (moderasyon.md; kişi/şikâyetçi bilgisi verilmez.)
- Satıcı engellenmiş ise: ilan listede görünmez; doğrudan bağlantıyla gelinirse "Bu ilan görüntülenemiyor."

### İlan ver (S8-S10)
- Foto izni reddedildi: "Fotoğraf için izin gerekiyor" / "Ayarlardan Bebelika'ya fotoğraf izni verebilirsin." [Ayarları aç] ikincil [Kameradan çek].
- Foto yükleme hatası: fotoğraf kartında kırmızı çerçeve + "Yüklenemedi" + [Tekrar dene]; diğer fotolar etkilenmez.
- Yayın hatası (ağ): "İlanın kaydedilemedi, taslağın duruyor." [Tekrar dene]. (Taslak otomatik kayıt kodda henüz yok: §14a. Kod gelene kadar form state'i korunmalı.)
- Doğrulanmamış e-posta: "İlan vermek için e-postanı doğrula" / [E-postayı doğrula] (S2'ye gider).
- Hız sınırı (yeni hesap ilk 24 saat ≤3 ilan): "Bugünlük ilan sınırına ulaştın" / "Yeni hesaplarda günde 3 ilan sınırı var, yarın devam edebilirsin." [Tamam].
- Askıdaki hesap: s19-s20.md'deki karar bildirimi; bu sayfa metin üretmez.
- Başarılı yayın: "İlanın yayında" / [İlanımı gör] ikincil [Bir tane daha ver].

### Mesajlar (S11) ve Sohbet (S12)
- Liste boş: "Henüz mesajın yok" / "Bir ilana yazdığında sohbetin burada görünür." [Keşfet'e git].
- Süzgeç boş ("Satıyorum"): "Henüz ilanına yazan olmadı" / "İlanının fotoğraflarını ve açıklamasını gözden geçirmek yardımcı olabilir." [İlanlarımı gör].
- Sohbet yükleniyor: iskelet balonlar. Mesaj gönderilemedi: balonda "Gönderilemedi" + [Tekrar dene]; metin silinmez.
- Hız sınırı (20 mesaj/dk): "Çok hızlı yazıyorsun, biraz bekle." 10 sn gri kalan süre; yazma alanı korunur.
- Karşı taraf engelli / hesap askıda: yazma alanı yerine gri bilgi: "Bu sohbete mesaj gönderilemiyor." (neden belirtilmez; moderasyon.md §9).
- Çevrimdışı: üst bant "Bağlantı yok, mesajların bağlanınca gönderilir" yalnız kuyruk özelliği varsa; yoksa "Bağlantı yok" ve gönder pasif. (Kodda kuyruk yok: ikinci metin.)

### Profil (S16)
- Kendi profili, ilan yok: "Henüz ilanın yok" / "Büyüyen bebeğin eşyaları başka bir aileye lazım olabilir." [İlan ver].
- Başkasının profili, puan yok: "Henüz puan yok" (yeni üye rozeti ile). Puan 0/5 gibi gösterilmez.
- Engellenen kullanıcılar listesi boş: "Kimseyi engellemedin."

### Genel hatalar
| Durum | Metin | Buton |
|---|---|---|
| Ağ yok (tam ekran) | "İnternet yok" / "Bağlantını kontrol edip tekrar dene." | [Tekrar dene] |
| Sunucu hatası | "Bir sorun oluştu" / "Biz de bakıyoruz. Biraz sonra tekrar dene." + küçük "Hata kodu: …" | [Tekrar dene] |
| Oturum süresi doldu | "Tekrar giriş yap" / "Güvenliğin için oturumun kapandı." | [Giriş yap] |
| Yetkisiz (RLS reddi) | "Bu işlem için yetkin yok." | [Geri dön] |
| Uygulama güncellemesi gerekli | "Yeni sürüm var" / "Devam etmek için uygulamayı güncelle." | [Mağazaya git] (yalnız mağaza yayınından sonra) |
| Demo modu | Üst bant "Demo verisi: ilanlar kurgudur" (demo-veri.md §4) | - |

## 3. Yükleniyor desenleri
- İskelet kart: foto kutusu (kare), 2 metin çubuğu, fiyat çubuğu. Renk: zemin tonu + bir ton koyu, kontrast düşük ama dekoratif (bilgi taşımaz).
- Süre: liste 300 ms sonra iskelet; 10 sn'yi geçerse "Biraz uzun sürüyor" + [Tekrar dene].
- Pull-to-refresh yerine alt sabit çubukta küçük [Yenile] da bulunmalı (tek el, erişilebilirlik).
- Foto yükleme: ilerleme çemberi + yüzde (ekran okuyucuya %25 adımlarla).

## 4. Kod ile ilişki (Ece için)
Mevcut ekranlar ham `Text` ile hata gösteriyor olabilir. Önerilen: tek `StateView` bileşeni (props: tür=boş|hata|yükleniyor, başlık, açıklama, eylem). Böylece §2'deki metinler tek yerden yönetilir. Karar Ece'nindir; kod okunmadı, yalnız ekran akışları bilindiği için bu bir öneridir.

## 5. Açık noktalar
- Pilot dışı ilçe için bekleme listesi: Kerem/kurucu.
- "Hata kodu" için ortak bir kod listesi yok: Ece belirler.
- Tüm metinler taslak; Pazarlama (Can) ton kontrolü yapabilir.
