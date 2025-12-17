import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "1",
    price: "15 000 000 ₽",
    title: "Коттедж · 325,40 м² · 9 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "2",
    price: "21 650 000 ₽",
    title: "Дом · 163,60 м² · 6 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "3",
    price: "18 400 000 ₽",
    title: "Дом · 190,20 м² · 8 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "4",
    price: "22 900 000 ₽",
    title: "Коттедж · 270 м² · 10 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  }, {
    id: "1",
    price: "15 000 000 ₽",
    title: "Коттедж · 325,40 м² · 9 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "2",
    price: "21 650 000 ₽",
    title: "Дом · 163,60 м² · 6 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "3",
    price: "18 400 000 ₽",
    title: "Дом · 190,20 м² · 8 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  }, {
    id: "1",
    price: "15 000 000 ₽",
    title: "Коттедж · 325,40 м² · 9 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "2",
    price: "21 650 000 ₽",
    title: "Дом · 163,60 м² · 6 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "3",
    price: "18 400 000 ₽",
    title: "Дом · 190,20 м² · 8 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  }, {
    id: "1",
    price: "15 000 000 ₽",
    title: "Коттедж · 325,40 м² · 9 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "2",
    price: "21 650 000 ₽",
    title: "Дом · 163,60 м² · 6 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "3",
    price: "18 400 000 ₽",
    title: "Дом · 190,20 м² · 8 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  }, {
    id: "1",
    price: "15 000 000 ₽",
    title: "Коттедж · 325,40 м² · 9 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "2",
    price: "21 650 000 ₽",
    title: "Дом · 163,60 м² · 6 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "3",
    price: "18 400 000 ₽",
    title: "Дом · 190,20 м² · 8 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  }, {
    id: "1",
    price: "15 000 000 ₽",
    title: "Коттедж · 325,40 м² · 9 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "2",
    price: "21 650 000 ₽",
    title: "Дом · 163,60 м² · 6 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "3",
    price: "18 400 000 ₽",
    title: "Дом · 190,20 м² · 8 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  }, {
    id: "1",
    price: "15 000 000 ₽",
    title: "Коттедж · 325,40 м² · 9 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "2",
    price: "21 650 000 ₽",
    title: "Дом · 163,60 м² · 6 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "3",
    price: "18 400 000 ₽",
    title: "Дом · 190,20 м² · 8 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  }, {
    id: "1",
    price: "15 000 000 ₽",
    title: "Коттедж · 325,40 м² · 9 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "2",
    price: "21 650 000 ₽",
    title: "Дом · 163,60 м² · 6 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "3",
    price: "18 400 000 ₽",
    title: "Дом · 190,20 м² · 8 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  }, {
    id: "1",
    price: "15 000 000 ₽",
    title: "Коттедж · 325,40 м² · 9 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "2",
    price: "21 650 000 ₽",
    title: "Дом · 163,60 м² · 6 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
  {
    id: "3",
    price: "18 400 000 ₽",
    title: "Дом · 190,20 м² · 8 сот.",
    location: "м. Крёкшино",
    image: require("../assets/icons/qwe.jpg"),
  },
];

export default function RecommendedList() {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Могут подойти</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        scrollEnabled={false} // ❗ отключаем внутренний скролл
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0B1B2B",
    marginHorizontal: 10,
    marginBottom: 8,
  },
  list: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: "#fff",
    marginHorizontal: 5,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 130,
  },
  info: {
    padding: 8,
  },
  price: {
    fontWeight: "700",
    fontSize: 16,
    color: "#0B1B2B",
  },
  title: {
    fontSize: 13,
    color: "#3C4651",
    marginVertical: 2,
  },
  location: {
    fontSize: 12,
    color: "#4B73DB",
  },
});
