import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Global Immigration Solutions | Work & Visit Visas",
  description: "Expert immigration consultancy services for work and visit visas. Your trusted partner in global mobility.",
  keywords: "immigration, work visa, visit visa, global mobility, visa consultancy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-dark-800`}>
        {children}
      </body>
    </html>
  );
}
