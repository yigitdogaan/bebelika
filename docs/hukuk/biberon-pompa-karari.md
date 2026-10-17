# Biberon ve Sağma Pompası: Hukuk Kararı (Pilot)

Hazırlayan: Av. Murat | Tarih: 2026-10-17 | Durum: TASLAK karar
> UYARI: Hukuki görüş taslağıdır. Yayın öncesi dış avukat incelemesi (ONAY-004) gerekir. "(TEYİT)" = teyit gerekli. Bu belge için yeni web araması yapılmadı; dayanak politika.md ve riskli-urunler.md §3.4-3.5.

## 1. Karar (özet)
| Ürün | Pilot kararı | Gerekçe |
|---|---|---|
| Biberon (gövde, kapak, süt saklama kabı) | **YASAK** (Kerem önerisine KATILIYORUM) | Ağza/süte temas eder; çizik, koku, eski plastik (BPA vb.) ilan fotoğrafından anlaşılmaz |
| Biberon emziği, emzik, diş kaşıyıcı | YASAK (değişmedi, politika §3.1-5) | Hijyen |
| Sağma pompası (set veya gövde) | **YASAK (pilot)** | Tıbbi cihaz sayılabilir (TEYİT), politika §3.1-4 ile çelişir; kişisel kullanım/hijyen |
| Pompa parçaları: huni, valf, membran, hortum, şişe | YASAK | Süte temas eder |
| Kaşık, tabak, kase, önlük (ağza girmeyen, yıkanabilir) | SERBEST, beyanla | riskli-urunler §3.4 (çatlak/çizik beyanı) |
| Sterilizatör, mama hazırlama makinesi, monitör | Serbest, elektrikli ürün koşullarıyla | riskli-urunler §3.5 |

## 2. Gerekçe
1. **Biberon:** İkinci el biberonda çizik, koku ve malzeme bileşimi ilan fotoğrafından anlaşılamaz. Bebelika "BPA'sız" iddiasını doğrulayamaz; satıcı beyanına dayanmak sorumluluk riski taşır. Biberonda BPA'nın gıda mevzuatıyla yasaklandığı bilgisi var ama kaynak bu turda doğrulanmadı (TEYİT). Yasak hem riski hem moderasyon yükünü azaltır.
2. **Sağma pompası:** Elektrikli pompalar yurt dışında tıbbi cihaz olarak düzenlenir; Türkiye'de TİTCK kapsamı ve ikinci el satış koşulu doğrulanmadı (TEYİT). Üreticiler genelde pompanın kişiler arasında paylaşımını önermez (bulaş riski, özellikle açık sistem). kategoriler.md "Anne ürünleri" altında pompayı örnek veriyor; politika §3.1-4 (tıbbi cihaz yasak) ile tutarsız. Çelişkide politika geçerlidir.
3. **Gevşetme koşulu:** Avukat tıbbi cihaz olmadığını ve ikinci el satışın serbest olduğunu teyit ederse, yalnız gövde+adaptör (süte temas etmeyen) izinli, temaslı parçalar yeni/açılmamış koşuluyla serbest bırakılabilir. Bu, pilotta devreye girmez. Yasak sonradan gevşetilebilir, tersi zordur.

## 3. Uygulama (ekip için)
- **@Kerem:** kategoriler.md §2 "Anne ürünleri" örneklerinden pompa çıkar; §3 pompa satırı "pilotta yasak" olur; §4 yasaklı listeye biberon + pompa eklenir.
- **@Ece:** başlık/açıklama yumuşak uyarı kelimeleri: biberon, pompa, sağma, süt saklama, emzik, diş kaşıyıcı. Engel değil "ilanı gözden geçir" akışı (yanlış pozitif: "hava pompası", "biberon fırçası").
- **Mock seed:** app/src/lib/mock/seed.ts içinde "Elde süt pompası" (l5) ve "Biberon seti, emzikleri yeni" (l9) var; yasak karara aykırı. Selin'in demo-veri.md'sine eşleme sırasında KALDIRILMALI (demo-veri.md'de yasaklı ürün yok).
- **Kullanıcıya engel metni:** "Biberon ve sağma pompası pilot dönemde Bebelika'da yer almıyor. Ağza ve süte temas eden ürünlerde hijyen nedeniyle ikinci el ilan almıyoruz." ("yasa gereği" YAZILMAZ.)
- riskli-urunler.md §2 tablosu ve §3.4/§3.5 notları bu kararla güncellendi.

## 4. Açık konular
- Avukata: pompanın tıbbi cihaz sınıfı ve ikinci el satış koşulu; biberon/BPA mevzuat atfı (avukat paketi soru 6-7 ile birlikte).
- ONAY GEREKİR (taahhüt): yok (iç ürün kararı). Kullanıcıya gösterilen metinler yayın öncesi avukat + kurucu incelemesine tabidir.
