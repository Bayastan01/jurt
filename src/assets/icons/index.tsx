import React from 'react'
import { TouchableOpacity } from 'react-native'
import { SvgProps } from 'react-native-svg'
import ArrowRight from './arrow-right.svg'
import Basket from './basket.svg'
import Bookmark from './bookmark.svg'
import BrandDefacto from './brand-defacto.svg'
import BrandKoton from './brand-koton.svg'
import BrandMudo from './brand-mudo.svg'
import BrandVictoriasSecret from './brand-victorieas-secret.svg'
import BrandWaikiki from './brand-waikiki.svg'
import CheckSolid from './check-solid.svg'
import ChevronRight from './chevron-right.svg'
import CreditCard from './credit-card.svg'
import DeleteUser from './delete-user.svg'
import Email from './email.svg'
import EmailSupport from './emailSupport.svg'
import MoneyCash from './money-cash.svg'
import EmptyList from './empty-list.svg'
import Error from './error.svg'
import Heart from './heart.svg'
import Info from './info.svg'
import List from './list.svg'
import Location from './location.svg'
import Lock from './lock.svg'
import Logout from './logout.svg'
import Map from './map-marker-solid.svg'
import MinusCircle from './minus-circle.svg'
import Notification from './notification.svg'
import Offer from './offer.svg'
import OutlineHeart from './outline-heart.svg'
import password_lock from './password_lock.svg'
import Phone from './phone.svg'
import Plane from './plane-solid.svg'
import PlusCircle from './plus-circle.svg'
import Question from './question.svg'
import RemoveAccount from './remove-account.svg'
import Seller from './seller.svg'
import ShippingFast from './shipping-fast.svg'
import Warning from './warning.svg'
import WhatsApp from './whatsApp.svg'
import Burger  from './burger.svg'
import Back from './back.svg'
import PromoCodes from './promoCodes.svg'
import Orders from './orders.svg'
import Purchases from './purchases.svg'
import Returns from './returns.svg'
import DeleteRecipient from './delete-recipient.svg'
import RouteBox from './route-box.svg'
import DeliveryBox from './delivery-box.svg'
import Home from './home.svg'
import Search from './search.svg'
import Favorite from './favorite.svg'
import Profile from './profile.svg'
import Sms from './sms.svg'
import { hitSlop } from '../../utils/theme/stringHelpers'
import { colors } from '../../utils/theme/colors'
import arrowdown from './arrow-down.svg'
import Calendar from './calendar.svg'
import Commercial from './commercial.svg'
import HomeModern from './home-modern.svg'
import BaselineHomeWork from './baseline-home-work.svg'
import StorageRental from './storage-rental.svg'
import Wallet from './wallet.svg'
import Settings from './settings-adjust.svg'
import Workflow from './workflow.svg'
export const icons = {
  calendar:Calendar,
  wallet:Wallet,
  sms: Sms,
  arrowdown: arrowdown,
  promoCodes: PromoCodes,
  returns: Returns,
  favorites: Favorite,
  orders: Orders,
  purchases: Purchases,
  basket: Basket,
  bookmark: Bookmark,
  home: Home,
  password_lock: password_lock,
  list: List,
  seller: Seller,
  profile: Profile,
  search: Search,
  heart: Heart,
  phone: Phone,
  email: Email,
  emailSupport: EmailSupport,
  lock: Lock,
  info: Info,
  whatsapp: WhatsApp,
  offer: Offer,
  question: Question,
  location: Location,
  warning: Warning,
  notification: Notification,
  logout: Logout,
  burger: Burger,
  back: Back,
  commercial:Commercial,
  workflow:Workflow,
  'settings-adjust':Settings,
  'storage-rental':StorageRental,
  'baseline-home-work':BaselineHomeWork,
  'home-modern':HomeModern,
  'delete-user': DeleteUser,
  'remove-account': RemoveAccount,
  'credit-card': CreditCard,
  'brand-waikiki': BrandWaikiki,
  'brand-defacto': BrandDefacto,
  'brand-koton': BrandKoton,
  'brand-mudo': BrandMudo,
  'arrow-right': ArrowRight,
  'empty-list': EmptyList,
  'money-cash': MoneyCash,
  'brand-victorias-secret': BrandVictoriasSecret,
  'outline-heart': OutlineHeart,
  'shipping-fast': ShippingFast,
  'chevron-right': ChevronRight,
  'check-solid': CheckSolid,
  'minus-circle': MinusCircle,
  'plus-circle': PlusCircle,
  'delete-recipient': DeleteRecipient,
  'route-box': RouteBox,
  'delivery-box': DeliveryBox,
  error: Error,
  map: Map,
  plane: Plane,
}

export type IconType = keyof typeof icons

export type IconProps = SvgProps & {
  type: IconType
  fill?: string
  touchable?: boolean
}

export const Icon = ({ type, touchable, fill = colors['main'], ...rest }: IconProps) => {
  const SelectedIcon = icons[type]
  if (!SelectedIcon) {
    console.warn(`Icon: нет иконки с ключом "${type}". Проверьте, что "${type}" есть в icons.`)
    return null
  }

  if (touchable) {
    return (
      <TouchableOpacity hitSlop={hitSlop(12)} activeOpacity={0.5} onPress={rest.onPress}>
        <SelectedIcon fill={fill} {...rest} />
      </TouchableOpacity>
    )
  }

  return <SelectedIcon fill={fill} {...rest} />
}
