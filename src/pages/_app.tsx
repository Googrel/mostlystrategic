import type { AppProps } from "next/app";
import { Inter, Newsreader } from "next/font/google";
import "../app/globals.css";
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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${newsreader.variable}`}>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </div>
  );
}
