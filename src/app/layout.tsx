import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { SiteLayout } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter"
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-newsreader"
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: "Mostly Strategic",
  description: "Mostly Strategic is a consulting practice focused on brand, narrative, and growth."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
