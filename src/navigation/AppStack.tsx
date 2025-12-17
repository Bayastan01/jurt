import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { colors } from "@utils/theme/colors";
import CategoryScreen from "@components/CategoryScreen";
import { MainTabBar } from "./MainTabBar";
import NotificationsScreen from "@screens/Notifications";
import SearchScreen from "@screens/Search";
import SearchMainScreen from "@screens/SearchMain";
import CreateAdScreen from "@screens/CreateAdS";
import FiltersScreen from "../screens/Filters";

// Новые экраны


const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.white },
        contentStyle: { backgroundColor: colors.white },
        headerTitleAlign: "center",
      }}
    >
      {/* Главный таб-бар */}
      <Stack.Screen 
        name="MainTabBar" 
        component={MainTabBar} 
        options={{ headerShown: false }}
      />

      {/* Категория */}
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={({ route }: any) => ({
          title: route.params.title,
          headerShown: false 
        })}
      />

      {/* Новые экраны */}
      <Stack.Screen 
        name="CreateAdScreen" 
        component={CreateAdScreen} 
        options={{ title: "Создать объявление" }} 
      />
      <Stack.Screen 
        name="NotificationsScreen" 
        component={NotificationsScreen} 
        options={{ title: "Уведомления" }} 
      />
      <Stack.Screen 
        name="SearchMain" 
        component={SearchMainScreen} 
        options={{ title: "Поиск" }} 
      />
     <Stack.Screen 
  name="FiltersScreen" 
  component={FiltersScreen} 
  options={{ title: "Фильтры" }} 
/>
    </Stack.Navigator>
  );
}
