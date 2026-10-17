import React, { useState } from 'react';
import { Button, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { notify } from '../lib/dialog';
import { createListing } from './api';
import { LocationGate } from './LocationGate';
import { BANNED_LIST, BANNED_SUMMARY, bannedHint, DECLARATIONS, GIYIM_NOTU } from './rules';
import { CATEGORIES, CONDITIONS, type Condition } from './types';
import { useLocation } from './useLocation';

const MIN = 48;

function Check({ label, on, onPress }: { label: string; on: boolean; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} accessibilityRole="checkbox" accessibilityState={{ checked: on }}
      style={{ minHeight: MIN, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <Text>{on ? '☑' : '☐'}</Text><Text style={{ flex: 1 }}>{label}</Text>
    </Pressable>);
}

// İskelet: taslak otomatik kaydı ve kategori önerisi henüz YOK (bkz. ilan-notu.md).
// §14a #9: kategori/durum bilinçli seçilir (varsayılan yok). #10: yasaklı ürün uyarısı + riskli kategori beyanı.
export function CreateListingScreen({ onDone }: { onDone: () => void }) {
  const { coords, state } = useLocation();
  const [photos, setPhotos] = useState<string[]>([]);
  const [category, setCategory] = useState<number | null>(null);
  const [condition, setCondition] = useState<Condition | null>(null);
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');
  const [busy, setBusy] = useState(false);
  const [showBanned, setShowBanned] = useState(false);
  const [decl, setDecl] = useState<Record<string, boolean>>({});
  const [confirmed, setConfirmed] = useState(false);

  const needed = category != null ? DECLARATIONS[category] ?? [] : [];
  const p = price.trim() === '' ? NaN : parseInt(price, 10);
  const missing =
    !photos.length ? 'En az 1 fotoğraf ekle.'
    : category == null ? 'Kategori seç.'
    : condition == null ? 'Ürünün durumunu seç.'
    : Number.isNaN(p) || p < 0 ? 'Fiyat gir (0 = ücretsiz).'
    : needed.some((d) => !decl[d]) ? 'Bu kategori için güvenlik beyanlarını işaretle.'
    : !confirmed ? 'Beyanlarının doğru olduğunu onayla.'
    : null;
  const hint = bannedHint(title);

  const pick = async () => {
    const r = await ImagePicker.launchImageLibraryAsync({ allowsMultipleSelection: true, selectionLimit: 6, quality: 1 });
    if (!r.canceled) setPhotos(r.assets.map((a) => a.uri).slice(0, 6));
  };
  const submit = async () => {
    if (missing || !coords || category == null || condition == null) return;
    setBusy(true);
    try {
      const beyan = needed.length ? `Satıcı beyanı: ${needed.join(' ')}` : undefined;
      await createListing({ categoryId: category, priceTry: p, condition, title, description: beyan, ...coords, photoUris: photos });
      onDone();
    } catch (e: any) { notify('İlan verilemedi', e.message); } finally { setBusy(false); }
  };

  if (state !== 'ready') return <LocationGate state={state}>{null}</LocationGate>;

  return (
    <ScrollView contentContainerStyle={{ padding: 16, paddingTop: 56, gap: 12 }}>
      <View style={{ backgroundColor: '#fff6d6', padding: 12 }}>
        <Text>{BANNED_SUMMARY}</Text>
        <Pressable onPress={() => setShowBanned((v) => !v)} accessibilityRole="button" style={{ minHeight: MIN, justifyContent: 'center' }}>
          <Text style={{ fontWeight: '700' }}>{showBanned ? 'Gizle' : 'Tümünü gör'}</Text></Pressable>
        {showBanned && BANNED_LIST.map((b) => <Text key={b}>• {b}</Text>)}
      </View>
      <ScrollView horizontal>
        {photos.map((u) => <Image key={u} source={{ uri: u }} style={{ width: 80, height: 80, marginRight: 8 }} accessibilityLabel="Seçilen fotoğraf" />)}
      </ScrollView>
      <Button title={`Fotoğraf seç (${photos.length}/6)`} onPress={pick} />
      <Text>Kategori</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        {CATEGORIES.map((c) => (
          <Button key={c.id} title={(c.id === category ? '• ' : '') + c.name} onPress={() => { setCategory(c.id); setDecl({}); }} />
        ))}
      </View>
      {category === 1 && <Text>{GIYIM_NOTU}</Text>}
      {needed.length > 0 && (
        <View style={{ borderWidth: 1, borderColor: '#c9a227', padding: 8 }}>
          <Text style={{ fontWeight: '700' }}>Güvenlik beyanı (satıcı beyanıdır; Bebelika ürünü incelemez)</Text>
          {needed.map((d) => <Check key={d} label={d} on={!!decl[d]} onPress={() => setDecl((x) => ({ ...x, [d]: !x[d] }))} />)}
        </View>)}
      <Text>Durum</Text>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        {CONDITIONS.map((c) => (
          <Button key={c.value} title={(c.value === condition ? '• ' : '') + c.label} onPress={() => setCondition(c.value)} />
        ))}
      </View>
      <TextInput placeholder="Fiyat (₺, 0 = ücretsiz)" keyboardType="number-pad" value={price} onChangeText={setPrice} style={{ borderWidth: 1, padding: 8 }} />
      <TextInput placeholder="Başlık (opsiyonel)" maxLength={80} value={title} onChangeText={setTitle} style={{ borderWidth: 1, padding: 8 }} />
      {hint && <Text accessibilityRole="alert" style={{ backgroundColor: '#fff6d6', padding: 8 }}>{hint}</Text>}
      <Check label="Beyanlarımın doğru olduğunu onaylıyorum." on={confirmed} onPress={() => setConfirmed((v) => !v)} />
      {missing && <Text accessibilityRole="alert">{missing}</Text>}
      <Button title={busy ? 'Yükleniyor…' : 'İlanı yayınla'} onPress={submit} disabled={busy || !!missing} />
    </ScrollView>
  );
}
