import { supabase } from '../lib/supabase';

export interface InboxItem {
  conversation_id: string; listing_id: string; listing_title: string | null; other_name: string | null;
  last_body: string | null; last_at: string; last_sender: string | null;
  unread_count: number; can_message: boolean;
}

/** Sohbet listesi (my_inbox RPC, RLS geçerli). Son mesaj yeni -> eski. */
export async function listInbox(): Promise<InboxItem[]> {
  const { data, error } = await supabase.rpc('my_inbox');
  if (error) throw error;
  return ((data ?? []) as InboxItem[]).map((r) => ({ ...r, unread_count: Number(r.unread_count) }));
}

/** Yeni mesaj gelince listeyi tazelemek için (RLS yayında geçerli). */
export function subscribeInbox(onChange: () => void): () => void {
  const ch = supabase.channel('inbox')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, onChange)
    .subscribe();
  return () => { supabase.removeChannel(ch); };
}

export function formatWhen(iso: string, now = new Date()): string {
  const d = new Date(iso);
  if (d.toDateString() === now.toDateString())
    return d.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
  return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });
}
