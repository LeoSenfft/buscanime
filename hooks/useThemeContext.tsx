import { ThemeContext } from "@/contexts/themeContext";
import { useContext } from "react";

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext precisa ser usado com ThemeContextProvider");
  }

  return context;
}
