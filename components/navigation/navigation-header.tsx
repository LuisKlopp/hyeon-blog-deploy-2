import ThemeChanger from "./theme-changer";
import NavigationItem from "./navigation-item";
import { NAVIGATION_ITEMS } from "./constants/navigation.constants";

const NavigationHeader = () => {
  return (
    <header className="w-full h-20 flex justify-between items-center px-8">
      <ThemeChanger />
      <nav className="flex h-full items-center justify-center text-center space-x-2 font-semibold gap-4">
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationItem
            key={item.title}
            href={item.href}
            title={item.title}
          />
        ))}
      </nav>
    </header>
  );
};

export default NavigationHeader;
