#!/usr/bin/env node
// Demo gezinti testi: app/dist'i telefon boyutunda açar, docs/urun/demo-senaryo.md adımlarını gezer.
// Önce: cd app && npx expo export --platform web.  Kullanım: node scripts/gezinti-testi.cjs
// Çıktı: konsola ✓/✗ satırları, /tmp/gezinti/*.png. Hata varsa çıkış kodu 1.
const http = require("http"), fs = require("fs"), path = require("path");
const { chromium } = require("playwright-core");

const KOK = path.resolve(__dirname, "..", "app", "dist");
const CIKTI = "/tmp/gezinti";
const TIPLER = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".png": "image/png", ".ttf": "font/ttf", ".ico": "image/x-icon" };
const sunucu = http.createServer((req, res) => {
  let d = path.join(KOK, decodeURIComponent(req.url.split("?")[0]));
  if (!d.startsWith(KOK) || !fs.existsSync(d) || fs.statSync(d).isDirectory()) d = path.join(KOK, "index.html");
  res.writeHead(200, { "Content-Type": TIPLER[path.extname(d)] || "application/octet-stream" });
  fs.createReadStream(d).pipe(res);
});

let hata = 0;
const ok = (m) => console.log("✓ " + m);
const yanlis = (m) => { hata++; console.log("✗ " + m); };
const kontrol = (kosul, m) => (kosul ? ok(m) : yanlis(m));

