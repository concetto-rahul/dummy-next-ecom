import styles from "./page.module.scss";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import HomeBanner from "@/components/home/banner";
import Link from "next/link";
import DealsList from "@/components/home/deals/list";
import Image from "next/image";
import { DealTimer } from "@/components/home/deals/deal-timer";
import WeeklyDealsList from "@/components/home/deals/weekly-deals-list";
import SliderProductList from "@/components/home/products/slider-product-list";
import { Suspense } from "react";
import SliderProductListSkeleton from "@/components/home/products/slider-product-list-skeleton";
import SubscribeNewsletters from "@/components/home/subscribe-newsletters";
import BlogList from "@/components/home/blog/list";
import CollectionList from "@/components/home/collection/list";

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
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const res = (await data).json();
  return res;
};

async function HomeDecorationData() {
  const homeDecorationData = await fetchProductList("furniture");
  return <SliderProductList list={homeDecorationData?.products || []} />;
}

async function ElectronicsData() {
  const electronicsData = await fetchProductList("smartphones");
  return <SliderProductList list={electronicsData?.products || []} />;
}

export default async function Home({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);
  // console.log({ dictionary });
  return (
    <div>
      <CollectionList />
      <HomeBanner />
      <section className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex">
            <h2 className="box-header-heading mr-2">Deals of the Day</h2>
            <DealTimer endDate={"2023-08-18 11:58:00"} />
          </div>
          <Link href="/deals" className="box-header-link">
            <span>View All Deals</span>
            <Image
              src="/images/svg/dark-line-arrow.svg"
              alt="view all deals"
              width={16}
              height={16}
              className="pr-2"
            />
          </Link>
        </div>
        <DealsList pageType="home" list={homeData.deals} />
      </section>
      <section className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="box-header-heading">Trending on BargainFox</h2>
          <Link href="/trending" className="box-header-link">
            <span>View All</span>
            <Image
              src="/images/svg/dark-line-arrow.svg"
              alt="view all Trending"
              width={16}
              height={16}
              className="pr-2"
            />
          </Link>
        </div>
        <DealsList pageType="deals" list={homeData.trendingDeals} />
      </section>
      <section className="container my-5">
        <WeeklyDealsList list={homeData.weeklyDeals} />
      </section>
      <section className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="box-header-heading">Garden & DIY</h2>
          <Link href="/products/home-decoration" className="box-header-link">
            <span>View All</span>
            <Image
              src="/images/svg/dark-line-arrow.svg"
              alt="view all Trending"
              width={16}
              height={16}
              className="pr-2"
            />
          </Link>
        </div>
        <Suspense fallback={<SliderProductListSkeleton count={4} />}>
          {/* @ts-expect-error Async Server Component */}
          <HomeDecorationData />
        </Suspense>
      </section>
      <section className="container my-5">
        <SubscribeNewsletters />
      </section>
      <section className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="box-header-heading">Electronics</h2>
          <Link href="/products/electronics" className="box-header-link">
            <span>View All</span>
            <Image
              src="/images/svg/dark-line-arrow.svg"
              alt="view all Trending"
              width={16}
              height={16}
              className="pr-2"
            />
          </Link>
        </div>
        <Suspense fallback={<SliderProductListSkeleton count={4} />}>
          {/* @ts-expect-error Async Server Component */}
          <ElectronicsData />
        </Suspense>
      </section>
      <BlogList list={homeData.blog} />
    </div>
  );
}
