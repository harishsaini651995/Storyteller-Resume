import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundMotion } from "@/components/BackgroundMotion";

import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harish Saini | Graphic Designer & Storyteller",
  description: "Senior Graphic Designer and Presentation Strategist specializing in visual storytelling and high-impact design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#121212] flex flex-col min-h-screen antialiased`}>
        <Navbar />
        <BackgroundMotion />
        <main className="relative flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
