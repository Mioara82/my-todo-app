import { create } from "zustand";
import { persist } from "zustand/middleware";
import { THEME_TYPES } from "@/constants";

const { THEME_LIGHT, THEME_DARK } = THEME_TYPES;

export type ThemeStoreState = { theme: string };
export type ThemeStoreActions = { toggleTheme: (theme: string) => void };
export type ThemeStore = ThemeStoreState & ThemeStoreActions;

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: typeof THEME_DARK,
      toggleTheme: (theme: string) =>
        theme === THEME_LIGHT
          ? set({ theme: THEME_DARK })
          : set({ theme: THEME_LIGHT }),
    }),
    { name: "theme-storage" }
  )
);
