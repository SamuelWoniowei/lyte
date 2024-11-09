import type { Metadata } from "next";
import {Red_Hat_Display} from "next/font/google";
import "./globals.css";


const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  variable: "--font-red-hat", 
});

export const metadata: Metadata = {
  title: "LyteHosting",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHatDisplay.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
