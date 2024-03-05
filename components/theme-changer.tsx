"use client";

import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const { setTheme, theme } = useTheme();

  const themeToggle = () => {
    console.log(theme);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <button type="button" onClick={themeToggle}>
        Theme-Change
      </button>
    </div>
  );
};

export default ThemeChanger;
