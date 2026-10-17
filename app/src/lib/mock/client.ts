// Supabase'in kullandığımız küçük alt kümesinin bellek-içi taklidi (demo modu).
// Sayfa yenilenince veri sıfırlanır. Yalnız EXPO_PUBLIC_SUPABASE_* tanımsızken kullanılır.
import { conversations, ME, listingPhotos, listings, messages, nextMessageId, profiles } from './seed';

type Row = Record<string, any>;
type Result = { data: any; error: { code?: string; message: string } | null };

const db: Record<string, Row[]> = {
  listings: listings.map((l) => ({ ...l })),
  listing_photos: listingPhotos.map((p) => ({ ...p })),
  profiles: profiles.map((p) => ({ ...p })),
  conversations: conversations.map((c) => ({ ...c })),
  messages: messages.map((m) => ({ ...m })),
  blocks: [], reports: [], appeals: [],
};

const uploaded = new Map<string, string>();
let seq = 0;
const uid = (p: string) => `${p}-${Date.now().toString(36)}${(seq++).toString(36)}`;

// ---- Gerçek zamanlı taklit ----
type Listener = { table: string; cb: (p: { new: Row }) => void; filter?: string };
const listeners = new Set<Listener>();
function emit(table: string, row: Row) {
  listeners.forEach((l) => {
    if (l.table !== table) return;
    if (l.filter) { const [k, v] = l.filter.split('=eq.'); if (String(row[k]) !== v) return; }
    l.cb({ new: row });
  });
}

// ---- Sorgu oluşturucu ----
class Query implements PromiseLike<Result> {
  private op: 'select' | 'insert' | 'update' | 'delete' | 'upsert' = 'select';
  private filters: ((r: Row) => boolean)[] = [];
  private payload: any; private ord?: { col: string; asc: boolean }; private lim?: number;
  private one: 'single' | 'maybe' | null = null;
  constructor(private table: string) {}

  select() { return this; } // insert/update sonrası select: satırlar zaten döner
  insert(p: any) { this.op = 'insert'; this.payload = p; return this; }
  upsert(p: any) { this.op = 'upsert'; this.payload = p; return this; }
  update(p: any) { this.op = 'update'; this.payload = p; return this; }
  delete() { this.op = 'delete'; return this; }
  eq(c: string, v: any) { this.filters.push((r) => r[c] === v); return this; }
  neq(c: string, v: any) { this.filters.push((r) => r[c] !== v); return this; }
  is(c: string, v: any) { this.filters.push((r) => (r[c] ?? null) === v); return this; }
  in(c: string, vs: any[]) { this.filters.push((r) => vs.includes(r[c])); return this; }
  limit(n: number) { this.lim = n; return this; }
  order(col: string, o?: { ascending?: boolean }) { this.ord = { col, asc: o?.ascending !== false }; return this; }
  single() { this.one = 'single'; return this; }
  maybeSingle() { this.one = 'maybe'; return this; }

  private run(): Result {
    const rows = db[this.table] ?? (db[this.table] = []);
    const match = (r: Row) => this.filters.every((f) => f(r));
    let out: Row[] = [];
    if (this.op === 'insert' || this.op === 'upsert') {
      for (const p of ([] as Row[]).concat(this.payload)) {
        const row = this.build(p);
        if (this.op === 'upsert') {
          const dup = rows.find((r) => r.blocker_id === row.blocker_id && r.blocked_id === row.blocked_id);
          if (dup) { out.push(dup); continue; }
        } else if (this.table === 'conversations'
          && rows.some((r) => r.listing_id === row.listing_id && r.buyer_id === row.buyer_id)) {
          return { data: null, error: { code: '23505', message: 'duplicate' } };
        } else if (this.table === 'reports' && rows.some((r) => r.reporter_id === row.reporter_id
          && r.listing_id === row.listing_id && r.reported_user_id === row.reported_user_id
          && r.message_id === row.message_id)) {
          return { data: null, error: { code: '23505', message: 'duplicate' } };
        }
        rows.push(row); out.push(row);
        if (this.table === 'messages') { emit('messages', row); botReply(row); }
      }
    } else if (this.op === 'update') {
      out = rows.filter(match); out.forEach((r) => Object.assign(r, this.payload));
    } else if (this.op === 'delete') {
      out = rows.filter(match);
      db[this.table] = rows.filter((r) => !match(r));
      if (this.table === 'listings') {
        db.listing_photos = db.listing_photos.filter((p) => !out.some((l) => l.id === p.listing_id));
      }
    } else {
      out = rows.filter(match);
      if (this.ord) {
        const { col, asc } = this.ord;
        out = [...out].sort((a, b) => (a[col] < b[col] ? -1 : a[col] > b[col] ? 1 : 0) * (asc ? 1 : -1));
      }
      if (this.lim != null) out = out.slice(0, this.lim);
    }
    out = out.map((r) => ({ ...r }));
    if (this.one) {
      if (out.length === 0) {
        return this.one === 'maybe' ? { data: null, error: null }
          : { data: null, error: { code: 'PGRST116', message: 'satır yok' } };
      }
      return { data: out[0], error: null };
    }
    return { data: out, error: null };
  }

  private build(p: Row): Row {
    const now = new Date().toISOString();
    if (this.table === 'listings') return { status: 'aktif', created_at: now, distance_m: 300, ...p, id: uid('l') };
    if (this.table === 'conversations') return { created_at: now, ...p, id: uid('c') };
    if (this.table === 'messages') return { read_at: null, created_at: now, ...p, id: nextMessageId() };
    return { created_at: now, ...p };
  }

  then<A = Result, B = never>(
    ok?: ((v: Result) => A | PromiseLike<A>) | null,
    bad?: ((e: any) => B | PromiseLike<B>) | null,
  ) {
    return Promise.resolve().then(() => this.run()).then(ok, bad);
  }
}

