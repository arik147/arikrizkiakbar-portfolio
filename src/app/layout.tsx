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
  title: "Arik Rizki Akbar | Data Analyst & Analytics Portfolio",
  description: "Professional portfolio of Arik Rizki Akbar, a Data Analyst specializing in A/B testing & experimentation, modern BI dashboards, statistical modeling, and data pipelines.",
  keywords: ["Data Analyst", "Portfolio", "A/B Testing", "Experimentation", "Data Science", "Arik Rizki Akbar", "Data Visualization", "Looker Studio", "Python", "SQL"],
  openGraph: {
    title: "Arik Rizki Akbar | Data Analyst Portfolio",
    description: "Data Analyst specializing in statistical experimentation, machine learning, and BI architecture.",
    type: "website",
    locale: "en_US",
    siteName: "Arik Rizki Akbar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arik Rizki Akbar | Data Analyst Portfolio",
    description: "Data Analyst specializing in statistical experimentation, machine learning, and BI architecture.",
  },
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
