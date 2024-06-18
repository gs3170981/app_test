import {Platform, StyleSheet} from 'react-native';

/**
 * 是否是IOS
 */
export const isIOS = Platform.OS === 'ios';

export const API_URL_DEV = `https://facebook.github.io`;
export const API_URL_PROD = `https://facebook.github.io`;

/**
 * 请求域名
 */
export const API_URL = __DEV__ ?
  API_URL_DEV :
  API_URL_PROD
