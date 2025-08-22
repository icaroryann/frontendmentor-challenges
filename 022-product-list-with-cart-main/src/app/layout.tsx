import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const redHatText = Red_Hat_Text({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Frontend Mentor | Product list with cart",
  description: "Product list with cart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHatText.className} antialiased bg-c-rose-100`}
      >
        {children}
      </body>
    </html>
  );
}
