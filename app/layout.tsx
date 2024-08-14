import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/pageTransitions/preloader";
import Navbar from "./navbar";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"], weight: ['300','400', '500', '700', '800'] });

export const metadata: Metadata = {
  title: "Hamuj Homes | Your best choice for construction in Nigeria",
  description: "Hamuj Homes Ltd is a Nigerian based construction company. We specialise at making renovations and construction affordable while maintaining utmost elegance and grandeur",
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
