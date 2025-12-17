import React, { useRef, useEffect } from "react";
import { Animated, View, StyleSheet } from "react-native";

export const SkeletonCategoryCard: React.FC = () => {
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
      <View style={styles.icon} />
      <View style={styles.text} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginHorizontal: 5,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: "#E6E9EE",
    marginBottom: 10,
  },
  text: {
    height: 18,
    width: "60%",
    borderRadius: 6,
    backgroundColor: "#E6E9EE",
  },
});
