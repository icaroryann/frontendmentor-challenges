import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogueSans = Epilogue({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Intro section with dropdown navigation",
  description: "Intro section with dropdown navigation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogueSans.className} antialiased`}
      >
        <header>Header</header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
