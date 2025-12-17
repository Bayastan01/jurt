import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Icon } from "src/assets/icons";
import { colors } from "@utils/theme/colors";

type Props = {
  item: { id: string; title: string; icon: string };
  onPress: (id: string, title: string) => void;
};

export const CategoryCard: React.FC<Props> = ({ item, onPress }) => (
  <TouchableOpacity
    style={styles.card}
    activeOpacity={0.7}
    onPress={() => onPress(item.id, item.title)}
  >
    <View style={styles.row}>
      <View style={styles.iconBox}>
        <Icon type={item.icon} width={20} height={20} fill={colors.main} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flex: 1,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    boxShadow: `-0.4px -0.4px 10px 0.2px ${colors.boxx}`,
    marginHorizontal: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
    width: 24,
    height: 24,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },
  title: {
    fontSize: 14,
    color: "#0B1B2B",
  },
});
