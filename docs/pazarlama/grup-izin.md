# Kadıköy / Ataşehir Anne Grupları: Liste Şablonu ve İzin Mesajı (v0.1 taslak)
Sahip: Can (Pazarlama) | Tarih: 2026-10-17 | Durum: taslak; liste doldurulmadı (grup bilgisi doğrulanmadı), mesaj Hukuk (Murat) teyidi bekliyor
Girdi: docs/pazarlama/lansman.md (Kanal 1, T-3 hafta görevi), docs/pazarlama/rakip.md §4, docs/pazarlama/sss.md, docs/pazarlama/magaza-metni.md

## 0. Neden bu dosya boş liste içeriyor?
- Grup üye sayıları, kuralları ve yönetici iletişimi web'den doğrulanamadı; Facebook grupları çoğunlukla kapalı ve arama sonuçlarında görünmüyor. Rakamsal veya isim bazlı liste uydurulmadı.
- Liste, grup bulunduğunda aşağıdaki kriterlerle manuel doldurulacak (Can). Kişisel veri toplanmaz: üye isimleri, telefonlar, profil linkleri kaydedilmez; yalnız grup adı ve kanal bilgisi tutulur (lansman.md §4, KVKK minimizasyonu).

## 1. Grup seçim kriterleri
| Kriter | Kabul | Not |
|---|---|---|
| Konum | Kadıköy veya Ataşehir (ilçe adı grup adında ya da açıklamada) | Diğer ilçe paylaşımı yok (pilot V1) |
| Tür | Anne/bebek ikinci el, bebek eşyası alım-satım, mahalle anne grubu | Sadece satış odaklı gruplar değil; hem mahalle hem bebek grupları |
| Aktiflik | Son 30 günde paylaşım ve yorum var (manuel kontrol) | Ölü grup listeye girmez |
| Kural | Reklam/ticari paylaşım yasağı yoksa veya yönetici izniyle mümkünse | Yasağı açıkça yazan grupta yalnız izin sonrası |
| Hedef | 10-15 grup (lansman.md §2 Kanal 1) | Hafta T-3 listesi |
| Yönetici | Yönetici görünür ve yanıt veriyor | İzin mesajı yöneticiye özel yazılır |

Her grup için kayıt (liste bu tabloda tutulur):

| # | Grup (ad) | İlçe | Platform | Kural (ticari paylaşım) | Yönetici yanıt durumu | İzin | Paylaşım tarihi (T-göreli) | Not |
|---|---|---|---|---|---|---|---|---|
| 1 | — | — | — | — | — | Bekliyor | — | Doldurulmadı |

Durum kodları: Bekliyor · İzin istendi · İzin verildi · Reddedildi / yasak · Paylaşıldı.

## 2. Yönetici izin mesajı (taslak)
Gönderim: yöneticiye özel mesaj (grup duvarında değil). Bir mesaj, bir yönetici.

> Merhaba, [Grup adı] grubunu takip eden bir anneyim. Kadıköy/Ataşehir'de bebeğinin büyüdüğü eşyaları yakındaki annelere elden vermek için küçük bir uygulama hazırladık (kargo yok, ücretsiz ilan). Grubunuzda ticari paylaşım kuralı var mı? Kurallara uygun, tek bir kısa paylaşım yapmak isterim; uygun görmezseniz hiç paylaşmam. Teşekkürler.

Kurallar (Can):
- Kurumsal dil, "kampanya" kelimesi yok. Kişisel tanıtım, kendi adıyla.
- Yönetici "hayır" derse o grupta tekrar konuşulmaz; listeye "Reklam yasak" olarak işlenir.
- Yanıt gelmezse 5 gün sonra bir kez hatırlatma; ikinci kez yazılmaz.
- Paylaşım metni (grup için) izinle birlikte yönetici onayına sunulur; onaylanmadan metin değiştirilmez.

## 3. Grup paylaşım metni (izin alındıktan sonra, taslak)
> Kadıköy ve Ataşehir'de bebeğinin büyüdüğü eşyaları yakındaki annelere vermek için yeni bir uygulama açıyoruz. İlk satıcılar için erken erişim var: ilan ver, mesaj gelirse yakınındaki anneyle elden teslim et. Kargo yok, ilan ücretsiz (şimdilik). Güvenlik ipuçları uygulamada. [Bağlantı]
> Sorularınızı yorumda yanıtlarım.

Zorunlu düzeltmeler (Murat teyidi öncesi):
- "Ücretsiz (şimdilik)" ifadesi ONAY-002 (a) kapsamında; Hukuk teyidi bekliyor (sss.md S3).
- "Güvenlik ipuçları" ifadesi garanti değildir; "güvenli" kelimesi yoktur (magaza-metni.md §0).
- Yasaklı kategoriler (emzik, biberon, tıbbi cihaz vb.) paylaşımda listelenmez; SSS'ye yönlendirilir.
- Bağlantı: UTM ile grup başına ayrı (utm_source=grup, utm_content=<grup kodu>); alan adı yoksa bağlantı yayınlanmaz (👤).

## 4. Açık maddeler
- Liste doldurma: grup bulunup kriterlere uyduğu manuel kontrol edilecek (Can; web'den doğrulanamıyorsa 👤 kurucu kendi üyeliğinden bakabilir).
- Hukuk (Murat): izin mesajı ve paylaşım metnindeki ticari beyan, "reklam" etiketi gerekliliği.
- Ece: UTM alanı ve grup kodu için olay alanı (lansman.md §4).
