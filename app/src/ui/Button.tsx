import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { renk, yaricap, yazi } from './theme';

type Props = {
  baslik: string;
  onPress: () => void;
  tur?: 'birincil' | 'ikincil' | 'metin';
  pasif?: boolean;
};

export function Button({ baslik, onPress, tur = 'birincil', pasif = false }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: pasif }}
      disabled={pasif}
      onPress={onPress}
      style={({ pressed }) => [
        s.taban,
        tur === 'birincil' && { backgroundColor: pressed ? renk.anaKoyu : renk.ana },
        tur === 'ikincil' && { backgroundColor: pressed ? renk.naneAcik : renk.yuzey, borderWidth: 1.5, borderColor: renk.ana },
        tur === 'metin' && { backgroundColor: pressed ? renk.naneAcik : 'transparent' },
        pasif && { backgroundColor: renk.pasifZemin, borderWidth: 0 },
      ]}
    >
      <Text
        style={[
          yazi.buton,
          { color: tur === 'birincil' ? renk.beyaz : renk.anaKoyu },
          pasif && { color: renk.pasifMetin },
        ]}
      >
        {baslik}
      </Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  taban: { minHeight: 52, borderRadius: yaricap.m, paddingHorizontal: 16, alignItems: 'center', justifyContent: 'center' },
});
