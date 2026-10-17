import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator, Alert, FlatList, Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View,
} from 'react-native';
import { supabase } from '../lib/supabase';
import { blockUser, type ReportTarget } from '../safety/api';
import { ReportScreen } from '../safety/ReportScreen';
import {
  canMessage, detectSensitive, getConversation, listMessages, markRead, sendMessage, subscribeMessages,
  type ConversationInfo, type Message,
} from './api';

interface Props {
  conversationId: string;
  onBack: () => void;
  onOpenListing?: (listingId: string) => void;
}

const MIN = 48;
const CHIPS = ['Hâlâ var mı?', 'Bugün uygun', 'Buluşalım mı?'];

export function ChatScreen({ conversationId, onBack, onOpenListing }: Props) {
  const [me, setMe] = useState<string | null>(null);
  const [conv, setConv] = useState<ConversationInfo | null>(null);
  const [msgs, setMsgs] = useState<Message[]>([]);
  const [state, setState] = useState<'loading' | 'ok' | 'error'>('loading');
  const [text, setText] = useState('');
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [menu, setMenu] = useState(false);
  const [report, setReport] = useState<{ target: ReportTarget; ownerId?: string } | null>(null);
  const [safetyCard, setSafetyCard] = useState(true);
  const [canWrite, setCanWrite] = useState(true); // K8: askı/ban -> salt okunur
  const listRef = useRef<FlatList<Message>>(null);

  const addMsg = useCallback((m: Message) =>
    setMsgs((prev) => (prev.some((x) => x.id === m.id) ? prev : [...prev, m])), []);

  const load = useCallback(async () => {
    setState('loading');
    try {
      const { data } = await supabase.auth.getUser();
      const uid = data.user?.id ?? null;
      setMe(uid);
      const [c, m] = await Promise.all([getConversation(conversationId), listMessages(conversationId)]);
      if (!c) { setState('error'); return; }
      setConv(c); setMsgs(m); setState('ok');
      canMessage(conversationId).then(setCanWrite).catch(() => {});
      if (uid) markRead(conversationId, uid).catch(() => {});
    } catch { setState('error'); }
  }, [conversationId]);

  useEffect(() => { load(); }, [load]);
  useEffect(() => {
    const off = subscribeMessages(conversationId, (m) => {
      addMsg(m);
      if (me && m.sender_id !== me) markRead(conversationId, me).catch(() => {});
    });
    return off;
  }, [conversationId, me, addMsg]);

  const other = conv ? (conv.buyer_id === me ? conv.seller_id : conv.buyer_id) : undefined;
  const warn = detectSensitive(text);

  async function send(body: string) {
    if (sending || !body.trim()) return;
    setSending(true); setErr(null);
    try {
      const m = await sendMessage(conversationId, body);
      addMsg(m); setText('');
    } catch (e) {
      const kind = (e as { kind?: string }).kind;
      setErr(kind === 'rate' ? 'Çok hızlı mesaj gönderdin. Biraz bekle.'
        : kind === 'blocked' ? 'Bu kullanıcıya şu an mesaj gönderemezsin.'
        : 'Mesaj gönderilemedi. Bağlantını kontrol edip tekrar dene.');
    } finally { setSending(false); }
  }

  function confirmBlock() {
    if (!other) return;
    Alert.alert('Kullanıcıyı engelle', 'Bu kullanıcıdan mesaj almayacaksın ve ona mesaj gönderemeyeceksin. Ona bildirim gitmez.', [
      { text: 'Vazgeç', style: 'cancel' },
      { text: 'Engelle', style: 'destructive', onPress: async () => {
        try { await blockUser(other); onBack(); } catch { Alert.alert('Engellenemedi', 'Tekrar dene.'); }
      } },
    ]);
  }

  if (report) {
    return <ReportScreen target={report.target} ownerId={report.ownerId} onDone={() => setReport(null)} />;
  }

  const header = (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 48, paddingHorizontal: 8 }}>
      <Pressable onPress={onBack} accessibilityRole="button" accessibilityLabel="Geri"
        style={{ minHeight: MIN, minWidth: MIN, justifyContent: 'center' }}><Text>‹ Geri</Text></Pressable>
      {state === 'ok' && (
        <Pressable onPress={() => setMenu((v) => !v)} accessibilityRole="button" accessibilityLabel="Daha fazla"
          style={{ minHeight: MIN, minWidth: MIN, justifyContent: 'center', alignItems: 'flex-end' }}>
          <Text>⋯</Text></Pressable>)}
    </View>
  );

  if (state === 'loading') return <View style={{ flex: 1 }}>{header}<ActivityIndicator style={{ marginTop: 48 }} /></View>;
  if (state === 'error' || !conv) {
    return (
      <View style={{ flex: 1 }}>{header}
        <View style={{ padding: 24, gap: 12 }}>
          <Text accessibilityRole="alert">⚠ Sohbet yüklenemedi. Bağlantını kontrol et.</Text>
          <Pressable onPress={load} accessibilityRole="button" style={{ minHeight: MIN, justifyContent: 'center' }}>
            <Text style={{ fontWeight: '700' }}>Tekrar dene</Text></Pressable>
        </View>
      </View>);
  }

  const l = conv.listing;
  const closed = !l || l.status === 'verildi' || l.status === 'gizli';

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {header}
      {menu && (
        <View accessibilityRole="menu" style={{ paddingHorizontal: 16 }}>
          <Pressable accessibilityRole="menuitem" style={{ minHeight: MIN, justifyContent: 'center' }}
            onPress={() => { setMenu(false); confirmBlock(); }}><Text>Engelle</Text></Pressable>
          <Pressable accessibilityRole="menuitem" style={{ minHeight: MIN, justifyContent: 'center' }}
            onPress={() => { setMenu(false); if (other) setReport({ target: { type: 'user', id: other }, ownerId: other }); }}>
            <Text>Şikâyet et</Text></Pressable>
        </View>)}

      <Pressable onPress={() => onOpenListing?.(conv.listing_id)} accessibilityRole="button"
        accessibilityLabel="İlana git"
        style={{ flexDirection: 'row', gap: 12, padding: 12, minHeight: MIN, borderBottomWidth: 1, borderColor: '#ddd' }}>
        {conv.photo_url
          ? <Image source={{ uri: conv.photo_url }} style={{ width: 48, height: 48 }} accessibilityLabel="İlan fotoğrafı" />
          : <View style={{ width: 48, height: 48, backgroundColor: '#eee' }} />}
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={{ fontWeight: '700' }}>{l?.title ?? 'İlan'}</Text>
          <Text>
            {l ? (l.price_try === 0 ? 'Ücretsiz' : `${l.price_try.toLocaleString('tr-TR')} ₺`) : ''}
            {l?.status === 'verildi' ? ' · Verildi' : l?.status === 'rezerve' ? ' · Rezerve' : ''}
            {conv.other_name ? ` · ${conv.other_name}` : ''}
          </Text>
        </View>
      </Pressable>

      {safetyCard && (
        <View style={{ backgroundColor: '#fff6d6', padding: 12 }} accessibilityRole="summary">
          <Text>Ödemeyi ve ürün kontrolünü buluşmada yap. Ön ödeme veya IBAN isteyenlere güvenme.
            Halka açık, kalabalık bir yerde buluş.</Text>
          <Pressable onPress={() => setSafetyCard(false)} accessibilityRole="button"
            style={{ minHeight: MIN, justifyContent: 'center' }}><Text style={{ fontWeight: '700' }}>Anladım</Text></Pressable>
        </View>)}

      <FlatList ref={listRef} data={msgs} keyExtractor={(m) => String(m.id)} style={{ flex: 1 }}
        contentContainerStyle={{ padding: 12, gap: 8 }}
        onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: false })}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 24 }}>Henüz mesaj yok. Bir hızlı yanıt seç ya da yaz.</Text>}
        renderItem={({ item: m }) => {
          const mine = m.sender_id === me;
          return (
            <Pressable
              onLongPress={() => !mine && Alert.alert('Mesaj', undefined, [
                { text: 'Vazgeç', style: 'cancel' },
                { text: 'Mesajı şikâyet et', onPress: () => setReport({ target: { type: 'message', id: m.id }, ownerId: m.sender_id }) },
              ])}
              accessibilityLabel={`${mine ? 'Sen' : 'Karşı taraf'}: ${m.body}`}
              style={{ alignSelf: mine ? 'flex-end' : 'flex-start', maxWidth: '80%', padding: 10,
                backgroundColor: mine ? '#dff0ff' : '#eee' }}>
              <Text>{m.body}</Text>
              <Text style={{ fontSize: 12, color: '#555' }}>
                {new Date(m.created_at).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                {mine && m.read_at ? ' · Okundu' : ''}
              </Text>
            </Pressable>);
        }} />

      {!canWrite ? (
        <View style={{ padding: 16 }} accessibilityRole="alert">
          <Text>Bu kullanıcı şu an mesajlaşamıyor. Sohbet salt okunur.</Text></View>
      ) : closed ? (
        <View style={{ padding: 16 }}><Text>Bu ilan artık yayında değil; yeni mesaj gönderilemez.</Text></View>
      ) : (
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, padding: 8 }}>
            {CHIPS.map((c) => (
              <Pressable key={c} onPress={() => send(c)} accessibilityRole="button" disabled={sending}
                style={{ minHeight: MIN, justifyContent: 'center', paddingHorizontal: 16, borderWidth: 1, borderColor: '#999' }}>
                <Text>{c}</Text></Pressable>))}
          </ScrollView>
          {warn && (
            <View style={{ backgroundColor: '#fff6d6', padding: 8 }} accessibilityRole="alert">
              <Text>{warn === 'iban'
                ? 'IBAN paylaşma ya da isteme. Ödemeyi buluşmada yap.'
                : 'Telefon numarası paylaşmak zorunda değilsin. Mesajlar uygulamada kalsın.'}</Text>
            </View>)}
          {err && <Text accessibilityRole="alert" style={{ padding: 8 }}>⚠ {err}</Text>}
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', padding: 8, gap: 8 }}>
            <TextInput value={text} onChangeText={setText} multiline maxLength={2000} placeholder="Mesaj yaz"
              accessibilityLabel="Mesaj yaz" style={{ flex: 1, minHeight: MIN, borderWidth: 1, borderColor: '#999', padding: 8 }} />
            <Pressable onPress={() => send(text)} disabled={sending || !text.trim()} accessibilityRole="button"
              accessibilityLabel="Gönder" accessibilityState={{ disabled: sending || !text.trim() }}
              style={{ minHeight: MIN, minWidth: MIN, justifyContent: 'center', alignItems: 'center',
                backgroundColor: sending || !text.trim() ? '#ddd' : '#cfe8ff' }}>
              <Text>{sending ? '…' : 'Gönder'}</Text></Pressable>
          </View>
        </View>)}
    </KeyboardAvoidingView>
  );
}
