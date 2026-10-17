import { supabase } from '../lib/supabase';

export type ReportCategory = 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6' | 'C7';

export const REPORT_CATEGORIES: { code: ReportCategory; label: string }[] = [
  { code: 'C1', label: 'Çocuğa ait görüntü / istismar şüphesi' },
  { code: 'C2', label: 'Geri çağrılan veya güvensiz ürün' },
  { code: 'C3', label: 'Taciz, tehdit veya güvenlik sorunu' },
  { code: 'C4', label: 'Dolandırıcılık (IBAN, ön ödeme)' },
  { code: 'C5', label: 'Sahte / taklit ürün' },
  { code: 'C6', label: 'Sahte ilan, spam, yanlış kategori' },
  { code: 'C7', label: 'Diğer' },
];

export type ReportTarget =
  | { type: 'listing'; id: string }
  | { type: 'user'; id: string }
  | { type: 'message'; id: number };

export async function blockUser(blockedId: string) {
  const { data: u } = await supabase.auth.getUser();
  if (!u.user) throw new Error('Giriş gerekli');
  const { error } = await supabase.from('blocks')
    .upsert({ blocker_id: u.user.id, blocked_id: blockedId }, { onConflict: 'blocker_id,blocked_id' });
  if (error) throw error;
}

export async function unblockUser(blockedId: string) {
  const { error } = await supabase.from('blocks').delete().eq('blocked_id', blockedId);
  if (error) throw error; // RLS yalnız kendi engellerini siler
}

export async function myBlocks(): Promise<string[]> {
  const { data, error } = await supabase.from('blocks').select('blocked_id');
  if (error) throw error;
  return (data ?? []).map((b) => b.blocked_id as string);
}

/** Şikâyet gönderir. Aynı nesneye ikinci şikâyet unique ihlaliyle reddedilir (23505). */
export async function submitReport(p: {
  target: ReportTarget; category: ReportCategory; details?: string;
  alsoBlockUserId?: string;
}): Promise<'sent' | 'duplicate'> {
  const { data: u } = await supabase.auth.getUser();
  if (!u.user) throw new Error('Giriş gerekli');
  const row = {
    reporter_id: u.user.id,
    category: p.category,
    details: p.details?.trim().slice(0, 1000) || null,
    also_blocked: !!p.alsoBlockUserId,
    listing_id: p.target.type === 'listing' ? p.target.id : null,
    reported_user_id: p.target.type === 'user' ? p.target.id : null,
    message_id: p.target.type === 'message' ? p.target.id : null,
  };
  const { error } = await supabase.from('reports').insert(row);
  if (error && error.code !== '23505') throw error;
  if (p.alsoBlockUserId) await blockUser(p.alsoBlockUserId);
  return error ? 'duplicate' : 'sent';
}

export async function submitAppeal(actionId: string, text: string) {
  const { data: u } = await supabase.auth.getUser();
  if (!u.user) throw new Error('Giriş gerekli');
  const { error } = await supabase.from('appeals').insert({ action_id: actionId, user_id: u.user.id, text });
  if (error) throw error;
}
