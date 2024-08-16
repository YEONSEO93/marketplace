import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | 🥯 Bagel Marketplace",
    default: "🥯 Bagel Marketplace",
  },
  description: "Sell and buy all the things!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#FFFBEA] text-[#333333] max-w-screen-sm mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
