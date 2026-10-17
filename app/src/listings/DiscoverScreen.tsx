import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Pressable, Text, TextInput, View } from 'react-native';
import { discover } from './api';
import { CATEGORIES, CONDITIONS, type NearbyListing } from './types';
import { useLocation } from './useLocation';

const RADII = [1, 3, 5, 10, 25];

export function DiscoverScreen({ onOpen }: { onOpen: (id: string, distanceM: number) => void }) {
  const { coords, denied } = useLocation();
  const [items, setItems] = useState<NearbyListing[]>([]);
  const [radius, setRadius] = useState(5);
  const [category, setCategory] = useState<number | undefined>();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!coords) return;
    setLoading(true); setError(null);
    try {
      setItems(await discover({ ...coords, radiusKm: radius, category, query }));
    } catch (e: any) { setError(e.message ?? 'Hata'); } finally { setLoading(false); }
  }, [coords, radius, category, query]);
  useEffect(() => { load(); }, [load]);

  if (denied) return <Text style={{ padding: 24 }}>Yakındaki ilanlar için konum izni gerekli.</Text>;
  if (!coords) return <ActivityIndicator style={{ marginTop: 48 }} />;

  return (
    <View style={{ flex: 1, paddingTop: 48 }}>
      <TextInput placeholder="Ara" value={query} onChangeText={setQuery} style={{ margin: 12, borderWidth: 1, padding: 8 }} />
      <View style={{ flexDirection: 'row', gap: 8, paddingHorizontal: 12 }}>
        {RADII.map((r) => (
          <Pressable key={r} onPress={() => setRadius(r)} accessibilityRole="button"
            style={{ minHeight: 48, minWidth: 48, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: r === radius ? '700' : '400' }}>{r} km</Text>
          </Pressable>
        ))}
      </View>
      <FlatList horizontal data={[{ id: 0, name: 'Tümü' }, ...CATEGORIES]} keyExtractor={(c) => String(c.id)}
        style={{ flexGrow: 0, margin: 12 }}
        renderItem={({ item: c }) => (
          <Pressable onPress={() => setCategory(c.id || undefined)} style={{ marginRight: 12 }}>
            <Text style={{ fontWeight: (category ?? 0) === c.id ? '700' : '400' }}>{c.name}</Text>
          </Pressable>
        )} />
      {error && <Text style={{ color: 'red', padding: 12 }}>{error}</Text>}
      <FlatList data={items} keyExtractor={(i) => i.id} refreshing={loading} onRefresh={load}
        ListEmptyComponent={!loading ? (
          <View style={{ padding: 24 }}>
            <Text>Bu mesafede ilan yok.</Text>
            {radius < 25 && <Pressable onPress={() => setRadius(25)}><Text style={{ fontWeight: '700' }}>Mesafeyi genişlet</Text></Pressable>}
          </View>) : null}
        renderItem={({ item }) => (
          <Pressable onPress={() => onOpen(item.id, item.distance_m)} accessibilityRole="button"
            style={{ padding: 12, gap: 6 }}>
            {item.photo_url
              ? <Image source={{ uri: item.photo_url }} style={{ width: '100%', height: 200 }} />
              : <View style={{ width: '100%', height: 200, backgroundColor: '#eee' }} />}
            <Text style={{ fontWeight: '700' }}>{item.price_try === 0 ? 'Ücretsiz' : `${item.price_try} ₺`}</Text>
            <Text>{item.title ?? CATEGORIES.find((c) => c.id === item.category_id)?.name}</Text>
            <Text>Durum: {CONDITIONS.find((c) => c.value === item.condition)?.label} · ~{Math.max(1, Math.round(item.distance_m / 100) / 10)} km</Text>
          </Pressable>)} />
    </View>
  );
}
