import { ThemeProvider } from "@/components/theme-provider";

import "../style/globals.css";
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          storageKey="blog-theme"
          disableTransitionOnChange
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
