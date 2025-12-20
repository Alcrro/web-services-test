"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 animate-spin"
        aria-hidden="true"
      ></div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-yellow-500 dark:text-yellow-400 transition-all duration-300 hover:scale-110 hover:cursor-pointer"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      type="button"
    >
      {isDark ? (
        <Sun className="w-6 h-6" aria-hidden="true" />
      ) : (
        <Moon className="w-6 h-6" aria-hidden="true" />
      )}
    </button>
  );
}
