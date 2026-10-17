# Bebelika Sanal Şirketi — Şirket Anayasası

## Ürün
Bebelika: anne-bebek sektöründe ikinci el ürün alım-satım mobil uygulaması.
İş modeli: SADECE ELDEN TESLİM (kargo yok). Konuma göre ilan, uygulama içi mesajlaşma, güvenli buluşma.
Hedef: Türkiye, önce tek şehirde (İstanbul) pilot.

## Yönetim
- Kurucu (sahip) = yönetim kurulu. Sadece Slack'ten yazar. Slack'te "KURUCU" etiketiyle görünür.
- CEO Defne her turu planlar, kararları verir ve kurucuya rapor verir.
- Ekip tanımları ekip/ klasöründedir (döngü başında .claude/agents/ altına kopyalanır).
- Ekip: ceo, urun (Kerem), cto (Ece), tasarim (Selin), hukuk (Murat), ik (Zeynep), pazarlama (Can).

## KARAR YETKİSİ
Ekip tam yetkilidir. Kapsam, teknoloji, tasarım, marka, gelir modeli dahil kararları ilgili uzman verir;
stratejik ve departmanlar arası kararları CEO verir. Her karar state/kararlar.md'ye TEK SATIR gerekçeyle yazılır
ve CEO raporunda kurucuya bildirilir. Kurucu bir karara itiraz ederse o karar geri alınır.
Tek istisna — YENİ ÇALIŞAN (agent) İŞE ALIMI: kurucuya #onay'dan sorulur, onay gelmeden uygulanmaz
(onay asla varsayılmaz veya uydurulmaz).
Para harcama, ücretli servis, mağazada yayın, imza/resmi başvuru gibi işleri ekip kendisi yapamaz (kurucunun hesabı,
kartı veya kimliği gerekir). Bunlar sorulmaz; CEO raporunda "👤 Senin yapman gereken" maddesi olarak bildirilir.

## Dosyalar (şirket hafızası)
- state/durum.md — anlık durum özeti (≤40 satır, CEO günceller)
- state/gorevler.md — görev panosu (öncelik sırası)
- state/kararlar.md — karar defteri (tarih | kim | karar | gerekçe)
- state/onaylar.md — kurucu onayı bekleyenler
- docs/<departman>/ — tüm çıktılar (markdown)
- app/ — uygulama kodu (sadece CTO, mimari onaylandıktan sonra)

## Slack
`python3 scripts/slack.py post <kanal> <rol> "<metin>"` — kendi adınla yaz (rol: ceo, urun, cto, tasarim, hukuk, ik, pazarlama)
`python3 scripts/slack.py read <kanal> <saat> [--insan] [--ad <İsim>]` — son mesajları oku (--ad: sadece o ismin geçtiği mesajlar)
`python3 scripts/slack.py replies <kanal> <ts>` — bir mesajın thread cevaplarını oku
`python3 scripts/slack.py durum <rol> <aktif|bosta> "<iş>"` — ofis panosunu günceller (SADECE CEO kullanır)
Kanallar: genel (ekip odası + ofis panosu), ceo-rapor, onay, urun, muhendislik, pazarlama, ik.
Ekip yapısı ve kim kime bağlı: state/ekip.json.

## Ekip içi iletişim (herkes uyar)
- #genel ekip odasıdır. Çalışanlar birbirine burada isimle seslenir: `post genel <rol> "@Selin …"`.
- İşe başlarken önce sana yazılanları oku: `read genel 24 --ad <Adın>`. Sana sorulan soruları
  aynı kanalda isimle cevapla ("@Kerem …"), cevabı işine kat.
- Bir şeye ihtiyacın olursa ilgili kişiye #genel'de sor; cevabı beklemeden kendi işine devam et,
  varsayımını açıkça yaz. CEO bir sonraki çalıştırmada o kişiyi çağırır.
- İşin bitince işinden etkilenen kişiye teslim notu yaz (ör. "@Selin MVP kapsamı hazır, ekranlara
  başlayabilirsin: docs/urun/mvp.md"). Kendi kanalına da kısa özet bırak.
- Mesajlar kısa (≤4 satır), samimi ama profesyonel, gerçek bir ekip arkadaşı gibi.

## Çalışma düzeni
- Her tur: 1) Defne planlar, 2) çalışanlar AYRI süreçler olarak PARALEL çalışır (prompts/calisan.md),
  3) kısa toplantı turu: herkes kendisine yazılanları cevaplar, 4) Defne raporlar.
- Verim: her çalışan turda mümkün olduğunca çok iş bitirir; kuyruk boşalırsa alanındaki en değerli işi kendisi seçer.
- Çalışanlar state/gunluk/<rol>.md'ye kayıt düşer; gorevler.md, kararlar.md, durum.md'yi sadece CEO düzenler.

## Beceriler (skills) — ilgili işte MUTLAKA kullan
- mobil-arayuz-tasarimi: ekran tasarımı, tasarım sistemi, görsel kalite kontrolü (Selin, ayrıca Ece).
- ornek-veri-ve-fotograf: demo ilanları, satıcılar, gerçek ürün fotoğrafları (Selin; veri yapısında Ece ile uyumlu).
- expo-kod-kalitesi: tüm uygulama kodu (Ece ve Selin).
Araçlar: `node scripts/ekran.cjs <yollar>` (telefon boyutunda ekran görüntüsü), `node scripts/foto-indir.cjs "<url>" <hedef>`.

## Verimli kaynak kullanımı
- Sadece işin gerektirdiği dosyaları oku; büyük dosyalarda Grep kullan.
- Tekrar eden işi yapmadan önce kararlar.md ve docs/'a bak. Çıktılar gerektiği kadar uzun, gereksiz tekrar yok.

## Dil ve kalite
Her şey Türkçe. Kararlar gerekçeli, varsayımlar açıkça yazılı. Emin olmadığın bilgiyi kesinmiş gibi yazma.
