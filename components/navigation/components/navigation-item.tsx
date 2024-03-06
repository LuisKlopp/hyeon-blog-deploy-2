"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItemProps {
  href: string;
  title: string;
}

export const NavigationItem = ({
  href,
  title,
}: NavigationItemProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={
        (cn(
          "font-semibold hover:text-blogThickRed",
        ),
        pathname.startsWith(href)
          ? "text-blogThickRed"
          : "")
      }
    >
      {title}
    </Link>
  );
};

export default NavigationItem;
