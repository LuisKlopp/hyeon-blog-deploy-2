import ThemeChanger from "../theme-changer";

export const NAVIGATION_ITEMS = [
  {
    href: "/blog",
  },
];

const NavigationHeader = () => {
  return (
    <div className="w-full h-10 flex justify-center items-center">
      <ThemeChanger />
      <span className=" font-extrabold text-blogSoftRed">
        Blog
      </span>
    </div>
  );
};

export default NavigationHeader;
