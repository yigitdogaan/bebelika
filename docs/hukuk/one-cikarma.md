# Bebelika: Öne Çıkarma Ücreti, Tüketici Hukuku Notu

Hazırlayan: Av. Murat (Hukuk ve Uyum) | Tarih: 2026-10-17 | Durum: TASLAK (MVP dışı, ileriye dönük)
> UYARI: Hukuki görüş taslağıdır. Dış avukat teyidi gerekir. "(TEYİT)" = teyit gerekli. Dayanak: ONAY-002 (a) ücretsiz + öne çıkarma ücreti.
> ONAY GEREKİR (taahhüt): ödeme altyapısı, ücretli servis sözleşmesi, vergi/fatura kaydı kurucunun hesap ve kimliğiyle yapılır; ekip yapamaz.

## 1. Doğrulama durumu
2 web araması yapıldı. Mesafeli Sözleşmeler Yönetmeliği (cayma hakkı, istisnalar) ve 6563 sayılı Kanun m.9 genel çerçevesi görüldü.
Öne çıkarma hizmetinin cayma istisnası kapsamı, 2026 değişiklik hali ve platformlara özgü uygulama DOĞRULANAMADI. Aşağıdakiler
çalışma hipotezidir; resmî metin (Resmî Gazete, ticaret.gov.tr) ve avukat teyidi şarttır.
Ticaret Bakanlığı'nın cayma istisnalarını genişleten değişikliğinin 1.1.2026'da yürürlüğe girmesi öngörülmüştü; güncel hali TEYİT.

## 2. Hukuki niteleme (hipotez)
- Öne çıkarma = Bebelika'nın satıcıya sunduğu ücretli dijital/reklam hizmeti (ilanı belirli süre üst sıraya taşıma). Bu ilişki bireysel
  satıcı tüketici sıfatındaysa (ticari amaç dışı) tüketici hukuku (6502 s. TKHK, Mesafeli Sözleşmeler Yönetmeliği) devreye girebilir. (TEYİT)
- Satıcı düzenli ticari satıcıysa tüketici sayılmaz; yine de genel işlem şartları (TBK m.20+) geçerlidir.
- İkinci el satışın kendisi (alıcı-satıcı) bu hizmetten ayrıdır; Bebelika satışa komisyon almaz (model gereği).

## 3. Tüketici hukuku gerekleri (hizmet için)
1. Ön bilgilendirme: ücret (KDV dahil toplam), süre, hizmetin özellikleri, cayma hakkı, ödeme şekli, şirket kimliği, şikâyet başvuru yolu.
   Satın alma ekranında açıkça, ödemeden önce gösterilir.
2. Onay butonu: "Ödeme yükümlülüğü ile siparişi onayla" benzeri açık ifade (mesafeli sözleşme kuralı, TEYİT).
3. Cayma hakkı: Hizmette cayma süresi 14 gündür. Hizmet cayma süresi dolmadan satıcının onayı ile başlarsa ifa edilen kısım
   için orantılı bedel kesilebilir; ifa tamamlandıysa cayma kaybolabilir, bu için tüketicinin önceden açık onayı ve bilgilendirilmesi gerekir
   (TEYİT: güncel istisna maddeleri). Önerilen UX: "Hizmeti hemen başlat" onayı + cayma hakkı kaybı/ orantılı bedel bilgisi.
4. İade: Hizmet başlamadan iptal ve cayma durumunda 14 gün içinde ücret iadesi (TEYİT). Ödeme servisi seçimine göre mekanizma.
5. Fatura/e-arşiv: şirket mükellefiyeti ve KDV; bireysel satıcıya fatura. Muhasebe ve vergi danışmanı gerekir. (TEYİT)
6. Şeffaflık: öne çıkarılan ilanlar "Öne Çıkan" etiketiyle ayrıştırılır (reklam/ücretli yerleşim bilgisi; aldatıcı reklam yasağı, TKHK/Ticari Reklam Yönetmeliği, TEYİT).
7. Güvenlik: Öne çıkarma ürün güvenliği filtresini atlatmaz; yasaklı/riskli ilan ücretle yayına alınamaz. Kaldırılan ilanın ücreti:
   ilan Bebelika'nın kuralları nedeniyle kaldırılırsa iade politikası net yazılmalı (öneri: kullanıcı kusuru yoksa iade; ihlalde iade yok, sözleşmede yazılı olmalı; haksız şart riski, TEYİT).
8. Süre ve fiyat değişikliği: Önceden yayınlanır, devam eden satın almayı etkilemez.

## 4. Ödeme, KVKK ve diğer alanlar
- Ödeme kartı verisi Bebelika'da tutulmaz; lisanslı ödeme kuruluşu (PSP) kullanılır. PSP seçimi: kuruluş sözleşmesi, komisyon, kurucunun
  kimliği ve ticari hesabı gerekir (👤, ONAY GEREKİR). 6493 sayılı Kanun kapsamı ve lisans durumu PSP'nin sorumluluğu; TEYİT.
- Ödeme alınınca Bebelika'nın pazar yeri/ödeme aracısı sayılıp sayılmayacağı ayrıca sorulur: ücret yalnızca öne çıkarma içindir,
  satış bedeli Bebelika'dan geçmez. Bu yapı korunmalıdır.
- KVKK: Ödeme/fatura verisi için aydınlatma metni güncellenir (hukuki yükümlülük: VUK saklama süreleri, TEYİT).
- Ticari elektronik ileti: Satın alma sonrası kampanya mesajı için ayrı onay.
- Mağaza kuralları: App Store/Google Play dijital hizmetlerde uygulama içi satın alma (IAP) zorunlu tutabilir; ilan öne çıkarma "dijital hizmet" olarak
  değerlendirilirse mağaza komisyonu ve ödeme zorunluluğu doğabilir. Güncel politika DOĞRULANMADI, yayından önce kontrol edilmeli (Hukuk + CTO + Pazarlama).
  Bu, gelir modelinin maliyetini doğrudan etkiler.
- Rekabet/reklam: "En çok görüntülenen", "daha hızlı satar" gibi vaatler kanıtsızsa yasak (TEYİT).

## 5. Sözleşme ve metin gereksinimi (taslak başlıklar)
Ücretli Hizmet Şartları: hizmetin tanımı, süre/fiyat, ödeme, cayma/iade, ihlalde kaldırma, değişiklik, uyuşmazlık, Ön Bilgilendirme Formu (ekran).
Bu sözleşme-taslak.md'ye madde 9'da referans verilir; ücretli özellik devreye girmeden önce yazılır.

## 6. Öneri ve sıra
1. MVP/pilotta ücret alınmaz, öne çıkarma yok (ONAY-002 ile uyumlu). Pilot sonrası kararlaştırılır.
2. Avukat paketi soru 12 ile ücretli hizmetin çerçevesi sorulur; PSP + mağaza IAP kontrolü yapılır.
3. Pilot verisiyle fiyat denemesi öncesi: ön bilgilendirme ekranı (Selin), iade akışı (Kerem), PSP entegrasyonu (Ece), fatura süreci (kurucu + mali müşavir 👤).
4. Fiyat/pakete ilişkin ticari kararlar Kerem/Can'da; Hukuk yalnızca uygunluk görüşü verir.

## 7. Açık sorular (avukata)
Cayma istisnası ve orantılı bedel; bireysel satıcı tüketici mi; PSP ve ödeme aracısı statüsü; mağaza IAP zorunluluğu;
haksız şart (kaldırılan ilanda iade); vergi/fatura yükümlülüğü; reklam etiketleme zorunluluğu.
