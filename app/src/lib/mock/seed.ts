// Demo (mock) veri: Supabase yokken uygulama bununla çalışır. Gerçek kişi/ilan değildir.
// Kaynak: docs/tasarim/demo-veri.md (v0.1). Kategori id'leri migration sırasıyla aynıdır (src/listings/types.ts).
export const ME = { id: 'u1', email: 'demo@bebelika.test' };

const ago = (min: number) => new Date(Date.now() - min * 60_000).toISOString();
const H = 60, D = 1440;

export const profiles = [
  { id: ME.id, display_name: 'Elif K.' },
  { id: 'u2', display_name: 'Zeynep A.' },
  { id: 'u3', display_name: 'Merve T.' },
  { id: 'u4', display_name: 'Ayşe B.' },
  { id: 'u5', display_name: 'Selin D.' },
];

// Kategori id: 1 giyim, 2 araba, 3 mama-sandalyesi, 4 oyuncak, 5 beslenme, 6 uyku, 7 diger
// photo: demo:<arka plan rengi>|<emoji> (yer tutucu; gerçek foto yok)
const L = (
  id: string, seller: string, title: string, desc: string, price: number, cond: string,
  cat: number, distKm: number, minAgo: number, color: string, emoji: string, ageMin?: number, ageMax?: number,
) => ({
  listing: {
    id, seller_id: seller, title, description: desc, price_try: price, condition: cond, category_id: cat,
    age_min_months: ageMin ?? null, age_max_months: ageMax ?? null, status: 'aktif',
    created_at: ago(minAgo), distance_m: Math.round(distKm * 1000),
  },
  photo: { listing_id: id, storage_path: `demo:${color}|${emoji}`, position: 0 },
});

const rows = [
  L('l1', 'u2', 'Katlanır bebek arabası, gri',
    'Tek elle katlanır. Fren ve kemerler sorunsuz çalışıyor. Yağmurluğu var. Ön tekerde hafif çizik.',
    2400, 'iyi', 2, 0.8, 1 * D + H, '#d9dee6', '🚼', 0, 36),
  L('l2', 'u3', 'Ahşap mama sandalyesi',
    'Yükseklik ayarlı, 5 noktalı kemer ve kilit sağlam. Tepsi yıkanabilir.',
    900, 'yeni_gibi', 3, 3.5, 2 * D, '#ffe9c7', '🪑', 6, 36),
  L('l3', 'u2', '0-6 ay body seti (7 adet)',
    'Pamuklu, çıtçıtlı. Yıkandı, ütülendi. Kordonlu parça yok.',
    250, 'iyi', 1, 0.8, 3 * H, '#ffd9e6', '👶', 0, 6),
  L('l4', 'u5', 'Ahşap oyun halısı + aktivite barı',
    'Tüm parçalar tam, küçük parça yok. 3 oyuncak asılı.',
    450, 'iyi', 4, 6.1, 4 * D, '#e2f5d3', '🧸', 3, 12),
  L('l5', 'u4', '6-12 ay tulum ve pantolon paketi (10 parça)',
    'Çoğu 2-3 kez giyildi. Kordonsuz.',
    350, 'iyi', 1, 4.8, 5 * D, '#fff1b8', '👕', 6, 12),
  L('l6', 'u3', 'Park yatak, katlanır',
    'Orijinal bağlantı parçaları ve çantası tam. Kırık veya boyası dökülmüş yer yok.',
    1100, 'iyi', 6, 3.5, 7 * D, '#d6f2ef', '🛏️', 0, 24),
  L('l7', 'u2', 'Silikon kaşık ve kâse seti',
    'Çatlak/çizik yok, bulaşık makinesinde yıkandı.',
    80, 'yeni_gibi', 5, 0.8, 2 * D, '#cfe8ff', '🥄', 6, 24),
  L('l8', 'u5', 'Tahta yap-boz ve blok seti',
    'Birkaç blokta renk solması var. Gelen alır.',
    0, 'orta', 4, 6.1, 20, '#ffd6cc', '🧩', 18, 48),
  L('l9', 'u1', 'Pamuklu uyku tulumu (6-18 ay, 2 adet)',
    'Fermuar sağlam.',
    300, 'yeni_gibi', 6, 0.2, 6 * D, '#e9dcff', '🌙', 6, 18),
  L('l10', 'u4', 'Duvar sticker seti',
    'Açılmamış kutu.',
    60, 'yeni_gibi', 7, 4.8, 3 * D, '#fde2f3', '⭐'),
  L('l11', 'u3', 'Taşıma kanguru, ergonomik',
    'Tokalar ve kemerler sağlam, yıkanabilir.',
    700, 'iyi', 7, 3.5, 2 * D, '#ffe3d1', '🎒', 0, 24),
  L('l12', 'u2', 'Kış montu 12-18 ay, lacivert',
    'Kapüşonlu ama kordonsuz. İki kez giyildi.',
    400, 'yeni_gibi', 1, 0.8, 8 * H, '#cdd8f5', '🧥', 12, 18),
];

