import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import { MainTabBar } from './MainTabBar';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MainTabBar" 
        component={MainTabBar} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
