import Link from "next/link";

interface NavigationItemProps {
  href: string;
  title: string;
}

export const NavigationItem = ({
  href,
  title,
}: NavigationItemProps) => {
  return (
    <Link
      href={href}
      className=" text-blogSoftRed font-semibold"
    >
      {title}
    </Link>
  );
};

export default NavigationItem;
