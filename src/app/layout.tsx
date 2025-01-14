import type { Metadata } from "next";
import { Crimson_Text, Figtree, Inter } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "HealthBridge | Modern Solutions for Your Needs",
  description:
    "HealthBridge is a platform that connects doctors, health service, and patients. We offer comprehensive features, expert support, and proven results backed by customer success stories.",
  keywords:
    "business solutions, digital transformation, enterprise software, customer support, business optimization",
  openGraph: {
    title: "HealthBridge | Modern Solutions for Your Needs",
    description: "Discover innovative solutions that transform your business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonText.variable} ${inter.variable} ${figtree.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
