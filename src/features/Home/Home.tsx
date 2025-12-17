// src/screens/Home.tsx
import React, { useEffect, useMemo, useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Icon } from "src/assets/icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "@utils/theme/colors";
import { CategoryCard } from "@components/CategoryCard";
import { SkeletonCategoryCard } from "@components/SkeletonCategoryCard";
import { SkeletonRecommendedCard } from "@components/SkeletonRecommendedCard";
import RecommendedList from "@components/RecommendedList";

const CATEGORIES = [
  { id: "buy", title: "Покупка", icon: "wallet" },
  { id: "rent", title: "Аренда", icon: "storage-rental" },
  { id: "new", title: "Новостройки", icon: "baseline-home-work" },
  { id: "daily", title: "Посуточно", icon: "calendar" },
  { id: "commercial", title: "Коммерческая", icon: "commercial" },
  { id: "houses", title: "Дома и участки", icon: "home-modern" },
  { id: "workflow", title: "Работа в моем городе", icon: "workflow" },
];

export default function Home() {
  const navigation = useNavigation<any>(); // можно типизировать через RootStackParamList

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<typeof CATEGORIES>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = useCallback(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setData(CATEGORIES);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      loadData();
      setRefreshing(false);
    }, 1200);
  }, [loadData]);

  const onPressCategory = useCallback(
    (id: string, title: string) => navigation.navigate("CategoryScreen", { id, title }),
    [navigation]
  );

  // Navigation handlers for header/search items:
  const goToCreateAd = useCallback(() => navigation.navigate("CreateAdScreen"), [navigation]);
  const goToNotifications = useCallback(() => navigation.navigate("NotificationsScreen"), [navigation]);
  const goToFilters = useCallback(
    () => navigation.navigate("FiltersScreen"),
    [navigation]
  );
  const goToSearch = useCallback(() => navigation.navigate("SearchMain"), [navigation]);

  const skeletonData = useMemo(
    () => Array.from({ length: 6 }, (_, i) => ({ key: String(i) })),
    []
  );

  return (
    <View style={styles.container}>
      {/* ---------- Header ---------- */}
      <View style={styles.headerCol}>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.postButton} onPress={goToCreateAd} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <Text style={styles.postPlus}>+ </Text>
            <Text style={styles.postText}>Разместить объявление</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bellWrap} onPress={goToNotifications} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <Icon type="notification" width={26} height={26} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>12</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* ---------- Search (теперь Touchable, открывает страницу поиска) ---------- */}
        <TouchableOpacity style={styles.searchCard} onPress={goToSearch} activeOpacity={0.8}>
          <View style={styles.searchRow}>
            <View style={styles.searchIcon}>
              <Icon type="search" width={22} height={22} />
            </View>
            <Text style={styles.searchInput}>Что ищете?</Text>
            <TouchableOpacity style={styles.filterButton} onPress={goToFilters} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              <Icon type="settings-adjust" width={22} height={22} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>

      {/* ---------- Content ---------- */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#3B82F6"
            colors={["#3B82F6"]}
            progressBackgroundColor="#ffffff"
          />
        }
      >
        {/* ---------- Categories ---------- */}
        <View style={styles.layer}>
          <FlatList
            data={loading ? skeletonData : data}
            keyExtractor={(item: any) => item.key || item.id}
            numColumns={2}
            scrollEnabled={false}
            columnWrapperStyle={styles.column}
            renderItem={({ item }) =>
              loading ? (
                <SkeletonCategoryCard />
              ) : (
                <CategoryCard item={item} onPress={() => onPressCategory(item.id, item.title)} />
              )
            }
            contentContainerStyle={styles.gridContainer}
          />
        </View>

        {/* ---------- Recommended ---------- */}
        <View style={[styles.layer, { marginTop: 10 }]}>
          {loading ? (
            <FlatList
              data={Array.from({ length: 4 })}
              horizontal
              keyExtractor={(_, i) => String(i)}
              renderItem={() => <SkeletonRecommendedCard />}
              contentContainerStyle={{ paddingHorizontal: 15 }}
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <RecommendedList refreshing={refreshing} />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

/* ---------- Стили (ваши стили оставил без изменений) ---------- */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  layer: { position: "relative" },

  headerCol: {
    flexDirection: "column",
    paddingBottom: 10,
    paddingHorizontal: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
    marginTop: 35,
  },
  postButton: { flexDirection: "row", alignItems: "center" },
  postPlus: { color: "#3B82F6", fontSize: 22, fontWeight: "700", marginRight: 2 },
  postText: { color: "#3B82F6", fontSize: 16, fontWeight: "600" },
  bellWrap: {
    paddingLeft: 15,
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  badge: {
    position: "absolute",
    right: -6,
    top: -2,
    minWidth: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "#e13b3b",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: "#fff",
  },
  badgeText: { color: "#fff", fontSize: 12, fontWeight: "700" },

  searchCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 10,
  },
  searchRow: { flexDirection: "row", alignItems: "center" },
  searchIcon: { marginLeft: 10, marginRight: 10, opacity: 0.4 },
  searchInput: { flex: 1, fontSize: 16, color: "#222", opacity: 0.4, fontWeight: "500" },
  filterButton: { marginLeft: 8, padding: 8, borderRadius: 8 },

  gridContainer: {
    paddingTop: 10,
    paddingBottom: 30,
    paddingHorizontal: 8,
  },
  column: {
    justifyContent: "space-between",
    marginBottom: 12,
  },
});
