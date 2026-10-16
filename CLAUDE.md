# Bebelika Sanal Şirketi — Şirket Anayasası

## Ürün
Bebelika: anne-bebek sektöründe ikinci el ürün alım-satım mobil uygulaması.
İş modeli: SADECE ELDEN TESLİM (kargo yok). Konuma göre ilan, uygulama içi mesajlaşma, güvenli buluşma.
Hedef: Türkiye, önce tek şehirde (İstanbul) pilot.

## Yönetim
- Kurucu (sahip) = yönetim kurulu. Sadece Slack'ten yazar. Slack'te "KURUCU" etiketiyle görünür.
- CEO Defne her döngüde ekibi yönetir ve kurucuya rapor verir.
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
`python3 scripts/slack.py post <kanal> <persona> "<metin>"` — kendi personanla yaz
`python3 scripts/slack.py read <kanal> <saat> [--insan]` — son mesajları oku
`python3 scripts/slack.py replies <kanal> <ts>` — bir mesajın thread cevaplarını oku
Kanallar: genel, ceo-rapor, onay, urun, muhendislik, pazarlama, ik.
Slack mesajları kısa olur (≤6 satır); ayrıntı docs/ dosyasına yazılır, mesajda dosya yolu verilir.

## Token tasarrufu (herkes uyar)
- Sadece işin gerektirdiği dosyaları oku; büyük dosyaları baştan sona okuma, Grep kullan.
- Web araştırmasını odaklı yap: görev başına en fazla 5 arama.
- Çıktılar öz olsun: doküman ≤150 satır, özet ≤5 satır.
- Görevi olmayan agent çağrılmaz. Tekrar eden işi yapmadan önce kararlar.md ve docs/'a bak.

## Dil ve kalite
Her şey Türkçe. Kararlar gerekçeli, varsayımlar açıkça yazılı. Emin olmadığın bilgiyi kesinmiş gibi yazma.
