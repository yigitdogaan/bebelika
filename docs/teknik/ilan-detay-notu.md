# İlan Detay (S7) + Şikâyet Bağlantısı: Uygulama Notu (CTO Ece, 2026-10-17)

Girdi: docs/tasarim/akislar.md §5, §10, §14a; docs/teknik/sikayet-engel-notu.md.

## Yapılanlar
- `app/src/listings/ListingDetailScreen.tsx` (S7): foto galerisi + "2/5" sayaç, fiyat, durum etiketi, başlık, mesafe, satıcı kartı (ad), kalıcı güvenlik şeridi, riskli kategoride geri çağırma kutusu, açıklama, kategori/yaş, "..." menüsü (İlanı şikâyet et, Satıcıyı engelle), ilan sonunda görünür şikâyet satırı. Durumlar: yükleniyor, gizli/kaldırılmış/engelli ("Bu ilan artık yayında değil" + Keşfet'e dön), ağ hatası + Tekrar dene. Kendi ilanında şikâyet/engel menüsü yok.
- `getListing` (listings/api.ts): RLS'e güvenir; erişilemeyen ilan null döner. `ListingDetail` tipi eklendi.
- ReportScreen S7'ye bağlı: hedef `listing`, `ownerId` = satıcı (kendi ilanında verilmez) -> "Ayrıca engelle" çıkar.
- §14a #1: kart Pressable, detaya gider. #2: 1/3/5/10/25 km, çipler >=48 dp. #3: büyük foto kartı. #4 kısmen: durum etiketi eklendi.
- §14a #11: satır >=48 dp, `radio` rolü, alt sabit Gönder/Vazgeç, [Tamam] ile kapanış (setTimeout kalktı), hata ikon+metin ("alert"), "zaten bildirdin" bilgi tonu, C3'te 112 metni, sıra C4, C2, C6 önde.
- App.tsx: basit state ile Keşfet -> detay -> geri (navigasyon kütüphanesi eklenmedi).

## Yapılmayanlar / eksikler
- "Satıcıya mesaj yaz" PASİF (sohbet S12 yok); sahte işlev konmadı.
- Satıcı puanı, işlem sayısı, ilçe, "Yeni üye": veri modelinde yok (§14a #4 kalanı); uydurulmadı. Kendi ilanında Düzenle/Verildi/Kaldır yok.
- Resmi kaynak bağlantısı (geri çağırma) ve kategoriye özel beyanlar yok (Hukuk içeriği bekliyor). Riskli kategori kimlikleri (2,3,6) varsayımdır.
- Kalan §14a: #5 ilçe seçici, #6 filtre/sıralama, #9, #10, #12 yapılmadı.
- Blok sonrası `onBack` keşfet listesini yenilemez (engelli ilan bir sonraki yüklemede süzülür).

## Doğrulama
- `tsc` / uygulama çalıştırması: aşağıdaki durum satırına bak; derlendiği iddia edilmez.
