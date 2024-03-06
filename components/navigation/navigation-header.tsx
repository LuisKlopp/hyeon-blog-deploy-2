import ThemeChanger from "../theme-changer";
import NavigationItem from "./components/navigation-item";
import { NAVIGATION_ITEMS } from "./constants/navigation.constants";

const NavigationHeader = () => {
  return (
    <div className="w-full h-20 flex justify-between items-center px-8">
      <ThemeChanger />
      <div className="w-2/6 flex justify-between font-semibold">
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationItem
            key={item.title}
            href={item.href}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationHeader;
