import { supabase } from '../lib/supabase';
import { photoPublicUrl } from '../listings/api';

export interface Message {
  id: number; conversation_id: string; sender_id: string | null /* null = sistem notu */; body: string;
  created_at: string; read_at: string | null;
}
export interface ConversationInfo {
  id: string; listing_id: string; buyer_id: string; seller_id: string;
  listing: { title: string | null; price_try: number; status: string } | null;
  photo_url: string | null; other_name: string | null;
}

export type SendError = 'blocked' | 'rate' | 'unverified' | 'unknown';

export function classifySendError(e: { code?: string; message?: string } | null): SendError {
  if (!e) return 'unknown';
  if (e.code === 'P0001') return 'rate';
  if (e.code === '42501') return 'blocked'; // RLS ihlali: engel, doğrulanmamış hesap ya da kapalı ilan
  return 'unknown';
}

/** İlana bağlı sohbeti bulur ya da alıcı olarak açar (unique(listing_id,buyer_id)). */
export async function getOrCreateConversation(listingId: string, sellerId: string): Promise<string> {
  const { data: u } = await supabase.auth.getUser();
  if (!u.user) throw new Error('Giriş gerekli');
  if (u.user.id === sellerId) throw new Error('Kendi ilanına mesaj yazamazsın');
  const find = () => supabase.from('conversations').select('id')
    .eq('listing_id', listingId).eq('buyer_id', u.user!.id).maybeSingle();
  const ex = await find();
  if (ex.data) return ex.data.id as string;
  const ins = await supabase.from('conversations')
    .insert({ listing_id: listingId, buyer_id: u.user.id, seller_id: sellerId })
    .select('id').single();
  if (ins.error) {
    if (ins.error.code === '23505') { const again = await find(); if (again.data) return again.data.id as string; }
    throw ins.error;
  }
  return ins.data.id as string;
}

export async function getConversation(id: string): Promise<ConversationInfo | null> {
  const { data: u } = await supabase.auth.getUser();
  const { data: c, error } = await supabase.from('conversations')
    .select('id,listing_id,buyer_id,seller_id').eq('id', id).maybeSingle();
  if (error) throw error;
  if (!c) return null;
  const otherId = c.buyer_id === u.user?.id ? c.seller_id : c.buyer_id;
  const [l, p, ph] = await Promise.all([
    supabase.from('listings').select('title,price_try,status').eq('id', c.listing_id).maybeSingle(),
    supabase.from('profiles').select('display_name').eq('id', otherId).maybeSingle(),
    supabase.from('listing_photos').select('storage_path').eq('listing_id', c.listing_id)
      .order('position').limit(1),
  ]);
  const path = ph.data?.[0]?.storage_path as string | undefined;
  return {
    ...c, listing: l.data ?? null, other_name: p.data?.display_name ?? null,
    photo_url: path ? photoPublicUrl(path) : null,
  } as ConversationInfo;
}

export async function listMessages(conversationId: string, limit = 100): Promise<Message[]> {
  const { data, error } = await supabase.from('messages').select('*')
    .eq('conversation_id', conversationId).order('created_at', { ascending: false }).limit(limit);
  if (error) throw error;
  return ((data ?? []) as Message[]).reverse();
}

export async function sendMessage(conversationId: string, body: string): Promise<Message> {
  const { data: u } = await supabase.auth.getUser();
  if (!u.user) throw new Error('Giriş gerekli');
  const text = body.trim().slice(0, 2000);
  if (!text) throw new Error('Boş mesaj');
  const { data, error } = await supabase.from('messages')
    .insert({ conversation_id: conversationId, sender_id: u.user.id, body: text }).select('*').single();
  if (error) throw Object.assign(new Error(error.message), { kind: classifySendError(error) });
  return data as Message;
}

/** Karşı tarafın okunmamış mesajlarını okundu yapar (RLS: yalnız karşı taraf, yalnız read_at). */
export async function markRead(conversationId: string, myId: string) {
  await supabase.from('messages').update({ read_at: new Date().toISOString() })
    .eq('conversation_id', conversationId).neq('sender_id', myId).is('read_at', null);
}

/** Gerçek zamanlı yeni mesaj aboneliği (RLS yayında geçerli). Dönen fonksiyon aboneliği kapatır. */
export function subscribeMessages(conversationId: string, onMessage: (m: Message) => void): () => void {
  const ch = supabase.channel(`conv:${conversationId}`)
    .on('postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'messages', filter: `conversation_id=eq.${conversationId}` },
      (p) => onMessage(p.new as Message))
    .subscribe();
  return () => { supabase.removeChannel(ch); };
}

/** K8: iki taraf da mesajlaşabilir durumda mı? (neden/süre dönmez) */
export async function canMessage(conversationId: string): Promise<boolean> {
  const { data, error } = await supabase.rpc('can_message', { conv: conversationId });
  if (error) return true; // sunucu RLS zaten reddeder; UI iyimser kalır
  return data === true;
}

/** Mesajda telefon/IBAN var mı? Uyarı içindir, engellemez (MVP F4). */
export function detectSensitive(text: string): 'iban' | 'phone' | null {
  const t = text.replace(/[\s.\-()]/g, '');
  if (/TR\d{2}\d{5}[0-9A-Z]{17}/i.test(t) || /\bTR\d{10,}/i.test(t)) return 'iban';
  if (/(\+?90|0)?5\d{9}/.test(t)) return 'phone';
  return null;
}
