import {useColorScheme} from "react-native";

import {darkTheme, lightTheme} from "./color-theme";

export function useThemeConfig() {
  const theme = useColorScheme() ?? 'light';
  return theme === 'dark' ? darkTheme : lightTheme;
}
