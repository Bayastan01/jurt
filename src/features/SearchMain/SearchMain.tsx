// src/screens/Home.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SearchMain() {
  return (
    <View style={styles.container}>
      <Text>SearchMain</Text>
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