"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeChanger = () => {
  const { setTheme, theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const handleThemeToggle = () =>
    setTheme(isDarkTheme ? "light" : "dark");

  return (
    <div>
      <button
        className=""
        type="button"
        onClick={handleThemeToggle}
      >
        {isDarkTheme ? <Sun /> : <Moon />}
      </button>
    </div>
  );
};

export default ThemeChanger;
