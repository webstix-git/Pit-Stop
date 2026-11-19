import type { Metadata } from "next";
import IconSprites from "@/components/IconSprites";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pit Stop · Automotive & Equipment Maintenance · Mabel, MN",
  description:
    "A friendly family shop in Mabel, MN for oil changes, tire repairs, brake work and light maintenance on cars, pickups, SUVs, side-by-sides, 4-wheelers and lawnmowers.",
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
