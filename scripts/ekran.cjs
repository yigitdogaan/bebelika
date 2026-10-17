#!/usr/bin/env node
// Bebelika ekran görüntüsü aracı (web derlemesi üzerinden, telefon boyutunda).
// Kullanım: node scripts/ekran.cjs [yol1] [yol2] ...   örn: node scripts/ekran.cjs / /ilan/1 /ilan-ver
// Önce: cd app && npx expo export --platform web   (app/dist oluşur)
// Çıktı: /tmp/ekran/<ad>.png  → Read aracıyla açıp bak.
const http = require("http"), fs = require("fs"), path = require("path");
const { chromium } = require("playwright-core");

const KOK = path.resolve(__dirname, "..", "app", "dist");
const CIKTI = "/tmp/ekran";
const TIPLER = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".ttf": "font/ttf", ".woff2": "font/woff2", ".ico": "image/x-icon" };

if (!fs.existsSync(path.join(KOK, "index.html"))) {
  console.error("app/dist yok. Önce: cd app && npx expo export --platform web"); process.exit(1);
}
const sunucu = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  let dosya = path.join(KOK, p);
  if (!dosya.startsWith(KOK)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(dosya) && fs.statSync(dosya).isDirectory()) dosya = path.join(dosya, "index.html");
  if (!fs.existsSync(dosya) && fs.existsSync(dosya + ".html")) dosya += ".html";
  if (!fs.existsSync(dosya)) dosya = path.join(KOK, "index.html");
  res.writeHead(200, { "Content-Type": TIPLER[path.extname(dosya)] || "application/octet-stream" });
  fs.createReadStream(dosya).pipe(res);
});

(async () => {
  await new Promise(r => sunucu.listen(4173, r));
  fs.mkdirSync(CIKTI, { recursive: true });
  const tarayici = await chromium.launch({ executablePath: process.env.CHROME_YOLU || "/usr/bin/google-chrome" });
  const sayfa = await tarayici.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const yollar = process.argv.slice(2).length ? process.argv.slice(2) : ["/"];
  for (const y of yollar) {
    try {
      await sayfa.goto("http://localhost:4173" + y, { waitUntil: "networkidle", timeout: 30000 });
      await sayfa.waitForTimeout(2000);
      const ad = (y === "/" ? "anasayfa" : y.replace(/^\//, "").replace(/[^a-zA-Z0-9-]+/g, "_")) + ".png";
      await sayfa.screenshot({ path: path.join(CIKTI, ad), fullPage: true });
      console.log("✓ " + path.join(CIKTI, ad));
    } catch (h) { console.log("✗ " + y + ": " + h.message); }
  }
  await tarayici.close(); sunucu.close();
})();
