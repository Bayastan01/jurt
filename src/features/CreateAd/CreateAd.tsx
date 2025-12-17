// src/screens/Home.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CreateAd() {
  return (
    <View style={styles.container}>
      <Text>CreateAd</Text>
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