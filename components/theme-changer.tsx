"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDarkTheme = theme === "dark";

  const handleThemeToggle = () =>
    setTheme(isDarkTheme ? "light" : "dark");

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <button
      className=""
      type="button"
      onClick={handleThemeToggle}
    >
      {isDarkTheme ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeChanger;
