import { Platform } from 'react-native';

export const ROBOTO_FONTS = Platform.OS === 'android' ? {
  extraLight: "Roboto-ExtraLight",
  light: "Roboto-Light",
  medium: "Roboto-Medium",
  bold: "Roboto-Bold",
  semiBold: "Roboto-Semibold",
  extraBold: "Roboto-ExtraBold",
} : {
  extraLight: "Roboto-ExtraLight",
  light: "Roboto-Light",
  medium: "Roboto-Medium",
  bold: "Roboto-Bold",
  semiBold: "Roboto-Semibold",
  extraBold: "Roboto-ExtraBold",
};

export const INDIEFLOWER_FONTS = Platform.OS === "android" ? {
  regular: "IndieFlower-Regular"
} : {
  regular: "IndieFlower"
};
