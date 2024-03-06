import Image from "next/image";
import ProfileImage from "../public/me2.png";
import ThemeChanger from "@/components/theme-changer";
import NavigationHeader from "@/components/navigation/navigation-header";

const HomePage = () => {
  return (
    <>
      <NavigationHeader />
      <Image
        alt="It's me"
        src={ProfileImage}
        width={250}
        className="rounded-full"
      />
    </>
  );
};

export default HomePage;
