// Demo (mock) veri: Supabase yokken uygulama bununla çalışır. Gerçek kişi/ilan değildir.
export const ME = { id: 'u-me', email: 'demo@bebelika.test' };

const ago = (min: number) => new Date(Date.now() - min * 60_000).toISOString();

export const profiles = [
  { id: ME.id, display_name: 'Sen (Demo)' },
  { id: 'u-ayse', display_name: 'Ayşe K.' },
  { id: 'u-merve', display_name: 'Merve T.' },
  { id: 'u-elif', display_name: 'Elif D.' },
  { id: 'u-zeynep', display_name: 'Zeynep A.' },
];

// photo: demo:<arka plan rengi>|<emoji>
const L = (
  id: string, seller: string, title: string, desc: string, price: number, cond: string,
  cat: number, dist: number, minAgo: number, color: string, emoji: string, ageMin?: number, ageMax?: number,
) => ({
  listing: {
    id, seller_id: seller, title, description: desc, price_try: price, condition: cond, category_id: cat,
    age_min_months: ageMin ?? null, age_max_months: ageMax ?? null, status: 'aktif',
    created_at: ago(minAgo), distance_m: dist,
  },
  photo: { listing_id: id, storage_path: `demo:${color}|${emoji}`, position: 0 },
});

const rows = [
  L('l1', 'u-ayse', 'Bebek arabası (travel sistem)', 'İki yıl kullanıldı, tekerlekler sağlam, yağmurluğu var. Elden teslim.', 3500, 'iyi', 2, 700, 120, '#cfe8ff', '🍼', 0, 36),
  L('l2', 'u-merve', 'Ahşap mama sandalyesi', 'Kemerli, tepsisi çıkarılabilir. Temiz kullanıldı.', 900, 'yeni_gibi', 3, 1200, 300, '#ffe9c7', '🪑', 6, 36),
  L('l3', 'u-elif', '0-3 ay body seti (8 parça)', 'Pamuklu, yıkanmış, lekesiz.', 250, 'iyi', 1, 1800, 60, '#ffd9e6', '👶', 0, 3),
  L('l4', 'u-zeynep', 'Ahşap oyuncak seti', 'Boyası güvenli, 5 parça.', 150, 'iyi', 4, 2300, 1500, '#e2f5d3', '🧸', 6, 36),
  L('l5', 'u-ayse', 'Elde süt pompası', 'Parçaları yeni alındı, kutusunda.', 400, 'yeni_gibi', 5, 900, 800, '#e9dcff', '🍶', 0, 24),
  L('l6', 'u-merve', 'Park yatak (portatif)', 'Katlanır, taşıma çantalı.', 1200, 'iyi', 6, 3100, 2400, '#d6f2ef', '🛏️', 0, 24),
  L('l7', 'u-elif', 'Kışlık tulum (6-9 ay)', 'Kapüşonlu, içi polar.', 300, 'orta', 1, 1500, 4000, '#fff1b8', '🧥', 6, 9),
  L('l8', 'u-zeynep', 'Aktivite halısı', 'Oyun halısı, sarkaçlı. Ücretsiz verilecek.', 0, 'iyi', 4, 2800, 200, '#ffd6cc', '🎪', 0, 12),
  L('l9', 'u-ayse', 'Biberon seti (4 adet)', 'Cam biberon, emzikleri yeni.', 180, 'yeni_gibi', 5, 600, 90, '#cfe8ff', '🍼', 0, 12),
  L('l10', 'u-merve', 'Beşik (sallanan)', 'Yatağı dahil, ahşap.', 1800, 'iyi', 6, 4200, 5200, '#ffe9c7', '🛌', 0, 8),
  L('l11', 'u-elif', 'Bebek taşıma kanguru', 'Ergonomik, ayarlanabilir.', 450, 'iyi', 7, 1900, 700, '#ffd9e6', '🎒', 3, 24),
  L('l12', 'u-zeynep', 'Emzirme önlüğü ve yastığı', 'Yıkanabilir kılıf.', 220, 'yeni_gibi', 7, 2600, 1900, '#e2f5d3', '🤱'),
];

export const listings = rows.map((r) => r.listing);
export const listingPhotos = rows.map((r) => r.photo);

export const conversations = [
  { id: 'c1', listing_id: 'l1', buyer_id: ME.id, seller_id: 'u-ayse', created_at: ago(50) },
  { id: 'c2', listing_id: 'l8', buyer_id: ME.id, seller_id: 'u-zeynep', created_at: ago(30) },
  { id: 'c3', listing_id: 'l3', buyer_id: ME.id, seller_id: 'u-elif', created_at: ago(2000) },
];

let mid = 0;
const M = (c: string, from: string, body: string, minAgo: number, read: boolean) =>
  ({ id: ++mid, conversation_id: c, sender_id: from, body, created_at: ago(minAgo), read_at: read ? ago(minAgo - 1) : null });

export const messages = [
  // Senaryo 1: fiyat pazarlığı ve buluşma yeri
  M('c1', ME.id, 'Merhaba, araba hâlâ duruyor mu?', 50, true),
  M('c1', 'u-ayse', 'Merhaba, duruyor. 3.500 ₺ ama 3.200 ₺’ye olur.', 45, true),
  M('c1', ME.id, 'Güzel. Cumartesi 14:00 metro çıkışında buluşalım mı?', 40, true),
  M('c1', 'u-ayse', 'Olur, kalabalık bir yer iyi. Orada görüşürüz 🙂', 12, false),
  // Senaryo 2: ücretsiz ürün, okunmamış
  M('c2', ME.id, 'Halıyı almak istiyorum, bugün müsait misiniz?', 30, true),
  M('c2', 'u-zeynep', 'Akşam 18:00’den sonra olur, adres yerine park girişinde buluşalım.', 8, false),
  // Senaryo 3: eski sohbet
  M('c3', 'u-elif', 'Setin hepsi lekesiz, isterseniz ek foto atabilirim.', 1990, true),
  M('c3', ME.id, 'Teşekkürler, başka birine verdim sanırım. Kusura bakmayın.', 1900, true),
];
export const nextMessageId = () => ++mid;
