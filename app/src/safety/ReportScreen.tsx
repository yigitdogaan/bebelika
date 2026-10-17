import React, { useState } from 'react';
import { Pressable, ScrollView, Switch, Text, TextInput, View } from 'react-native';
import { REPORT_CATEGORIES, submitReport, type ReportCategory, type ReportTarget } from './api';

interface Props {
  target: ReportTarget;
  /** Şikâyet edilen kişinin id'si (engelleme seçeneği için; yalnız sahibi bilinen hedefte). */
  ownerId?: string;
  onDone: () => void;
}

// Tasarım §10: en sık olanlar üstte (C4, C2, C6); kod/öncelik eşlemesi değişmez.
const ORDER: ReportCategory[] = ['C4', 'C2', 'C6', 'C1', 'C3', 'C5', 'C7'];
const CATS = ORDER.map((c) => REPORT_CATEGORIES.find((r) => r.code === c)!);

export function ReportScreen({ target, ownerId, onDone }: Props) {
  const [category, setCategory] = useState<ReportCategory | null>(null);
  const [details, setDetails] = useState('');
  const [block, setBlock] = useState(false);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<'sent' | 'duplicate' | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function send() {
    if (!category) return;
    setBusy(true); setError(null);
    try {
      setResult(await submitReport({ target, category, details, alsoBlockUserId: block ? ownerId : undefined }));
    } catch (e: any) { setError(e.message ?? 'Gönderilemedi. Bağlantını kontrol edip tekrar dene.'); }
    finally { setBusy(false); }
  }

  if (result) {
    return (
      <View style={{ flex: 1, padding: 16, paddingTop: 48, justifyContent: 'space-between' }}>
        <Text accessibilityRole="summary" style={{ fontSize: 18 }}>
          {result === 'sent' ? 'Bildirimin alındı. Teşekkürler.' : 'Bunu zaten bildirdin.'}
        </Text>
        <Pressable onPress={onDone} accessibilityRole="button"
          style={{ minHeight: 48, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd' }}>
          <Text style={{ fontWeight: '700' }}>Tamam</Text>
        </Pressable>
      </View>);
  }

  return (
    <View style={{ flex: 1, paddingTop: 48 }}>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 4 }}>
        <Text style={{ fontWeight: '700' }}>Neyi bildirmek istiyorsun?</Text>
        <View accessibilityRole="radiogroup">
          {CATS.map((c) => {
            const sel = category === c.code;
            return (
              <Pressable key={c.code} onPress={() => setCategory(c.code)}
                accessibilityRole="radio" accessibilityState={{ checked: sel }}
                style={{ minHeight: 48, justifyContent: 'center' }}>
                <Text style={{ fontWeight: sel ? '700' : '400' }}>{sel ? '● ' : '○ '}{c.label}</Text>
              </Pressable>);
          })}
        </View>
        {category === 'C3' && <Text>Acil tehlikede 112'yi ara.</Text>}
        <TextInput placeholder="Ek not (isteğe bağlı)" value={details} onChangeText={setDetails}
          maxLength={1000} multiline accessibilityLabel="Ek not"
          style={{ borderWidth: 1, padding: 8, minHeight: 80 }} />
        {ownerId && (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, minHeight: 48 }}>
            <Switch value={block} onValueChange={setBlock} accessibilityLabel="Ayrıca engelle" />
            <Text>Ayrıca engelle</Text>
          </View>)}
        {error && <Text accessibilityRole="alert">⚠ {error}</Text>}
      </ScrollView>
      <View style={{ padding: 12, gap: 8 }}>
        <Pressable disabled={!category || busy} onPress={send} accessibilityRole="button"
          accessibilityState={{ disabled: !category || busy }}
          style={{ minHeight: 48, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd',
            opacity: category && !busy ? 1 : 0.4 }}>
          <Text style={{ fontWeight: '700' }}>Gönder</Text>
        </Pressable>
        <Pressable onPress={onDone} accessibilityRole="button" style={{ minHeight: 48, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Vazgeç</Text>
        </Pressable>
      </View>
    </View>
  );
}
