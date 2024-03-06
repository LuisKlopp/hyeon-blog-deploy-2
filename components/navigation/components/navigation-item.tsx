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
      className="dark:text-[#f2f2f2] font-semibold hover:text-blogThickRed dark:hover:text-blogThickRed"
    >
      {title}
    </Link>
  );
};

export default NavigationItem;
