import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, IconType } from '../assets/icons';
import { colors } from '../utils/theme/colors';
import { ERootStackRoutes } from '../routes/types';

export type TabConfig = {
  name: ERootStackRoutes;
  component: React.ComponentType;
  icon: IconType;
  iconSize?: { width: number; height: number };
  initialFillIsNone?: boolean;
  focusedStrokeColor?: string;
  unfocusedStrokeColor?: string;
};

const Tab = createBottomTabNavigator();

function createIconRenderer(config: TabConfig) {
  const {
    icon,
    iconSize = { width: 28, height: 28 },
    initialFillIsNone = false,
    focusedStrokeColor,
    unfocusedStrokeColor,
  } = config;

  return ({ focused }: { focused: boolean }) => {
    const fill = initialFillIsNone
      ? 'none'
      : focused
      ? colors.main
      : colors['text-2'];

    const stroke = initialFillIsNone
      ? focused
        ? focusedStrokeColor ?? colors.main
        : unfocusedStrokeColor ?? colors['text-2']
      : undefined;

    return (
      <Icon
        type={icon}
        fill={fill}
        stroke={stroke}
        width={iconSize.width}
        height={iconSize.height}
        
      />
    );
  };
}

export const GenericTabBar: React.FC<{
  tabs: TabConfig[];
  initialRouteName: ERootStackRoutes;
  showLabels?: boolean;
}> = ({ tabs, initialRouteName, showLabels = false }) => (
  <Tab.Navigator
    initialRouteName={initialRouteName}
    screenOptions={{ 
      headerShown: false, 
      // tabBarShowLabel: showLabels,
      tabBarActiveTintColor: colors.main,
      tabBarInactiveTintColor: colors['text-2'],
     
    }
  }
  
  >
    {tabs.map(config => (
      <Tab.Screen
        key={config.name}
        name={config.name}
        component={config.component}
        options={{ 
          tabBarIcon: createIconRenderer(config) 
        }}
      />
    ))}
  </Tab.Navigator>
);