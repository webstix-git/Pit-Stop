import type { Metadata } from "next";
import IconSprites from "@/components/IconSprites";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pit Stop · Automotive & Equipment Maintenance · Mabel, MN",
  appleWebApp: {
    title: "Pit Stop",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <IconSprites />
        <Header />
        {children}
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
