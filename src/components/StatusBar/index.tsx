// src/components/StatusBar.tsx
import React, { memo } from 'react';
import { View, Platform } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type Props = {
  mode?: 'dark' | 'light';
  backgroundColor?: string;
  translucent?: boolean;
};

export const StatusBar = memo(
  ({ mode = 'dark', backgroundColor = '#000', translucent = true }: Props) => {
    const insets = useSafeAreaInsets();

    return (
      <>
        <ExpoStatusBar
          style={mode === 'dark' ? 'light' : 'dark'}
          backgroundColor={backgroundColor}
          translucent={translucent}
        />
        {/* Добавляем фон только если не translucent */}
        {!translucent && Platform.OS === 'ios' && (
          <View
            style={{
              height: insets.top,
              backgroundColor,
            }}
          />
        )}
      </>
    );
  }
);
