import { useEffect } from "react";
import { useThemeStore } from "@/lib/store/theme_store";
import { applyThemePreference } from "../../app/utils/theme_utils";
import type { ThemeStoreState } from "@/lib/store/theme_store";

export function useTheme() {
  const theme = useThemeStore((state: ThemeStoreState) => state.theme);

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);

  return theme;
}
