import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { renk, yazi } from './theme';

export type Sekme = { anahtar: string; baslik: string; secili: boolean; onPress: () => void };

// İkon seti (@expo/vector-icons) bağımlılığı eklenince her sekmeye ikon konacak; şimdilik yalnız metin.
export function TabBar({ sekmeler }: { sekmeler: Sekme[] }) {
  return (
    <View style={s.cubuk}>
      {sekmeler.map((t) => (
        <Pressable
          key={t.anahtar}
          accessibilityRole="tab"
          accessibilityState={{ selected: t.secili }}
          onPress={t.onPress}
          style={s.sekme}
        >
          <View style={[s.cizgi, t.secili && { backgroundColor: renk.ana }]} />
          <Text style={[yazi.yardimci, s.etiket, t.secili && { color: renk.anaKoyu, fontWeight: '700' }]}>{t.baslik}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  cubuk: { flexDirection: 'row', backgroundColor: renk.yuzey, borderTopWidth: 1, borderTopColor: renk.cerceveSuslu },
  sekme: { flex: 1, minHeight: 56, alignItems: 'center', justifyContent: 'flex-start' },
  cizgi: { height: 3, width: 32, borderRadius: 2, backgroundColor: 'transparent', marginBottom: 14 },
  etiket: { color: renk.metinIkincil },
});
