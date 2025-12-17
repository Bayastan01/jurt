// App.tsx
import React from 'react';
import { NavigationContainer,DefaultTheme
 } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import AppStack from './src/navigation/AppStack';
import { navigationRef } from '@navigation/NavigationRef';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white', // фиксированный цвет
  },
};
export default function App() {



  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        {/* 👇 Глобальный StatusBar */}
        <NavigationContainer ref={navigationRef} theme={MyTheme}>

        <StatusBar style="dark" backgroundColor="#fff" translucent={false} />

          <AppStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