export const listings = rows.map((r) => r.listing);
export const listingPhotos = rows.map((r) => r.photo);

export const conversations = [
  { id: 'c1', listing_id: 'l1', buyer_id: ME.id, seller_id: 'u2', created_at: ago(60) },
  { id: 'c2', listing_id: 'l9', buyer_id: 'u4', seller_id: ME.id, created_at: ago(3 * H) },
  { id: 'c3', listing_id: 'l8', buyer_id: ME.id, seller_id: 'u5', created_at: ago(15) },
];

let mid = 0;
const M = (c: string, from: string | null, body: string, minAgo: number, read: boolean) =>
  ({ id: ++mid, conversation_id: c, sender_id: from, body, created_at: ago(minAgo), read_at: read ? ago(minAgo - 1) : null });

// Okunmamış sayıları demo-veri.md §3'e göre (A=1, B=0, C=2). sender_id null = sistem notu.
export const messages = [
  // Senaryo A: alıcı, buluşma ayarlanır (ilan #1)
  M('c1', ME.id, 'Merhaba, araba hâlâ var mı?', 58, true),
  M('c1', 'u2', 'Merhaba, var! Bugün veya yarın uygun.', 55, true),
  M('c1', ME.id, 'Yarın 11:00 Kadıköy iskele önü olur mu?', 50, true),
  M('c1', null, '📍 Önerilen buluşma noktası: Kadıköy iskele önü, yarın 11:00. (Buluşma kartı yakında; şimdilik bilgi notu.)', 49, true),
  M('c1', 'u2', 'Olur, orada buluşalım. Ön tekerin çizik fotoğrafını atayım mı?', 45, false),
  M('c1', ME.id, 'Gerek yok, ilanda yazıyor. Görüşürüz!', 40, true),
  // Senaryo B: güvenlik uyarısı (ben satıcıyım, ilan #9)
  M('c2', 'u4', 'Merhaba, tulum hâlâ var mı? Kargo ile alabilir miyim?', 175, true),
  M('c2', ME.id, 'Merhaba, var. Kargo yapmıyorum, sadece elden teslim.', 170, true),
  M('c2', 'u4', 'Anladım. IBAN yazarsan önce ödeme yapayım, ayırırsın.', 165, true),
  M('c2', ME.id, 'Ödemeyi buluşmada yapalım, ön ödeme almıyorum.', 160, true),
  // Senaryo C: ücretsiz ilan (ilan #8)
  M('c3', ME.id, 'Merhaba, ücretsiz mi gerçekten?', 14, true),
  M('c3', 'u5', 'Evet, gelen alır. Bu hafta sonu uygun musun?', 12, false),
  M('c3', ME.id, 'Cumartesi öğleden sonra olur. Maltepe tarafına gelmem gerekir mi?', 10, true),
  M('c3', 'u5', 'Ben Kadıköy’e gelirim, sahil tarafı iyi olur.', 8, false),
  M('c3', ME.id, 'Harika, teşekkürler!', 6, true),
];
export const nextMessageId = () => ++mid;
