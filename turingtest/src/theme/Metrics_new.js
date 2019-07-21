/*
 * @flow
 * TODO: value * ratio difference between Android and iOS is of 2 value;
 * 16 in iOS is equals to 14 in android but this need to be verify.
 */

import { Dimensions, Platform, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;
const iphoneX = height == 812;

// const guidelineBaseWidth = 414;
// const guidelineBaseHeight = 736;
const guidelineBaseWidth = iphoneX ? 375 : 414;
const guidelineBaseHeight = iphoneX ? 812 : 736;

const scale = size => (screenWidth / guidelineBaseWidth) * +size;
const scaleVertical = size => (screenHeight / guidelineBaseHeight) * size;

const ratio = (iosSize: number, androidSize: ?number) =>
  Platform.select({
    ios: scaleVertical(iosSize),
    android: androidSize || iosSize
  });

const generatedFontSize = (iosFontSize: number, androidFontSize: ?number) =>
  Platform.select({
    ios: scale(iosFontSize),
    android: androidFontSize || iosFontSize
  });

const NAVBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : 24;

export default {
  ratio,
  scaleVertical,
  screenWidth,
  screenHeight,
  generatedFontSize,
  smallMargin: ratio(8),
  baseMargin: ratio(16),
  mediumBaseMargin: ratio(24),
  doubleBaseMargin: ratio(32),
  statusBarHeight: STATUSBAR_HEIGHT,
  //horizontalLineHeight: StyleSheet.hairlineWidth,
  horizontalLineHeight: ratio(1),
  navBarHeight: NAVBAR_HEIGHT + STATUSBAR_HEIGHT,
  tabBarHeight: 49, // Default tab bar height in iOS 10 (source react-navigation)
  borderRadius: ratio(3),
  defaultUIHeight: ratio(47),
  buttonHeight: ratio(57),
  icon: {
    tiny: ratio(5),
    small: ratio(16),
    normal: ratio(24), // Default tab icon size (source react-navigation)
    medium: ratio(35),
    large: ratio(40),
    xLarge: ratio(50),
    xxLarge: ratio(60),
    xxxLarge: ratio(100)
  },
  image: {
    small: ratio(35),
    medium: ratio(40),
    medium2: ratio(45),
    medium3: ratio(50),
    large: ratio(55),
    xLarge: ratio(70),
    xxLarge: ratio(90),
    coverWidth: screenWidth,
    coverHeight: screenWidth / 2
  }
};
