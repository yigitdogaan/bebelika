---
name: ornek-veri-ve-fotograf
description: Demo/örnek ilan verisi oluştururken, ilanlara gerçek ürün fotoğrafı eklerken, satıcı profilleri, semtler ve fiyatlar gibi gerçekçi içerik hazırlarken kullan. Fotoğrafların lisanslı kaynaklardan bulunup app/assets/ornek/ altına indirilmesini içerir.
---

# Örnek Veri ve Fotoğraflar — Bebelika

Demo, gerçek bir uygulama gibi görünmeli. Gri kutu, "Ürün 1", "Lorem ipsum", 100 TL'lik yuvarlak fiyatlar YOK.

## Veri
- En az 24 ilan; kategoriler dengeli: bebek arabası, beşik/park yatak, mama sandalyesi, ana kucağı, kanguru/sling,
  oyuncak, kitap, kıyafet (yaş gruplarıyla), emzirme ürünleri, banyo, oda dekorasyonu.
- docs/hukuk altındaki yasaklı/riskli ürün politikasını ve state/kararlar.md'yi OKU; yasaklı ürünleri demoya koyma.
- Gerçekçi Türkçe başlıklar ve açıklamalar (marka/model + durum + kullanım süresi), 2-4 cümle, doğal dil.
- Fiyatlar: Türkiye'deki güncel ikinci el fiyatlarına göre gerçekçi; emin değilsen web'de birkaç örnek fiyata bak.
  Fiyatlar yuvarlak olmak zorunda değil (ör. 1.850 ₺). Biçim: Intl.NumberFormat('tr-TR').
- İstanbul semtleri (pilot): Kadıköy, Ataşehir, Beşiktaş, Üsküdar, Bakırköy, Maltepe vb.; mesafeler 0,3–8 km.
- 8-10 satıcı profili: Türkçe isimler (sadece ad + soyadın baş harfi), puan, teslim sayısı, üyelik süresi, doğrulanmış rozeti.
- Durum: Yeni gibi / Çok iyi / İyi / Kullanılmış. İlan tarihi: son 2 hafta.

## Fotoğraflar
- Her ilana 2-3 fotoğraf. SADECE ürün fotoğrafı: tanınabilir çocuk veya yetişkin yüzü OLAN fotoğraf kullanma (gizlilik politikası).
- Kaynak: Unsplash veya Pexels (ücretsiz ticari kullanım lisansı). WebSearch/WebFetch ile ürüne uygun fotoğrafı bul,
  doğrudan görsel adresini al (Unsplash için images.unsplash.com/photo-...).
- İndir (repo içinde dursun ki demo her zaman çalışsın):
  `node scripts/foto-indir.cjs "<görsel-url>?w=900&q=75&fm=jpg&fit=crop" app/assets/ornek/<ilan-kisa-ad>-1.jpg`
  Her dosya ≤ 300 KB olmalı (araç uyarır; büyükse w=700 ile tekrar indir).
- Her fotoğrafın kaynağını ve fotoğrafçısını app/assets/ornek/KAYNAKLAR.md dosyasına yaz.
- Örnek verideki görseller yerel dosyadan yüklenir (require ile), görsel bileşeni sabit oranlı ve kırpmalı (cover).
- İndirdikten sonra ekran görüntüsüyle kontrol et: fotoğraflar ürünle uyumlu mu, kırpma doğru mu, tutarlı bir ışık/ton
  var mı? Uyumsuz olanı değiştir.

## Bitti tanımı
24+ ilan, hepsinde 2-3 uyumlu fotoğraf, kaynak listesi tam, yasaklı ürün yok, ana sayfa ve ilan detayı ekran görüntüsünde
gerçek bir uygulama gibi görünüyor.
