import { THEME_TYPES } from "@/constants";

export const applyThemePreference = (theme: string) => {
  const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;
  const isDark = theme === THEME_DARK;
  const root = window.document.documentElement;
  root.classList.remove(isDark ? THEME_LIGHT : THEME_DARK);
  root.classList.add(theme);
};
