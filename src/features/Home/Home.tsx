// src/screens/Home.tsx
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from "react-native";
import { Icon } from 'src/assets/icons';

export default function Home() {
  return (
    <View style={styles.container}>
    <View style={styles.headerRow}>
      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postPlus}>+ </Text>
        <Text style={styles.postText}>Разместить объявление</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bellWrap}>
        <Icon  type={'notification'}  width={26}
        height={26}  />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>12</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style={styles.searchCard}>
      <View style={styles.searchRow}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput placeholder="Что ищете?" style={styles.searchInput} />
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
 
  container: {
    padding: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  postButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  postPlus: {
    color: "#0a66ff",
    fontSize: 22,
    fontWeight: "700",
    marginRight: 2,
  },
  postText: {
    color: "#0a66ff",
    fontSize: 16,
    fontWeight: "600",
  },
  bellWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  badge: {
    position: "absolute",
    right: -2,
    top: -4,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#e13b3b",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: "#fff",
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  searchCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical:6,
    paddingHorizontal: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 6,
    color: "#222",
  },
  filterButton: {
    marginLeft: 8,
    padding: 8,
    borderRadius: 8,
  },
  filterIcon: {
    fontSize: 18,
  },
});