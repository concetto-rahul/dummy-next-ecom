import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import DealTopSection from "@/components/home/deals/deal-top-section";
import DealProductList from "@/components/home/products/deal.product.list";
type Props = {
  params: { lang: Locale };
  searchParams: { [key: string]: string | number | string[] | undefined };
};

const homeData = {
  deals: [
    {
      id: 1,
      title: "Women's Western Clothing Women's Western Clothing",
      discount: "40",
      image: "/images/floral-dresses.jpg",
    },
    {
      id: 2,
      title: "Men's Western Clothing",
      discount: "40",
      image: "/images/jacket.jpg",
    },
    {
      id: 3,
      title: "Casual Shoes",
      discount: "50",
      image: "/images/sneaker.jpg",
    },
    {
      id: 4,
      title: "Men's Running shoes",
      discount: "50",
      image: "/images/closeup-jogger.jpg",
    },
    {
      id: 5,
      title: "Statement Fashion Jewellery",
      discount: "30",
      image: "/images/golden-ring.jpg",
    },
    {
      id: 6,
      title: "Women's Western Clothing",
      discount: "40",
      image: "/images/floral-dresses.jpg",
    },
    {
      id: 7,
      title: "Sunglasses",
      discount: "40",
      image: "/images/jacket.jpg",
    },
    {
      id: 8,
      title: "Sunglasses New",
      discount: "40",
      image: "/images/sunglasses.jpg",
    },
    {
      id: 9,
      title: "Jewellery New",
      discount: "40",
      image: "/images/WHTSTRK.png",
    },
  ],
};

const fetchProductList = async (pageNumber: number) => {
  const limit = 12;
  const skip = limit * (pageNumber ? pageNumber - 1 : 0);
  console.log("fetchProductList", { limit, skip });
  const data = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    {
      cache: "no-store",
    }
  );
  const res = (await data).json();
  return res;
};
export default async function Deals({
  params: { lang },
  searchParams: { page },
}: Props) {
  const dictionary = await getDictionary(lang);
  const productList = await fetchProductList(Number(page) || 0);
  // console.log({ productList });
  return (
    <>
      <DealTopSection list={homeData.deals} />
      <DealProductList title="Amazing Deals for You" list={productList} />
    </>
  );
}
