import Link from "next/link";
import Image from "next/image";

import { DealList } from "@/types/deals";
import SliderContent from "@/components/slider-content";
import DealsItem from "./box-item";
import { DealTimer } from "./deal-timer";
import "./deals-list.scss";
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

export default function DealsList({ pageType = "", list = [] }: Props) {
  return (
    <section className="container mt-5 deals-list">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex">
          <h2 className="box-header-heading mr-2">Deals of the Day</h2>
          <DealTimer endDate={"2023-08-21 11:58:00"} />
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
      <SliderContent settings={settings}>
        {list.map((val) => (
          <DealsItem key={`Deals${val.id}`} pageType={pageType} data={val} />
        ))}
      </SliderContent>
    </section>
  );
}