// Satıcı otomatik cevap (demo canlı hissi).
function botReply(m: Row) {
  if (m.sender_id !== ME.id) return;
  const conv = db.conversations.find((c) => c.id === m.conversation_id);
  if (!conv || conv.buyer_id !== ME.id) return;
  setTimeout(() => {
    const row = {
      id: nextMessageId(), conversation_id: conv.id, sender_id: conv.seller_id,
      body: 'Tamamdır, uygun olduğumda yazarım 🙂', created_at: new Date().toISOString(), read_at: null,
    };
    db.messages.push(row); emit('messages', row);
  }, 1500);
}

// ---- RPC'ler ----
const blockedByMe = () => db.blocks.filter((b) => b.blocker_id === ME.id).map((b) => b.blocked_id);

function rpc(name: string, a: Row): Result {
  if (name === 'nearby_listings') {
    const blocked = blockedByMe();
    const q = a.p_query ? String(a.p_query).toLocaleLowerCase('tr') : null;
    const off = a.p_offset ?? 0;
    const data = db.listings
      .filter((l) => l.status === 'aktif' && !blocked.includes(l.seller_id)
        && l.distance_m <= (a.radius_km ?? 5) * 1000
        && (a.p_category == null || l.category_id === a.p_category)
        && (a.p_min_price == null || l.price_try >= a.p_min_price)
        && (a.p_max_price == null || l.price_try <= a.p_max_price)
        && (a.p_age_months == null
          || ((l.age_min_months ?? 0) <= a.p_age_months && a.p_age_months <= (l.age_max_months ?? 999)))
        && (!q || `${l.title ?? ''} ${l.description ?? ''}`.toLocaleLowerCase('tr').includes(q)))
      .sort((x, y) => x.distance_m - y.distance_m)
      .slice(off, off + (a.p_limit ?? 30))
      .map(({ id, title, price_try, condition, category_id, distance_m, created_at }) =>
        ({ id, title, price_try, condition, category_id, distance_m, created_at }));
    return { data, error: null };
  }
  if (name === 'my_inbox') {
    const data = db.conversations.filter((c) => c.buyer_id === ME.id || c.seller_id === ME.id).map((c) => {
      const ms = db.messages.filter((m) => m.conversation_id === c.id)
        .sort((x, y) => (x.created_at < y.created_at ? 1 : -1));
      const other = c.buyer_id === ME.id ? c.seller_id : c.buyer_id;
      return {
        conversation_id: c.id, listing_id: c.listing_id,
        listing_title: db.listings.find((l) => l.id === c.listing_id)?.title ?? null,
        other_name: db.profiles.find((p) => p.id === other)?.display_name ?? null,
        last_body: ms[0]?.body ?? null, last_at: ms[0]?.created_at ?? c.created_at,
        last_sender: ms[0]?.sender_id ?? null,
        unread_count: ms.filter((m) => m.sender_id !== ME.id && !m.read_at).length,
        can_message: !blockedByMe().includes(other),
      };
    }).sort((x, y) => (x.last_at < y.last_at ? 1 : -1));
    return { data, error: null };
  }
  if (name === 'can_message') return { data: true, error: null };
  return { data: null, error: { message: `mock: bilinmeyen rpc ${name}` } };
}

// ---- Auth ----
type Sess = { user: { id: string; email: string } } | null;
let session: Sess = null;
const authCbs = new Set<(e: string, s: Sess) => void>();
const setSession = (s: Sess) => {
  session = s;
  authCbs.forEach((cb) => cb(s ? 'SIGNED_IN' : 'SIGNED_OUT', s));
};
const login = async () => { setSession({ user: ME }); return { data: { session }, error: null }; };

export function createMockClient() {
  return {
    from: (t: string) => new Query(t),
    rpc: (n: string, a: Row = {}) => Promise.resolve(rpc(n, a)),
    auth: {
      getSession: async () => ({ data: { session } }),
      getUser: async () => ({ data: { user: session?.user ?? null } }),
      onAuthStateChange: (cb: (e: string, s: Sess) => void) => {
        authCbs.add(cb);
        return { data: { subscription: { unsubscribe: () => authCbs.delete(cb) } } };
      },
      signInWithPassword: login, signUp: login, signInWithIdToken: login,
      signOut: async () => { setSession(null); return { error: null }; },
    },
    storage: {
      from: () => ({
        upload: async (path: string, body: ArrayBuffer) => {
          try { uploaded.set(path, URL.createObjectURL(new Blob([body], { type: 'image/jpeg' }))); } catch { /* yoksay */ }
          return { error: null };
        },
        remove: async (paths: string[]) => { paths.forEach((p) => uploaded.delete(p)); return { error: null }; },
        getPublicUrl: (path: string) => ({ data: { publicUrl: mockPhotoUrl(path) } }),
      }),
    },
    channel: () => {
      const mine: Listener[] = [];
      const ch: any = {
        on: (_t: string, f: { table: string; filter?: string }, cb: Listener['cb']) => {
          const l = { table: f.table, filter: f.filter, cb }; mine.push(l); listeners.add(l); return ch;
        },
        subscribe: () => ch, _mine: mine,
      };
      return ch;
    },
    removeChannel: (ch: any) => { (ch._mine as Listener[]).forEach((l) => listeners.delete(l)); },
  };
}

function mockPhotoUrl(path: string): string {
  if (uploaded.has(path)) return uploaded.get(path)!;
  const [color, emoji] = path.startsWith('demo:') ? path.slice(5).split('|') : ['#e5e5e5', '📷'];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="${color}"/>`
    + `<text x="200" y="240" font-size="160" text-anchor="middle">${emoji}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
