import Link from "next/link";
import Image from "next/image";

import { DealList } from "@/types/deals";
import SliderContent from "@/components/slider-content";
import DealsItem from "./box-item";
import "./trending-list.scss";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
type Props = {
  pageType: string;
  list: DealList;
};

export default function TrendingList({ pageType = "", list = [] }: Props) {
  return (
    <section className="container mt-5 trending-list">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex">
          <h2>Trending on BargainFox</h2>
        </div>
        <Link href="/deals">
          <span>View All</span>
          <Image
            src="/images/svg/dark-line-arrow.svg"
            alt="view all deals"
            width={16}
            height={16}
            className="pr-2"
          />
        </Link>
      </div>
      <SliderContent settings={settings}>
        {list.map((val) => (
          <DealsItem key={`Deals${val.id}`} pageType={pageType} data={val} />
        ))}
      </SliderContent>
    </section>
  );
}
