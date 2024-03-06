import { ThemeProvider } from "@/components/theme-provider";

import "../style/globals.css";
import type { Metadata } from "next";

import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${notoSans.className} w-full h-full bg-blogBackground dark:bg-blogBlack max-w-screen-md mx-auto min-w-[320px] transition`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          storageKey="blog-theme"
          // disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "RyuHyeon | Frontend Engineer",
  description: "RyuHyeon의 블로그입니다.",
};
