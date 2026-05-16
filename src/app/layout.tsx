import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arik Rizki Akbar | Data Analyst Portfolio",
  description: "Professional portfolio of Arik Rizki Akbar, a Data Analyst specializing in data visualization, statistical analysis, and machine learning insights.",
  keywords: ["Data Analyst", "Portfolio", "Data Science", "Arik Rizki Akbar", "Data Visualization"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter)' }}>{children}</body>
    </html>
  );
}
