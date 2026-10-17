import React, { useState } from 'react';
import { Alert, Button, Image, ScrollView, Text, TextInput, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { createListing } from './api';
import { CATEGORIES, CONDITIONS, type Condition } from './types';
import { useLocation } from './useLocation';

// İskelet: taslak otomatik kaydı, kategori önerisi, profil ilçesi konumu henüz YOK (bkz. ilan-notu.md).
export function CreateListingScreen({ onDone }: { onDone: () => void }) {
  const { coords } = useLocation();
  const [photos, setPhotos] = useState<string[]>([]);
  const [category, setCategory] = useState(1);
  const [condition, setCondition] = useState<Condition>('iyi');
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');
  const [busy, setBusy] = useState(false);

  const pick = async () => {
    const r = await ImagePicker.launchImageLibraryAsync({ allowsMultipleSelection: true, selectionLimit: 6, quality: 1 });
    if (!r.canceled) setPhotos(r.assets.map((a) => a.uri).slice(0, 6));
  };
  const submit = async () => {
    if (!coords) return Alert.alert('Konum alınamadı');
    const p = price.trim() === '' ? NaN : parseInt(price, 10);
    if (!photos.length || Number.isNaN(p) || p < 0) return Alert.alert('Fotoğraf ve fiyat (0 = ücretsiz) gerekli');
    setBusy(true);
    try {
      await createListing({ categoryId: category, priceTry: p, condition, title, ...coords, photoUris: photos });
      onDone();
    } catch (e: any) { Alert.alert('İlan verilemedi', e.message); } finally { setBusy(false); }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16, paddingTop: 56, gap: 12 }}>
      <ScrollView horizontal>
        {photos.map((u) => <Image key={u} source={{ uri: u }} style={{ width: 80, height: 80, marginRight: 8 }} />)}
      </ScrollView>
      <Button title={`Fotoğraf seç (${photos.length}/6)`} onPress={pick} />
      <Text>Kategori</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        {CATEGORIES.map((c) => (
          <Button key={c.id} title={(c.id === category ? '• ' : '') + c.name} onPress={() => setCategory(c.id)} />
        ))}
      </View>
      <Text>Durum</Text>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        {CONDITIONS.map((c) => (
          <Button key={c.value} title={(c.value === condition ? '• ' : '') + c.label} onPress={() => setCondition(c.value)} />
        ))}
      </View>
      <TextInput placeholder="Fiyat (₺, 0 = ücretsiz)" keyboardType="number-pad" value={price} onChangeText={setPrice} style={{ borderWidth: 1, padding: 8 }} />
      <TextInput placeholder="Başlık (opsiyonel)" maxLength={80} value={title} onChangeText={setTitle} style={{ borderWidth: 1, padding: 8 }} />
      <Button title={busy ? 'Yükleniyor…' : 'İlanı yayınla'} onPress={submit} disabled={busy} />
    </ScrollView>
  );
}
