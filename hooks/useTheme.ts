"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;

    if (stored) {
      setTheme(stored);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setTheme(prefersDark ? "dark" : "light");
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );

    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  return {
    theme,
    mounted,
    toggle: () =>
      setTheme((t) => (t === "dark" ? "light" : "dark")),
  };
}