(async () => {
  await new Promise((r) => sunucu.listen(4174, r));
  fs.mkdirSync(CIKTI, { recursive: true });
  const tarayici = await chromium.launch({ executablePath: process.env.CHROME_YOLU || "/usr/bin/google-chrome" });
  const s = await tarayici.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const konsolHata = [];
  s.on("pageerror", (e) => konsolHata.push("pageerror: " + e.message));
  s.on("console", (m) => { if (m.type() === "error") konsolHata.push("console: " + m.text()); });
  const foto = async (ad) => s.screenshot({ path: path.join(CIKTI, ad + ".png"), fullPage: true });
  const metin = async () => (await s.locator("body").innerText());
  const tikla = async (t) => { await s.getByText(t, { exact: false }).first().click(); await s.waitForTimeout(700); };

  await s.goto("http://localhost:4174/", { waitUntil: "networkidle" });
  await s.waitForTimeout(1500);
  await foto("01-giris");
  await tikla("Demo olarak gir");
  await s.waitForTimeout(1500);
  let t = await metin();
  kontrol(/Bu bir demodur/.test(t), "Demo bandı görünüyor");
  await foto("02-kesfet");
  const basliklar = ["Katlanır bebek arabası", "Ahşap mama sandalyesi", "0-6 ay body", "Ahşap oyun halısı", "6-12 ay tulum",
    "Park yatak", "Silikon kaşık", "Tahta yap-boz", "Duvar sticker", "Taşıma kanguru", "Kış montu"];
  const eksik = basliklar.filter((b) => !t.includes(b));
  kontrol(eksik.length === 0, `Keşfet'te 11 ilan (eksik: ${eksik.join(", ") || "yok"})`);
  kontrol(!t.includes("Pamuklu uyku tulumu"), "Kendi ilanım (#9) keşfette yok");
  const sira = ["0-6 ay body", "Kış montu", "Katlanır bebek arabası", "Silikon kaşık"].map((b) => t.indexOf(b));
  kontrol(sira.every((x, i) => x >= 0 && (i === 0 || x > sira[i - 1])) && sira[3] < t.indexOf("Ahşap mama"),
    "Sıralama: body, mont, araba, kaşık üstte");
  kontrol(/Ücretsiz/.test(t), "Ücretsiz ilan görünüyor");

  // Kategori + mesafe filtresi
  await tikla("Bebek arabası ve taşıma");
  await tikla("3 km");
  t = await metin();
  kontrol(t.includes("Katlanır bebek arabası") && !t.includes("Park yatak"), "Kategori+3 km filtresi çalışıyor");
  await foto("03-filtre");
  await tikla("Tümü");
  await tikla("10 km");

  // Arama + boş sonuç
  await s.getByPlaceholder("Ara").fill("zzzz");
  await s.waitForTimeout(1000);
  t = await metin();
  kontrol(/Bu mesafede ilan yok/.test(t) && /Mesafeyi genişlet/.test(t), "Boş sonuç + 'Mesafeyi genişlet'");
  await foto("04-bos");
  await s.getByPlaceholder("Ara").fill("");
  await s.waitForTimeout(800);

  // İlan detay
  await tikla("Katlanır bebek arabası");
  t = await metin();
  kontrol(/Fren ve kemerler/.test(t), "İlan detay açıldı");
  kontrol(/bildir/i.test(t), "Detayda bildir/şikâyet bağlantısı var");
  await foto("05-detay");
  await tikla("Daha fazla");
  kontrol(/şikâyet|bildir/i.test(await metin()) && /engelle/i.test(await metin()), "Detay menüsü: şikâyet + engelle");
  await tikla("Şikâyet");
  t = await metin();
  kontrol(/Neyi bildirmek istiyorsun/.test(t), "Şikâyet ekranı açıldı (S17)");
  await foto("05b-sikayet");
  await tikla("Dolandırıcılık");
  await tikla("Gönder");
  t = await metin();
  kontrol(/Bildirimin alındı/.test(t) && /Demo modunda/.test(t), "Şikâyet gönderildi + demo notu");
  await tikla("Tamam");

  // Mesaj
  const mesajDugme = s.getByText(/mesaj/i).first();
  await mesajDugme.click(); await s.waitForTimeout(1200);
  t = await metin();
  kontrol(/Hâlâ var mı\?/.test(t), "Sohbet açıldı, hızlı yanıt çipi var");
  kontrol(/Önerilen buluşma noktası/.test(t), "Statik buluşma notu görünüyor (mevcut sohbet)");
  await foto("06-sohbet");
  await s.getByText("Bugün uygun").first().click(); await s.waitForTimeout(800);
  kontrol((await metin()).includes("Bugün uygun"), "Mesaj gönderildi");

  // Gelen kutusu
  await tikla("Mesajlar");
  t = await metin();
  kontrol(/Zeynep A\./.test(t) && /Ayşe B\./.test(t) && /Selin D\./.test(t), "Gelen kutusunda 3 sohbet");
  await foto("07-gelen-kutusu");
  await tikla("Ayşe B.");
  t = await metin();
  kontrol(/IBAN paylaşma/.test(t), "Senaryo B: IBAN uyarı bandı");
  await foto("08-iban");

  // İlan ver
  await tikla("Keşfet");
  await tikla("İlan ver");
  t = await metin();
  kontrol(/Kategori|Fiyat|Fotoğraf/i.test(t), "İlan ver ekranı açıldı");
  await foto("09-ilan-ver");
  kontrol(/Tümünü gör/.test(t) && /En az 1 fotoğraf/.test(t), "İlan ver: yasaklı ürün satırı + eksik alan nedeni");
  await s.getByText("Oto koltuğu", { exact: true }).click();
  await s.getByPlaceholder("Başlık (opsiyonel)").fill("Emzik seti");
  t = await metin();
  kontrol(/Kazaya karışmadı/.test(t) && /ECE etiketi/.test(t), "Oto koltuğu: kazasız/ECE beyanı çıktı");
  kontrol(/yasaklı ürünler arasında olabilir/.test(t), "Başlıkta 'emzik' yumuşak uyarı");
  await foto("09b-ilan-beyan");

  // Profil + hesap silme
  await tikla("Profil");
  t = await metin();
  kontrol(/Elif K\./.test(t) && /Yeni üye/.test(t) && /Hesabımı ve verilerimi sil/.test(t), "Profil: ad, rozet, hesap silme");
  await foto("10-profil");
  s.once("dialog", (d) => d.accept());
  await tikla("Hesabımı ve verilerimi sil");
  await s.waitForTimeout(1500);
  await foto("11-silindi");
  kontrol(/demo olarak g[iıİI]r/i.test(await metin()), "Hesap silinince giriş ekranına dönüldü");

  const gercekHata = konsolHata.filter((h) => !/favicon|Download the React DevTools/.test(h));
  kontrol(gercekHata.length === 0, `Konsol hatası yok (${gercekHata.length})`);
  gercekHata.slice(0, 5).forEach((h) => console.log("   " + h));
  await tarayici.close(); sunucu.close();
  process.exit(hata ? 1 : 0);
})().catch((e) => { console.error("Test çöktü:", e.message); process.exit(2); });
