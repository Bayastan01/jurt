import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CategoryScreen({ route }: any) {
  const { id, title } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtext}>ID категории: {id}</Text>
      <Text style={styles.text}>Здесь будет список объявлений или фильтры.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtext: {
    color: "#555",
    marginBottom: 12,
  },
  text: {
    color: "#777",
    textAlign: "center",
  },
});
