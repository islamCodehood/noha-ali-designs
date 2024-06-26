import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css";
import TopNav from "./components/top-nav/top-nav.component";

const publicSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

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
      <body className={`${publicSans.className} px-16 pt-6`}>
        <TopNav />
        {children}
        </body>
    </html>
  );
}
