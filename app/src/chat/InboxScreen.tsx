import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, Text, View } from 'react-native';
import { supabase } from '../lib/supabase';
import { formatWhen, listInbox, subscribeInbox, type InboxItem } from './inbox';

const MIN = 48;

export function InboxScreen({ onOpen }: { onOpen: (conversationId: string) => void }) {
  const [items, setItems] = useState<InboxItem[]>([]);
  const [state, setState] = useState<'loading' | 'ok' | 'error'>('loading');
  const [me, setMe] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const { data } = await supabase.auth.getUser();
      setMe(data.user?.id ?? null);
      setItems(await listInbox()); setState('ok');
    } catch { setState('error'); }
  }, []);

  useEffect(() => { load(); return subscribeInbox(load); }, [load]);

  const header = (
    <Text accessibilityRole="header" style={{ fontSize: 22, fontWeight: '700', padding: 16, paddingTop: 48 }}>Mesajlar</Text>
  );
  if (state === 'loading') return <View style={{ flex: 1 }}>{header}<ActivityIndicator /></View>;
  if (state === 'error') {
    return (
      <View style={{ flex: 1 }}>{header}
        <View style={{ padding: 24, gap: 12 }}>
          <Text accessibilityRole="alert">⚠ Mesajlar yüklenemedi. Bağlantını kontrol et.</Text>
          <Pressable onPress={load} accessibilityRole="button" style={{ minHeight: MIN, justifyContent: 'center' }}>
            <Text style={{ fontWeight: '700' }}>Tekrar dene</Text></Pressable>
        </View>
      </View>);
  }
  return (
    <View style={{ flex: 1 }}>
      {header}
      <FlatList
        data={items}
        keyExtractor={(i) => i.conversation_id}
        ListEmptyComponent={<Text style={{ padding: 24 }}>Henüz mesajın yok. Bir ilanda mesaj yazarak başla.</Text>}
        renderItem={({ item }) => {
          const unread = item.unread_count > 0;
          const mine = item.last_sender === me;
          return (
            <Pressable onPress={() => onOpen(item.conversation_id)} accessibilityRole="button"
              accessibilityLabel={`${item.other_name ?? 'Kullanıcı'}, ${item.listing_title ?? 'ilan'}${unread ? `, ${item.unread_count} okunmamış` : ''}`}
              style={{ minHeight: 64, padding: 12, borderBottomWidth: 1, borderColor: '#ddd', flexDirection: 'row', gap: 8 }}>
              <View style={{ flex: 1 }}>
                <Text numberOfLines={1} style={{ fontWeight: unread ? '700' : '400' }}>{item.other_name ?? 'Kullanıcı'}</Text>
                <Text numberOfLines={1} style={{ color: '#555' }}>{item.listing_title ?? 'İlan'}</Text>
                <Text numberOfLines={1} style={{ fontWeight: unread ? '700' : '400' }}>
                  {item.last_body ? `${mine ? 'Sen: ' : ''}${item.last_body}` : 'Henüz mesaj yok'}
                </Text>
                {!item.can_message && <Text style={{ color: '#777' }}>Bu kullanıcı şu an mesajlaşamıyor</Text>}
              </View>
              <View style={{ alignItems: 'flex-end', gap: 4 }}>
                <Text>{formatWhen(item.last_at)}</Text>
                {unread && (
                  <View style={{ backgroundColor: '#d33', borderRadius: 12, minWidth: 24, paddingHorizontal: 6, alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontWeight: '700' }}>{item.unread_count > 99 ? '99+' : item.unread_count}</Text>
                  </View>)}
              </View>
            </Pressable>);
        }}
      />
    </View>
  );
}
