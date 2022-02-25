import { Platform, Dimensions } from 'react-native';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';

const Android: 'android' = 'android';
const IOS: 'ios' = 'ios';

const isAndroid = Platform.OS === Android;
const version = isAndroid
  ? Platform.Version
  : parseInt(Platform.Version as string, 10);

const isTablet = Platform.OS === 'ios' && Platform.isPad;

const windowDimensions = Dimensions.get('window');

const isSmallDevice = windowDimensions.height < 680;
const isNarrowDevice = windowDimensions.width < 380;

interface GetValueByDeviceParams<T> {
  default: T;
  narrowDevice?: T;
  smallDevice?: T;
  tablet?: T;
}

const getValueByDevice = <T>({
  default: defaultValue,
  narrowDevice,
  smallDevice,
  tablet,
}: GetValueByDeviceParams<T>): T => {
  if (isTablet) {
    return tablet || defaultValue;
  }

  if (isNarrowDevice) {
    return narrowDevice || defaultValue;
  }

  if (isSmallDevice) {
    return smallDevice || defaultValue;
  }

  return defaultValue;
};

const statusBarHeight = isAndroid
  ? getStatusBarHeight()
  : getStatusBarHeight(isIphoneX());

export default {
  Android,
  getValueByDevice,
  IOS,
  isAndroid,
  isIOS: !isAndroid,
  isNarrowDevice,
  isSmallDevice,
  isTablet,
  statusBarHeight,
  version,
  windowDimensions,
};
