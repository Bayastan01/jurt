import { Dimensions, Platform } from 'react-native';
import * as Device from 'expo-device';
import {
  getBottomSpace,
  getStatusBarHeight,
  isIphoneX,
} from 'react-native-iphone-x-helper';

const iPhonesWithDynamicIsland = ['iPhone15,2', 'iPhone15,3'];

const isIphoneWithDynamicIsland = iPhonesWithDynamicIsland.includes(
  Device.modelId || ''
);

export const bottomSpace =
  Platform.OS === 'android'
    ? 12
    : isIphoneWithDynamicIsland
    ? getBottomSpace() + 32
    : getBottomSpace();

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const isAndroid = Platform.OS === 'android';
export const bottomTabBarHeight = 80;

export const statusBarHeight =
  Platform.OS === 'android'
    ? 0
    : getStatusBarHeight() +
      (isIphoneX() ? 8 : isIphoneWithDynamicIsland ? 20 : 0);
