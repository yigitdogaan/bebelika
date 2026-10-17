import React, { useState } from 'react';
import { Pressable, Switch, Text, TextInput, View } from 'react-native';
import { REPORT_CATEGORIES, submitReport, type ReportCategory, type ReportTarget } from './api';

interface Props {
  target: ReportTarget;
  /** Şikâyet edilen kişinin id'si (engelleme seçeneği için). */
  ownerId?: string;
  onDone: () => void;
}

export function ReportScreen({ target, ownerId, onDone }: Props) {
  const [category, setCategory] = useState<ReportCategory | null>(null);
  const [details, setDetails] = useState('');
  const [block, setBlock] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function send() {
    if (!category) return;
    setBusy(true); setMsg(null);
    try {
      const r = await submitReport({ target, category, details, alsoBlockUserId: block ? ownerId : undefined });
      setMsg(r === 'sent' ? 'Bildirimin alındı.' : 'Bu içeriği zaten bildirdin.');
      setTimeout(onDone, 1200);
    } catch (e: any) { setMsg(e.message ?? 'Gönderilemedi'); } finally { setBusy(false); }
  }

  return (
    <View style={{ flex: 1, padding: 16, paddingTop: 48, gap: 8 }}>
      <Text style={{ fontWeight: '700' }}>Neyi bildirmek istiyorsun?</Text>
      {REPORT_CATEGORIES.map((c) => (
        <Pressable key={c.code} onPress={() => setCategory(c.code)}>
          <Text style={{ fontWeight: category === c.code ? '700' : '400' }}>
            {category === c.code ? '● ' : '○ '}{c.label}
          </Text>
        </Pressable>
      ))}
      <TextInput placeholder="Ek not (isteğe bağlı)" value={details} onChangeText={setDetails}
        maxLength={1000} multiline style={{ borderWidth: 1, padding: 8, minHeight: 60 }} />
      {ownerId && (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Switch value={block} onValueChange={setBlock} /><Text>Bu kullanıcıyı da engelle</Text>
        </View>)}
      {msg && <Text>{msg}</Text>}
      <Pressable disabled={!category || busy} onPress={send}>
        <Text style={{ fontWeight: '700', opacity: category && !busy ? 1 : 0.4 }}>Gönder</Text>
      </Pressable>
      <Pressable onPress={onDone}><Text>Vazgeç</Text></Pressable>
    </View>
  );
}
