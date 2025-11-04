import React from 'react';
import { GenericTabBar, TabConfig } from '.././GenericTabBar';
import { ERootStackRoutes } from '../../routes/types';
import HomeScreen from '../../screens/Home';
import SearchScreen from '../../screens/Search';
import FavoritesScreen from '../../screens/Favorites';
import SmsScreen from '../../screens/Sms';
import ProfileScreen from '../../screens/Profile';

const mainTabs: TabConfig[] = [
  { 
    name: ERootStackRoutes.Home, 
    component: HomeScreen, 
    icon: 'home', 
    initialFillIsNone: true 
  },
  { 
    name: ERootStackRoutes.Search, 
    component: SearchScreen, 
    icon: 'search' 
  },
  { 
    name: ERootStackRoutes.Favorites, 
    component: FavoritesScreen, 
    icon: 'favorites' 
  },
  { 
    name: ERootStackRoutes.Sms, 
    component: SmsScreen, 
    icon: 'sms' 
  },
  
  { 
    name: ERootStackRoutes.Profile, 
    component: ProfileScreen, 
    icon: 'profile' 
  },
];

export const MainTabBar: React.FC = () => (
  <GenericTabBar
    initialRouteName={ERootStackRoutes.Home}
    tabs={mainTabs}
    showLabels={false}
  />
);