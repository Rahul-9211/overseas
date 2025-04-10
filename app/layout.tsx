import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from './components/ThemeProvider';
import Header from "./components/Header";
import Footer from './components/Footer';
import ConsultationPopup from './components/ConsultationPopup';
import { ConsultationProvider } from "../src/utils/ConsultationContext";
import Script from 'next/script';

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
          <ConsultationProvider>
            <Header />
            {children}
            <Footer />
            <ConsultationPopup />
          </ConsultationProvider>
        </ThemeProvider>
        
        {/* Force open the consultation form after 2 seconds */}
        <Script id="open-consultation-form" strategy="afterInteractive">
          {`
            setTimeout(() => {
              try {
                // Try to find and click any consultation button in the DOM
                const formElement = document.querySelector('[aria-label="Open consultation form"]');
                if (formElement) {
                  formElement.click();
                } else if (window.openConsultationForm) {
                  window.openConsultationForm();
                }
              } catch (e) {
                console.error('Error opening consultation form:', e);
              }
            }, 2000);
          `}
        </Script>
      </body>
    </html>
  );
}