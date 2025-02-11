import { darkColors, lightColors } from "theme/colors";
import { dextopToggleTheme } from "./types";

export const light: dextopToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: dextopToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
