// src/screens/Home.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Sms() {
  return (
    <View style={styles.container}>
      <Text>Sms</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color:'red'
  },
});