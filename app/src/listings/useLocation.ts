import { useEffect, useSyncExternalStore } from 'react';
import * as Location from 'expo-location';
import { MOCK, supabase } from '../lib/supabase';

// Konum rızası (docs/hukuk/sozlesme-taslak.md Bölüm C): izin istemeden ÖNCE ayrı ekran; "Şimdi değil" zorunlu hizmeti
// kesmez, kullanıcı ilçe seçerek devam eder. Rıza zamanı + sürüm profiles'a yazılır (migration 0007).
export const LOCATION_CONSENT_VERSION = 1;

export type LocState = 'loading' | 'consent' | 'district' | 'ready';
export interface Coords { lat: number; lng: number }

// İlçe merkezleri YAKLAŞIKTIR (ilçe düzeyi yeter; tam adres tutulmaz). TEYİT: pilot öncesi harita ile kontrol.
export const DISTRICTS: { name: string; lat: number; lng: number }[] = [
  { name: 'Kadıköy', lat: 40.99, lng: 29.03 }, { name: 'Ataşehir', lat: 40.99, lng: 29.13 },
  { name: 'Üsküdar', lat: 41.02, lng: 29.02 }, { name: 'Maltepe', lat: 40.93, lng: 29.13 },
  { name: 'Kartal', lat: 40.91, lng: 29.19 }, { name: 'Beşiktaş', lat: 41.04, lng: 29.01 },
  { name: 'Şişli', lat: 41.06, lng: 28.99 },
];

interface Store { state: LocState; coords: Coords | null; district: string | null; denied: boolean }
let store: Store = MOCK
  // Demo: izin/GPS bağımlılığı demoyu bozmasın; sabit Kadıköy civarı.
  ? { state: 'ready', coords: { lat: 40.99, lng: 29.03 }, district: null, denied: false }
  : { state: 'loading', coords: null, district: null, denied: false };
const subs = new Set<() => void>();
const set = (p: Partial<Store>) => { store = { ...store, ...p }; subs.forEach((f) => f()); };
const subscribe = (f: () => void) => { subs.add(f); return () => { subs.delete(f); }; };

let started = false;
async function start() {
  if (started || MOCK) return;
  started = true;
  try {
    const { data: u } = await supabase.auth.getUser();
    const { data: p } = await supabase.from('profiles').select('consent_location_at').eq('id', u.user?.id ?? '').maybeSingle();
    if (!p?.consent_location_at) return set({ state: 'consent' });
    await locate();
  } catch { set({ state: 'consent' }); }
}

async function locate() {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') return set({ state: 'district', denied: true });
  const pos = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
  set({ state: 'ready', coords: { lat: pos.coords.latitude, lng: pos.coords.longitude }, denied: false });
}

/** "İzin ver": rızayı kaydet, sonra sistem iznini iste. */
export async function acceptLocation() {
  const { data: u } = await supabase.auth.getUser();
  if (u.user) {
    await supabase.from('profiles').update({
      consent_location_at: new Date().toISOString(), consent_location_version: LOCATION_CONSENT_VERSION,
    }).eq('id', u.user.id);
  }
  try { await locate(); } catch { set({ state: 'district', denied: true }); }
}

/** "Şimdi değil": rıza kaydedilmez, ilçe seçimine geç (hata değildir). */
export const declineLocation = () => set({ state: 'district' });

export function chooseDistrict(name: string) {
  const d = DISTRICTS.find((x) => x.name === name);
  if (d) set({ state: 'ready', coords: { lat: d.lat, lng: d.lng }, district: d.name });
}

/** Konum ekranına geri dön (ilçe değiştir). */
export const changeLocation = () => set({ state: store.denied ? 'district' : 'consent' });

export function useLocation() {
  const s = useSyncExternalStore(subscribe, () => store, () => store);
  useEffect(() => { void start(); }, []);
  return { coords: s.coords, denied: s.denied, state: s.state, district: s.district };
}
