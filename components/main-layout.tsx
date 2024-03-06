interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({
  children,
}: MainLayoutProps) => {
  return (
    <div className="w-full h-full max-w-screen-md mx-auto min-w-[320px]">
      {children}
    </div>
  );
};

export default MainLayout;
