import React from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';
import { acceptLocation, chooseDistrict, declineLocation, DISTRICTS, type LocState } from './useLocation';

const MIN = 48;

/** Konum rızası (Hukuk Bölüm C metni) + ilçe seçerek devam. state 'ready' ise çocuk render edilir. */
export function LocationGate({ state, children }: { state: LocState; children: React.ReactNode }) {
  if (state === 'ready') return <>{children}</>;
  if (state === 'loading') return <ActivityIndicator style={{ marginTop: 48 }} />;

  if (state === 'consent') {
    return (
      <View style={{ flex: 1, padding: 24, paddingTop: 64, gap: 16 }}>
        <Text accessibilityRole="header" style={{ fontSize: 22, fontWeight: '700' }}>Yakınındaki ilanlar</Text>
        <Text>Yakınındaki ilanları göstermek için cihazının konumunu yalnızca uygulama açıkken kullanabiliriz.
          Kesin konumun diğer kullanıcılara gösterilmez, yalnızca ilçe düzeyinde yaklaşık konum gösterilir.</Text>
        <Text>İzni Ayarlar’dan dilediğin zaman kapatabilirsin; kapatman uygulamayı kullanmanı engellemez.</Text>
        <Pressable onPress={() => { void acceptLocation(); }} accessibilityRole="button"
          style={{ minHeight: MIN, justifyContent: 'center', alignItems: 'center', backgroundColor: '#cfe8ff' }}>
          <Text style={{ fontWeight: '700' }}>İzin ver</Text></Pressable>
        <Pressable onPress={declineLocation} accessibilityRole="button"
          style={{ minHeight: MIN, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#999' }}>
          <Text>Şimdi değil, ilçemi seçeceğim</Text></Pressable>
      </View>);
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 24, paddingTop: 64, gap: 8 }}>
      <Text accessibilityRole="header" style={{ fontSize: 22, fontWeight: '700' }}>İlçeni seç</Text>
      <Text>Konum izni olmadan da ilanlara bakabilirsin. Seçtiğin ilçenin çevresindeki ilanları göstereceğiz.</Text>
      {DISTRICTS.map((d) => (
        <Pressable key={d.name} onPress={() => chooseDistrict(d.name)} accessibilityRole="button"
          style={{ minHeight: MIN, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#ddd' }}>
          <Text>{d.name}</Text></Pressable>))}
    </ScrollView>);
}
