import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from './components/ThemeProvider';
import Header from "./components/Header";
import Footer from './components/Footer';
import ConsultationPopup from './components/ConsultationPopup';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'VisaFilling.com - Your Trusted Immigration Partner',
  description: 'VisaFilling.com is India\'s Most Specialisation in Documentation. Having Pan India Associates and Established in 2020, our core competence is visa documentation expertise in providing job overseas.',
  keywords: 'visa, immigration, documentation, overseas jobs, visa filling, visa application, immigration services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} scroll-smooth antialiased bg-white dark:bg-dark-900 text-dark-800 dark:text-gray-100`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <ConsultationPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}