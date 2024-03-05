"use client";

import ThemeChanger from "@/components/theme-changer";

const HomePage = () => {
  return (
    <div className="w-full h-full bg-blogBackground dark:bg-blogBlack">
      <h1>Home Page</h1>
      <ThemeChanger />
    </div>
  );
};

export default HomePage;
