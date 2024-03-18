import ThemeChanger from "./theme-changer";
import NavigationItem from "./navigation-item";
import { NAVIGATION_ITEMS } from "./constants/navigation.constants";
import Link from "next/link";

const NavigationHeader = () => {
  return (
    <header className="w-full h-16 flex justify-between items-center px-8">
      <Link href="/">
        <span className="font-kyobo text-2xl font-black">
          Ryu Hyeon
        </span>
      </Link>
      <nav className="flex w-[250px] h-full items-center justify-between text-center space-x-2 font-semibold gap-4 text-lg">
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationItem
            key={item.title}
            href={item.href}
            title={item.title}
          />
        ))}
      </nav>
      <ThemeChanger />
    </header>
  );
};

export default NavigationHeader;
