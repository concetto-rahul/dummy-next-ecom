import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
type Props = {
  params: { lang: Locale };
  searchParams: { [key: string]: string | number | string[] | undefined };
};

export const metadata: Metadata = {
  title: "About us - BargainFox.com",
  description:
    "About us Buy bargains online with big discounts! Deals on Home, Kitchen, Electronics, Health & Beauty and Toys. Free delivery on orders over £50. BIG on Service - BIG on Savings.",
  openGraph: {
    title: "About us",
    description:
      "Buy bargains online with big discounts! Deals on Home, Kitchen, Electronics, Health & Beauty and Toys. Free delivery on orders over £50. BIG on Service - BIG on Savings.",
  },
};

export default async function OurStory({
  params: { lang },
  searchParams: { page },
}: Props) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <h2>Our story</h2>
    </>
  );
}
