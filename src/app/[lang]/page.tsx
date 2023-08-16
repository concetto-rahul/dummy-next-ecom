import { Suspense } from "react";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import CollectionList from "@/components/home/collection/list";
import HomeBanner from "@/components/home/banner";
import DealsList from "@/components/home/deals/list";
import TrendingList from "@/components/home/deals/trending-list";
import WeeklyDealsList from "@/components/home/deals/weekly-deals-list";
import SubscribeNewsletters from "@/components/home/subscribe-newsletters";
import BlogList from "@/components/home/blog/list";
import SliderProductList from "@/components/home/products/slider-product-list";
import SliderProductListSkeleton from "@/components/home/products/slider-product-list-skeleton";

type Props = {
  params: { lang: Locale };
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
  trendingDeals: [
    {
      id: 1,
      title: "Electronics",
      discount: "40",
      image: "/images/download_011.png",
    },
    {
      id: 2,
      title: "Kitchen",
      discount: "40",
      image: "/images/WHTSTRK.png",
    },
    {
      id: 3,
      title: "Home",
      discount: "50",
      image: "/images/household.png",
    },
    {
      id: 4,
      title: "Toys & Crafts",
      discount: "50",
      image: "/images/balance_toy.png",
    },
    {
      id: 5,
      title: "Sports & Leisure",
      discount: "30",
      image: "/images/download_b52.png",
    },
    {
      id: 6,
      title: "Job Lots",
      discount: "40",
      image: "/images/job_lot.png",
    },
    {
      id: 7,
      title: "Pets",
      discount: "40",
      image: "/images/download_ae.png",
    },
    {
      id: 8,
      title: "Sunglasses New",
      discount: "40",
      image: "/images/WHTSTRK.png",
    },
    {
      id: 9,
      title: "Jewellery New",
      discount: "40",
      image: "/images/download_011.png",
    },
  ],
  weeklyDeals: [
    {
      id: 1,
      title: "Deals of the Week",
      image: "/images/Group_33.jpg",
    },
    {
      id: 2,
      title: "Odds and Ends",
      image: "/images/Artboard_4-8.jpg",
    },
    {
      id: 3,
      title: "Clearance",
      image: "/images/Artboard_6-8.jpg",
    },
  ],
  blog: [
    {
      id: 1,
      title: "7 Reasons Why Spring is The Best Season",
      date: "2023-08-10",
      image: "/images/Cream_Mountain.jpg",
    },
    {
      id: 2,
      title:
        "New year, same you? Here's how to stick with your New Year's Resolution!",
      date: "2023-07-10",
      image: "/images/design1.jpg",
    },
    {
      id: 3,
      title:
        "6 Great Reasons to Celebrate Christmas! 7 Reasons Why Spring is The Best Season New three four okaay",
      date: "2023-06-10",
      image: "/images/design2.jpg",
    },
    {
      id: 4,
      title: "7 Reasons Why Spring is The Best Season New one two",
      date: "2023-05-10",
      image: "/images/Cream_Mountain.jpg",
    },
    {
      id: 5,
      title:
        "7 Reasons Why Spring is The Best Season New three four okaay. 7 Reasons Why Spring is The Best Season New three four okaay",
      date: "2023-04-10",
      image: "/images/design1.jpg",
    },
  ],
};

const fetchProductList = async (category: string) => {
  const data = await fetch(
    `https://dummyjson.com/products/category/${category}`,
    {
      cache: "no-store",
    }
  );
  if (!data.ok) {
    throw new Error(`Failed to fetch home ${category} product data`);
  }
  const res = (await data).json();
  return res;
};

async function HomeDecorationData() {
  const homeDecorationData = await fetchProductList("furniture");
  return (
    <>
      <SliderProductList
        title="Garden & DIY"
        url="/collections/home-decoration"
        list={homeDecorationData?.products || []}
      />
    </>
  );
}

async function ElectronicsData() {
  const electronicsData = await fetchProductList("smartphones");
  return (
    <>
      <SliderProductList
        title="Electronics"
        url="/collections/electronics"
        list={electronicsData?.products || []}
      />
    </>
  );
}

export default async function Home({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);
  const data = await fetchProductList("furniture");
  // console.log({ dictionary });
  return (
    <div>
      <CollectionList />
      <HomeBanner />
      <DealsList pageType="home" list={homeData.deals} />
      <TrendingList pageType="deals" list={homeData.trendingDeals} />
      <WeeklyDealsList list={homeData.weeklyDeals} />
      <Suspense fallback={<SliderProductListSkeleton count={4} />}>
        {/* @ts-expect-error Async Server Component */}
        <HomeDecorationData />
      </Suspense>
      <SubscribeNewsletters />
      <Suspense fallback={<SliderProductListSkeleton count={4} />}>
        {/* @ts-expect-error Async Server Component */}
        <ElectronicsData />
      </Suspense>
      <BlogList list={homeData.blog} />
    </div>
  );
}
