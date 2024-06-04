import { Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const colors = {
  //theme colors
  themeColor: "#BC4E9C",
  themeColor1:"#C14897",
  themeColor2:"#C44493",
  themeColor10:"#CE3988",
  themeColor20:"#D43281",
  themeColor11:"#DA2A7A",
  themeColor21:"#E22172",
  themeColor12:"#E8196A",
  themeColor22:"#EE1364",
  themeColor23:"#F80759",

  darkThemeColor: "#202231",
  color_6: "#ECF2F3",

  //white variants
  white: "#FFFFFF",
  lightWhite: "#FCFCFC",
  whiteOpacity30: "rgba(255, 255, 255, 0.3)",
  white_1: "#F7F8F9",
  white_2: "#F5F5F5",

  //black variants
  black: "#000000",
  black_2: "#282828",
  black_3: "#121217",

  //red variants
  red: "#F64747",
  red_1: "#F64747",

  //grey variants
  grey_1: "#71717A",
  grey_2: "#ECECEC",
  grey_3: "#8B8B8B",
  grey_4: "#F5F5F5",
  grey_5: "#E8ECF4",
  grey_6: "#F0F2F5",
  grey_7: "#637087",
  grey_8: "#979797",
  grey_9: "#8391A1",
  grey_10: "#EEEEEE",
  grey_11: "#E5E7EB",
  grey_12: "#F5F7FA",
  grey_13: "#F7F9FF",
  grey_14: "#EBEBEB",
  grey_15: "#A1A1A1",
  grey_16: "#B7B7B7",
  grey_17: "#EDF1F4",
  grey_18: "#85939B",
  grey_19: "#C8C8C8",
  grey_20: "#F6F6F5",
  grey_21: "#4B4B4B",
  grey_22: "#494949",
  grey_23: "#DFDFDF",
  grey_24: "rgba(60, 60, 67, 0.3)",
  grey_25: "#575757",
  grey_26: "#565656",
  grey_27: "#323232",
  grey_28: "#CECECE",
  grey_29: "#E2E2E2",
  grey_30: "#4B5563",
  grey_31: "#717171",

  color_6: "#ECF2F3",
  color_7: "#333333",

  //blue  variants
  primary: "#0059B3",
  blue_1: "#007AFF",
  blue_2: "#111827",
  blue_3: "#EFF6FF",
  blue_4: "#090F47",
  blue_5: "#1E549B",
  blue_6: "#E7FFF5",
  blue_7: "#C2DFFC",
  blue_8: "#E7EFFF",

  // green  variants
  green_1: "#8BC34A",
  green_2: "#35C2C1",
  green_3: "#2D9D6E",
  green_4: "#16B364",
  green_5: "#21A838",
  green_6: "#0D8D23",
  green_7: "#F3FFF3",
  green_8: "#14C933",
  green_9: "#259238",
  green_10: "#10B22B",
  green_11: "#50D29B",

  //others
  transparent: "transparent",

  //grey
  gray: "#7E7E7E",
  shadow: "#171717",
  notificationGray: "#616466",
  notificationDate: "#8F9295",
};

const lightThemeColors = {
  white: colors.white,
  backgroundColor: colors.transparent,
  themeColor: colors.themeColor,
};

const darkThemeColors = {
  white: colors.white,
  backgroundColor: colors.nevyBlue,
  themeColor: colors.darkThemeColor,
};

const sizes = {
  // global sizes
  size0: Platform.OS == "ios" ? hp("1%") : hp("1.2%"),
  size01: Platform.OS == "ios" ? hp("1.3%") : hp("1.5%"),
  size11: Platform.OS == "ios" ? hp("1.35%") : hp("1.55%"),
  size1: Platform.OS == "ios" ? hp("1.5%") : hp("1.7%"),
  size2: Platform.OS == "ios" ? hp("1.8%") : hp("1.9%"),
  size3: Platform.OS == "ios" ? hp("2%") : hp("2.2%"),
  size4: Platform.OS == "ios" ? hp("2.3%") : hp("2.5%"),
  size5: Platform.OS == "ios" ? hp("2.5%") : hp("2.7%"),
  size6: Platform.OS == "ios" ? hp("2.8%") : hp("3%"),
  size7: Platform.OS == "ios" ? hp("3%") : hp("3.2%"),
  size8: Platform.OS == "ios" ? hp("3.5%") : hp("3.5%"),
  size011: Platform.OS == "ios" ? hp("1.4%") : hp("1.6%"),
  size012: Platform.OS == "ios" ? hp("1.55%") : hp("1.7%"),
};

const fontfamily = {
  light: "OpenSans-Light", // 300
  regular: "OpenSans-Regular", // 400
  medium: "OpenSans-Medium", // 500
  semiBold: "OpenSans-SemiBold", // 600
  bold: "OpenSans-Bold", // 700
  extraBold: "OpenSans-ExtraBold", // 800
};


export {
  colors,
  darkThemeColors,
  fontfamily,
  lightThemeColors,
  sizes,
};
