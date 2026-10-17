# Demo Gezinti Senaryosu (v0.1)
Sahip: Kerem (Ürün) | Tarih: 2026-10-17 | Girdi: mvp.md, akislar.md, görev panosu Döngü 9 (mock veri modu)
Amaç: Kurucunun telefonda/web'de 5 dakikada uçtan uca görebileceği akış ve "demo hazır" kabul kriterleri.

## 1. Varsayımlar
- D1: Demo Supabase'siz, mock veriyle çalışır (Ece); veri seti Selin'in demo-veri.md dosyasından gelir. Doğrulanmadı.
- D2: Demo tek bir "demo kullanıcı" (Elif, Kadıköy) olarak açılır; giriş atlanırsa ekranda "Demo modu" yazar.
- D3: Demoda gerçek bildirim, gerçek konum, gerçek fotoğraf yükleme yok; "örnek" olarak simüle edilir ve ekranda öyle belirtilir (sahte işlev yok).
- D4: Süreler tahmindir; kurucu denemesinde ölçülür.

## 2. Akış (5 dakika)
| # | Dk | Adım | Ekran | Ne görülür |
|---|---|---|---|---|
| 1 | 0:00 | Açılış, "Demo modu" | Onboarding | 3 adımda bitiş, ilçe: Kadıköy |
| 2 | 0:30 | Keşfet listesi | S3 | 12 örnek ilan, mesafe + yenilik sırası |
| 3 | 1:00 | Filtre: kategori + mesafe | S4 | Bebek arabası, ≤3 km; sonuç değişir |
| 4 | 1:30 | Arama + boş sonuç | S3 | "Mesafeyi genişlet" önerisi |
| 5 | 2:00 | İlan detay | S7 | Foto, durum, yaklaşık mesafe, "Güvensiz ürün bildir" |
| 6 | 2:30 | Mesaj gönder | S12 | Hızlı cevap "Hâlâ var mı?", senaryolu satıcı yanıtı |
| 7 | 3:15 | Gelen kutusu | Inbox | 3 örnek sohbet |
| 8 | 3:45 | İlan ver (hızlı) | F2 | 3 adım: foto, kategori, fiyat, durum |
| 9 | 4:30 | Şikâyet + engelle | S17 | Kategori seçimi, onay mesajı |
| 10 | 4:50 | Profil | Profil | Puan/rozet örneği, "yeni" rozeti |

Not: Buluşma önerme (F5) ve teslim onayı (F6) henüz kodda yok (gorevler.md). Demoda bu iki adım "Yakında" olarak AÇIKÇA işaretlenir; çalışıyormuş gibi gösterilmez.

## 3. Kabul kriterleri ("demo hazır" = hepsi evet)
1. Web export statik açılır; telefon tarayıcısında 390 px genişlikte kullanılabilir.
2. Kurucu README'deki 5 adımla (Ece) kod bilmeden açabilir.
3. Akıştaki 1-7 ve 9-10. adımlar hatasız gezilir; 8. adımda ilan listeye (oturum içi) eklenir.
4. "Demo modu: örnek veri" bandı her zaman görünür; gerçek kişi adı/foto/telefon yok.
5. Hiçbir ekranda tam adres veya telefon görünmez; mesafe yaklaşık.
6. Hata/yükleniyor/boş durum ekranları (Selin bos-durumlar.md) en az listede ve sohbette var.
7. Örnek veride yasaklı ürün yok (kategoriler.md §4).
8. Çökme yok: hızlı arka arkaya dokunmada ekran donmaz (elle kontrol).

## 4. Kurucudan beklenen geri bildirim
1. İlk 10 saniyede ne işe yaradığı anlaşıldı mı? 2. İlan listesi güven veriyor mu? 3. İlan verme kolay mı? 4. Marka/isim/ton yerinde mi (karar kurucunun)? 5. Eksik gördüğün ilk şey ne?

## 5. Şimdi değil
Gerçek push, gerçek Supabase, harita, ödeme, buluşma/teslim akışının mock'u (önce kod).

## 6. Açık sorular
- Ece: buluşma önerisi/teslim onayının mock'u mümkün mü?
- Selin: demo-veri.md'deki 3 sohbet senaryosu 6. adımı kapsıyor mu?
