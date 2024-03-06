import Image from "next/image";
import ProfileImage from "../public/me2.png";
import ThemeChanger from "@/components/theme-changer";
import NavigationHeader from "@/components/navigation/navigation-header";
import MainLayout from "@/components/main-layout";

const HomePage = () => {
  return (
    <MainLayout>
      <NavigationHeader />
      <Image
        alt="It's me"
        src={ProfileImage}
        width={250}
        className="rounded-full"
        priority
      />
    </MainLayout>
  );
};

export default HomePage;
