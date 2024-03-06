import ThemeChanger from "../theme-changer";
import NavigationItem from "./components/navigation-item";
import { NAVIGATION_ITEMS } from "./constants/navigation.constants";

const NavigationHeader = () => {
  return (
    <div className="w-full h-10 flex justify-between items-center">
      <ThemeChanger />
      {NAVIGATION_ITEMS.map((item) => (
        <NavigationItem
          key={item.title}
          href={item.href}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default NavigationHeader;
