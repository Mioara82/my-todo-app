"use client";
import { useThemeStore } from "@/lib/store/theme_store";
import { useTheme } from "../../lib/hooks/useTheme";
import type { ThemeStoreActions } from "@/lib/store/theme_store";
import { Button } from "@/components/ui/button";
import { THEME_TYPES } from "@/constants";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggler = () => {
  const theme = useTheme();
  const toggleTheme = useThemeStore(
    (state: ThemeStoreActions) => state.toggleTheme
  );
  const { THEME_DARK } = THEME_TYPES;
  const getThemeButtonLabel = (theme: string) =>
    theme === THEME_DARK ? <FaMoon /> : <FaSun />;

  return (
    <div>
      <Button onClick={() => toggleTheme(theme)}>
        {getThemeButtonLabel(theme)}
      </Button>
    </div>
  );
};

export default ThemeToggler;
