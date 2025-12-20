"use client";
import { ReactNode, useEffect } from "react";
import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
import { useThemeStore } from "./themeStore";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { setTheme: setStoreTheme } = useThemeStore();
  const { theme } = useTheme();

  useEffect(() => {
    if (theme) setStoreTheme(theme as "light" | "dark");
  }, [theme, setStoreTheme]);

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={false}
    >
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
