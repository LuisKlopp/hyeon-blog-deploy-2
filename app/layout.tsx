import { ThemeProvider } from "@/components/theme-provider";

import "@/styles/globals.css";
import type { Metadata } from "next";

import { Noto_Sans } from "next/font/google";
import MainLayout from "@/components/main-layout";

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
        className={`${notoSans.className} bg-blogBackground dark:bg-blogBlack transition`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          storageKey="blog-theme"
        >
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "RyuHyeon | Frontend Engineer",
  description: "RyuHyeon의 블로그입니다.",
};
