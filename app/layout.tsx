import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "800"],
});

const playfair = localFont({
  src: "./fonts/Playfair-LightItalic.ttf",
  variable: "--font-playfair",
  weight: "300",
  style: "italic",
});

export const metadata: Metadata = {
  title: "Non — Product & Motion Designer",
  description: "Portfolio of Navneet Mandal, Product & Motion Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${playfair.variable} font-body font-semibold antialiased bg-bg text-text-primary`}
      >
        <Navbar />
        {children}
        <FooterCTA />
      </body>
    </html>
  );
}
