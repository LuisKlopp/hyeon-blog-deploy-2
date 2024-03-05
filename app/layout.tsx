import "../style/globals.css";
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-[#f2f2f2]">{children}</body>
    </html>
  );
}

export const metadata = {
  title: {
    default: "RyuHyeon | Frontend Engineer",
  },
  description: "RyuHyeon의 블로그입니다.",
};
