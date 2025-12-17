import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet } from "react-native";

export const SkeletonRecommendedCard: React.FC = () => {
  const opacity = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 1, duration: 700, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0.6, duration: 700, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={[styles.card, { opacity }]}>
      <View style={styles.image} />
      <View style={styles.textBlock}>
        <View style={styles.price} />
        <View style={styles.line} />
        <View style={[styles.line, { width: "40%" }]} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 180,
    borderRadius: 12,
    backgroundColor: "#fff",
    marginRight: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 110,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "#E6E9EE",
  },
  textBlock: {
    padding: 10,
  },
  price: {
    height: 16,
    width: "60%",
    borderRadius: 6,
    backgroundColor: "#E6E9EE",
    marginBottom: 8,
  },
  line: {
    height: 14,
    width: "80%",
    borderRadius: 6,
    backgroundColor: "#E6E9EE",
    marginBottom: 6,
  },
});
