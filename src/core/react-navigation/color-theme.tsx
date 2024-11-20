import {type Theme} from "@react-navigation/native";
import originalDarkTheme from "@react-navigation/native/src/theming/DarkTheme";
import originalLightTheme from "@react-navigation/native/src/theming/DefaultTheme";

export const darkTheme: Theme = {
  ...originalDarkTheme
}

export const lightTheme: Theme = {
  ...originalLightTheme
};
