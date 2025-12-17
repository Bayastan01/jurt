import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type RootStackParamList = {
  Home: undefined;
  Category: { id: string; title: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const CATEGORIES = [
  { id: "buy", title: "Покупка", icon: "wallet" },
  { id: "rent", title: "Аренда", icon: "sofa" },
  { id: "new", title: "Новостройки", icon: "office-building" },
  { id: "daily", title: "Посуточно", icon: "calendar" },
  { id: "commercial", title: "Коммерческая", icon: "briefcase" },
  { id: "houses", title: "Дома и участки", icon: "home" },
];

function SkeletonCard({ style }: { style?: ViewStyle }) {
  const pulse = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 0.6, duration: 600, useNativeDriver: true }),
      ])
    ).start();
  }, [pulse]);

  return (
    <Animated.View style={[styles.card, style, { opacity: pulse }]}>
      <View style={styles.skeletonIcon} />
      <View style={styles.skeletonText} />
    </Animated.View>
  );
}

function CategoryCard({
  item,
  onPress,
}: {
  item: { id: string; title: string; icon: string };
  onPress: (id: string, title: string) => void;
}) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.75} onPress={() => onPress(item.id, item.title)}>
      <View style={styles.row}>
        <View style={styles.iconWrap}>
          <MaterialCommunityIcons name={item.icon as any} size={26} color="#0B66FF" />
        </View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

function HomeScreen({ navigation }: NativeStackScreenProps<RootStackParamList, "Home">) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<typeof CATEGORIES>([]);

  useEffect(() => {
    // Симулируем загрузку данных
    const t = setTimeout(() => {
      setData(CATEGORIES);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  const onPress = useCallback(
    (id: string, title: string) => {
      // Переход на экран категории
      navigation.push("Category", { id, title });
    },
    [navigation]
  );

  const renderItem = useCallback(
    ({ item }: { item: typeof CATEGORIES[number] }) => <CategoryCard item={item} onPress={onPress} />,
    [onPress]
  );

  // Skeleton placeholders: такой же layout как две колонки карточек
  const skeletonData = useMemo(() => new Array(6).fill(null).map((_, i) => ({ key: String(i) })), []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {loading ? (
        <>
          <FlatList
            data={skeletonData}
            keyExtractor={(item) => (item as any).key}
            numColumns={2}
            columnWrapperStyle={styles.column}
            renderItem={() => <SkeletonCard style={{ flex: 1 }} />}
            contentContainerStyle={styles.listContent}
          />
          <View style={styles.loadingIndicator}>
            <ActivityIndicator size="small" />
          </View>
        </>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.column}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />
      )}
    </SafeAreaView>
  );
}

function CategoryScreen({ route }: NativeStackScreenProps<RootStackParamList, "Category">) {
  const { id, title } = route.params;
  return (
    <SafeAreaView style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
      <Text style={{ fontSize: 20, marginBottom: 8 }}>{title}</Text>
      <Text>ID: {id}</Text>
      <Text style={{ marginTop: 12, color: "#666", paddingHorizontal: 24, textAlign: "center" }}>
        Здесь будет тело экрана: можно подгружать список, показывать фильтры или вкладки — всё как в твоём макете.
      </Text>
    </SafeAreaView>
  );
}

export default function PagesHome() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Категории" }} />
        <Stack.Screen name="Category" component={CategoryScreen} options={({ route }) => ({ title: route.params.title })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },
  listContent: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  column: {
    justifyContent: "space-between",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    // shadow iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    // elevation Android
    elevation: 3,
    // width handled by flatlist flex
    minHeight: 76,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 9,
    backgroundColor: "#EAF2FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    color: "#0B1B2B",
  },
  skeletonIcon: {
    width: 36,
    height: 36,
    borderRadius: 9,
    backgroundColor: "#E6E9EE",
    marginRight: 12,
  },
  skeletonText: {
    height: 18,
    width: "55%",
    borderRadius: 6,
    backgroundColor: "#E6E9EE",
  },
  loadingIndicator: {
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
});
