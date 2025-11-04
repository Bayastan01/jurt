import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum ERootStackRoutes {
  Search = 'Search', 
  Sms = 'Sms',
  ProfileStack = 'ProfileStack',
  ProfileMain = 'ProfileMain',
  CategoriesMain = 'CategoriesMain',
  MainStack='MainStack',
  Delivery='Доставка',
  Contract = 'Contract',
  KgDelivery='KgDelivery',
  DeliveryScreen='Доставка',
  Otp = 'Otp',
  CargoDelivery='CargoDelivery',
  CityDelivery='CityDelivery',
  ExpressDelivery='ExpressDelivery',
  Form = 'Form',
  ModalHost="ModalHost",
  Adress = 'Adress',
  MarketScreen='MarketScreen',
  Password = 'Password',
  Profile = 'Profile',
  Basket = 'Basket',
  NewAdress = 'NewAdress',
  MainCategories = 'MainCategories',
  CategoriesStack = 'CategoriesStack',
  SubCategories = 'SubCategories',
  LeftTabBar = 'LeftTabBar',
  CategoryProducts = 'CategoryProducts',
  Authorization = 'Authorization',
  Registration = 'Registration',
  Faq = 'Faq',
  MyCard = 'MyCard',
  NewCard = 'NewCard',
  Support = 'Support',
  DetailProduct = 'DetailProduct',
  Favorites = 'Favorites',
  Article = 'Article',
  UserOrders = 'UserOrders',
  Market = "Market",
  // Main = "Main",
  Home="Home",
  Notification="Notification",
  MarketStack = 'MarketStack',
  Return ='Return' ,
  Order =' Order',
  Purchases='Purchases',
  RouteScreen='Маршрут'
}

export type TRootStackParamList = {

  [ERootStackRoutes.Search]: undefined;
  [ERootStackRoutes.Order]: undefined;
  [ERootStackRoutes.RouteScreen]: undefined;
  [ERootStackRoutes.Purchases]: undefined;
  [ERootStackRoutes.LeftTabBar]: undefined;
  [ERootStackRoutes.DeliveryScreen]: undefined;
  [ERootStackRoutes.Notification]:undefined;
  [ERootStackRoutes.Delivery]: undefined;
  [ERootStackRoutes.ModalHost]: undefined;
  [ERootStackRoutes.MarketScreen]:undefined
  [ERootStackRoutes.MarketStack]:undefined
  [ERootStackRoutes.MainStack]: undefined;
  [ERootStackRoutes.KgDelivery]: undefined;
  [ERootStackRoutes.CargoDelivery]: undefined;
  [ERootStackRoutes.CityDelivery]: undefined;
  [ERootStackRoutes.ExpressDelivery]: undefined;
  [ERootStackRoutes.Contract]: undefined;
  [ERootStackRoutes.Form]: undefined;
  [ERootStackRoutes.Otp]: undefined;
  [ERootStackRoutes.MyCard]: undefined;
  [ERootStackRoutes.NewCard]: undefined;
  [ERootStackRoutes.Adress]: undefined;
  [ERootStackRoutes.NewAdress]: undefined;
  [ERootStackRoutes.Password]: undefined;
  [ERootStackRoutes.Basket]: undefined;
  [ERootStackRoutes.MainCategories]: undefined;
  [ERootStackRoutes.CategoriesStack]: undefined;
  [ERootStackRoutes.SubCategories]: {
    categoryId: number;
    categoryName: string;
  };
  [ERootStackRoutes.CategoryProducts]: {
    categoryId: number;
    categoryName: string;
  };
  [ERootStackRoutes.Authorization]: undefined;
  [ERootStackRoutes.Registration]: undefined;
  [ERootStackRoutes.Profile]: undefined;
  [ERootStackRoutes.Return]: undefined;

  [ERootStackRoutes.Faq]: undefined;
  [ERootStackRoutes.Support]: undefined;
  [ERootStackRoutes.Favorites]: undefined;
  [ERootStackRoutes.DetailProduct]: {
    productId: string;
    productName: string;
  };
  [ERootStackRoutes.Article]: {
    url: string;
    title: string;
  };
  [ERootStackRoutes.UserOrders]: undefined;
};

export type TNavigationProp<RouteName extends keyof TRootStackParamList> =
  NativeStackNavigationProp<TRootStackParamList, RouteName>;

export type TNavigationRouteProp<RouteName extends keyof TRootStackParamList> =
  RouteProp<TRootStackParamList, RouteName>;
