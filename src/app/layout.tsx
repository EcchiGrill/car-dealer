import type { Metadata } from "next";
import { Andika } from "next/font/google";
import "./globals.css";

const andika = Andika({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Car Dealer",
  description: "Simple cars filtering app",
  creator: "EcchiGrill",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${andika.className} antialiased`}>{children}</body>
    </html>
  );
}
