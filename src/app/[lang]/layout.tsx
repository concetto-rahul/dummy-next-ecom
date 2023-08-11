import "./../globals.scss";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { i18n } from "@/i18n-config";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "BIG Discounts - Daily Deals on New & Preloved Products - BargainFox.com",
  description:
    "Buy bargains online with big discounts! Deals on Home, Kitchen, Electronics, Health & Beauty and Toys. Free delivery on orders over £50. BIG on Service - BIG on Savings.",
  keywords: "BargainFox.com",
  themeColor: "#ff7315",
  authors: [{ name: "bargainfox.com" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APPLICATION_BASE_URL || ""),
  openGraph: {
    title:
      "BIG Discounts - Daily Deals on New & Preloved Products - BargainFox.com",
    description:
      "Buy bargains online with big discounts! Deals on Home, Kitchen, Electronics, Health & Beauty and Toys. Free delivery on orders over £50. BIG on Service - BIG on Savings.",
    url: process.env.NEXT_PUBLIC_APPLICATION_BASE_URL || "",
    siteName: "bargainfox.com",
    type: "website",
    images: [
      {
        url: "/images/main-logo-white.png",
        alt: "bargainfox",
        width: 374,
        height: 170,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary",
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <body className={`${inter.variable}`}>
        <div className="main-page">
          <header>
            <Link href="/">
              <Image
                src="/images/main-logo-white.png"
                alt=""
                width={160}
                height={84}
              />
            </Link>
          </header>
          <div>{children}</div>
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
