"use client";

import React, { createContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next/client";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type Theme = "dark" | "light";

type ThemeContext = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const cookie = getCookie("theme") as Theme;
  const [theme, setTheme] = useState<Theme>(cookie ?? "light");

  useEffect(() => {
    setCookie("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
