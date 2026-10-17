import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { renk, yaricap, yazi } from './theme';

export function TextField(props: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={renk.metinIkincil}
      accessibilityLabel={props.accessibilityLabel ?? props.placeholder}
      {...props}
      style={[s.alan, props.style]}
    />
  );
}

const s = StyleSheet.create({
  alan: {
    ...yazi.govde,
    minHeight: 52,
    backgroundColor: renk.yuzey,
    borderWidth: 1,
    borderColor: renk.girisCerceve,
    borderRadius: yaricap.m,
    paddingHorizontal: 16,
  },
});
