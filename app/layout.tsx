import type { Metadata } from "next"

import "./globals.css";
import TopNav from "./components/top-nav/top-nav.component";
import Logo from "./components/logo/logo.component";
import { openSans } from "./fonts/fonts";


export const metadata: Metadata = {
  title: "Noha Ali Designs",
  description: "Noha Ali Designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} px-6 pt-3 md:px-12 md:pt-6 lg:px-16 lg:pt-6`}>
        <header className="">
        <Logo />
        <TopNav />
        </header>
        {children}
        </body>
    </html>
  );
}
