import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator, Alert, Dimensions, FlatList, Image, Pressable, ScrollView, Text, View,
} from 'react-native';
import { supabase } from '../lib/supabase';
import { blockUser } from '../safety/api';
import { ReportScreen } from '../safety/ReportScreen';
import { getOrCreateConversation } from '../chat/api';
import { getListing } from './api';
import { CATEGORIES, CONDITIONS, type ListingDetail } from './types';

interface Props {
  listingId: string;
  distanceM?: number;
  onBack: () => void;
  onMessage: (conversationId: string) => void;
}

const W = Dimensions.get('window').width;
const MIN = 48; // dokunma hedefi (dp)
const RISKY = [2, 3, 6]; // araba, mama sandalyesi, uyku: geri çağırma uyarısı (Hukuk 3.2/3.3)

function ageText(min: number | null, max: number | null) {
  if (min == null && max == null) return null;
  return `${min ?? 0}-${max ?? '+'} ay`;
}

export function ListingDetailScreen({ listingId, distanceM, onBack, onMessage }: Props) {
  const [item, setItem] = useState<ListingDetail | null>(null);
  const [state, setState] = useState<'loading' | 'ok' | 'gone' | 'error'>('loading');
  const [me, setMe] = useState<string | null>(null);
  const [menu, setMenu] = useState(false);
  const [report, setReport] = useState(false);
  const [idx, setIdx] = useState(0);
  const [opening, setOpening] = useState(false);
  const [msgErr, setMsgErr] = useState<string | null>(null);

  const load = useCallback(async () => {
    setState('loading');
    try {
      const l = await getListing(listingId);
      setItem(l); setState(l && l.status !== 'gizli' ? 'ok' : 'gone');
    } catch { setState('error'); }
  }, [listingId]);
  useEffect(() => {
    load();
    supabase.auth.getUser().then(({ data }) => setMe(data.user?.id ?? null));
  }, [load]);

  if (report && item) {
    return <ReportScreen target={{ type: 'listing', id: item.id }}
      ownerId={item.seller_id !== me ? item.seller_id : undefined} onDone={() => setReport(false)} />;
  }

  const header = (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 48, paddingHorizontal: 8 }}>
      <Pressable onPress={onBack} accessibilityRole="button" accessibilityLabel="Geri"
        style={{ minHeight: MIN, minWidth: MIN, justifyContent: 'center' }}><Text>‹ Geri</Text></Pressable>
      {state === 'ok' && (
        <Pressable onPress={() => setMenu((m) => !m)} accessibilityRole="button" accessibilityLabel="Daha fazla"
          style={{ minHeight: MIN, minWidth: MIN, justifyContent: 'center', alignItems: 'flex-end' }}>
          <Text>Daha fazla ⋯</Text>
        </Pressable>)}
    </View>
  );

  if (state === 'loading') return <View style={{ flex: 1 }}>{header}<ActivityIndicator style={{ marginTop: 48 }} /></View>;
  if (state === 'error') {
    return (
      <View style={{ flex: 1 }}>{header}
        <View style={{ padding: 24, gap: 12 }}>
          <Text accessibilityRole="alert">⚠ İlan yüklenemedi. Bağlantını kontrol et.</Text>
          <Pressable onPress={load} accessibilityRole="button" style={{ minHeight: MIN, justifyContent: 'center' }}>
            <Text style={{ fontWeight: '700' }}>Tekrar dene</Text></Pressable>
        </View>
      </View>);
  }
  if (state === 'gone' || !item) {
    return (
      <View style={{ flex: 1 }}>{header}
        <View style={{ padding: 24, gap: 12 }}>
          <Text>Bu ilan artık yayında değil.</Text>
          <Pressable onPress={onBack} accessibilityRole="button" style={{ minHeight: MIN, justifyContent: 'center' }}>
            <Text style={{ fontWeight: '700' }}>Keşfet'e dön</Text></Pressable>
        </View>
      </View>);
  }

  const own = item.seller_id === me;
  const given = item.status === 'verildi';
  const cond = CONDITIONS.find((c) => c.value === item.condition)?.label;
  const cat = CATEGORIES.find((c) => c.id === item.category_id)?.name;
  const age = ageText(item.age_min_months, item.age_max_months);

  const canMessage = !own && !given && me != null;
  async function startChat() {
    if (!canMessage || opening) return;
    setOpening(true); setMsgErr(null);
    try { onMessage(await getOrCreateConversation(item!.id, item!.seller_id)); }
    catch (e) {
      const code = (e as { code?: string }).code;
      setMsgErr(code === 'P0001' ? 'Bugünlük sohbet başlatma sınırına ulaştın. Yarın tekrar dene.'
        : code === '42501' ? 'Bu satıcıya şu an mesaj yazamazsın. E-postanı doğruladığından emin ol.'
        : 'Sohbet açılamadı. Tekrar dene.');
    } finally { setOpening(false); }
  }

  function confirmBlock() {
    Alert.alert('Satıcıyı engelle', 'Bu kullanıcının ilanlarını ve mesajlarını görmeyeceksin. Ona bildirim gitmez.', [
      { text: 'Vazgeç', style: 'cancel' },
      { text: 'Engelle', style: 'destructive', onPress: async () => {
        try { await blockUser(item!.seller_id); onBack(); }
        catch { Alert.alert('Engellenemedi', 'Tekrar dene.'); }
      } },
    ]);
  }

  return (
    <View style={{ flex: 1 }}>
      {header}
      {menu && (
        <View accessibilityRole="menu" style={{ paddingHorizontal: 16 }}>
          {!own && (<>
            <Pressable accessibilityRole="menuitem" style={{ minHeight: MIN, justifyContent: 'center' }}
              onPress={() => { setMenu(false); setReport(true); }}><Text>İlanı şikâyet et</Text></Pressable>
            <Pressable accessibilityRole="menuitem" style={{ minHeight: MIN, justifyContent: 'center' }}
              onPress={() => { setMenu(false); confirmBlock(); }}><Text>Satıcıyı engelle</Text></Pressable>
          </>)}
          {own && <Text style={{ paddingVertical: 12 }}>Bu senin ilanın.</Text>}
        </View>)}
      <ScrollView>
        {item.photos.length > 0 ? (
          <View>
            <FlatList horizontal pagingEnabled data={item.photos} keyExtractor={(u) => u}
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={(e) => setIdx(Math.round(e.nativeEvent.contentOffset.x / W))}
              renderItem={({ item: u }) => (
                <Image source={{ uri: u }} style={{ width: W, height: W * 0.75 }} accessibilityLabel="İlan fotoğrafı" />)} />
            <Text style={{ position: 'absolute', right: 12, bottom: 8, backgroundColor: '#000a', color: '#fff', padding: 4 }}>
              {idx + 1}/{item.photos.length}</Text>
          </View>
        ) : <View style={{ width: W, height: W * 0.75, backgroundColor: '#eee' }} />}

        <View style={{ padding: 16, gap: 8 }}>
          <Text style={{ fontSize: 24, fontWeight: '700' }}>
            {item.price_try === 0 ? 'Ücretsiz' : `${item.price_try.toLocaleString('tr-TR')} ₺`}</Text>
          <Text>Durum: {cond}{given ? ' · Verildi' : ''}</Text>
          <Text style={{ fontSize: 18 }}>{item.title ?? cat}</Text>
          {distanceM != null && <Text>~{Math.max(1, Math.round(distanceM / 100) / 10)} km</Text>}

          <View style={{ borderWidth: 1, borderColor: '#ccc', padding: 12 }}>
            <Text style={{ fontWeight: '700' }}>Satıcı: {item.seller_name ?? 'Bebelika üyesi'}</Text>
            {/* Puan / işlem sayısı / ilçe: veri modelinde henüz yok (fark #4); uydurulmaz. */}
          </View>
          <View style={{ backgroundColor: '#fff6d6', padding: 12 }} accessibilityRole="summary">
            <Text>Ödemeyi ve ürün kontrolünü buluşmada yap. Ön ödeme/IBAN isteyenlere güvenme.</Text>
          </View>
          {RISKY.includes(item.category_id) && (
            <View style={{ borderWidth: 1, borderColor: '#c90', padding: 12 }}>
              <Text>Etiketi ve geri çağırma durumunu teslimde kontrol et.</Text>
            </View>)}

          {item.description && <Text>{item.description}</Text>}
          <Text>Kategori: {cat}</Text>
          {age && <Text>Yaş aralığı: {age}</Text>}

          {!own && (
            <Pressable onPress={() => setReport(true)} accessibilityRole="button"
              style={{ minHeight: MIN, justifyContent: 'center' }}>
              <Text style={{ textDecorationLine: 'underline' }}>Güvensiz ürün bildir / İlanı şikâyet et</Text>
            </Pressable>)}
        </View>
      </ScrollView>

      <View style={{ padding: 12 }}>
        {msgErr && <Text accessibilityRole="alert" style={{ paddingBottom: 8 }}>⚠ {msgErr}</Text>}
        <Pressable onPress={startChat} disabled={!canMessage || opening} accessibilityRole="button"
          accessibilityState={{ disabled: !canMessage || opening }}
          style={{ minHeight: MIN, justifyContent: 'center', alignItems: 'center',
            backgroundColor: canMessage && !opening ? '#cfe8ff' : '#ddd' }}>
          <Text>{given ? 'Bu ilan verildi' : own ? 'Senin ilanın' : opening ? 'Açılıyor…' : 'Satıcıya mesaj yaz'}</Text>
        </Pressable>
      </View>
    </View>
  );
}
