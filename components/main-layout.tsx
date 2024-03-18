import NavigationHeader from "./navigation/navigation-header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({
  children,
}: MainLayoutProps) => {
  return (
    <div className="w-full h-full">
      <NavigationHeader />
      <hr className=" border-solid border-1 border-blogThickRed" />
      {children}
    </div>
  );
};

export default MainLayout;
