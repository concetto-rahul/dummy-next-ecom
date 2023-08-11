"use client";

import Image from "next/image";
import { default as Slider, Settings, CustomArrowProps } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { DealList } from "@/types/deals";
import "./deals.list.scss";
import DealsItem from "./box-item";

const settings: Settings = {
  className: "slider variable-width",
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
  nextArrow: <DealsListNextArrow />,
  prevArrow: <DealsListPrevArrow />,
};
type Props = {
  pageType: string;
  list: DealList;
};

function DealsListNextArrow({
  currentSlide,
  onClick,
  slideCount,
}: CustomArrowProps): JSX.Element {
  return (
    <div className={"slick-arrow slick-next dealsnextarrow"} onClick={onClick}>
      <Image
        src={`/images/svg/${
          currentSlide === slideCount ? "white" : "dark"
        }-arrow.svg`}
        width={20}
        height={20}
        alt="deals prev arrow"
      />
    </div>
  );
}

function DealsListPrevArrow({
  currentSlide,
  onClick,
}: CustomArrowProps): JSX.Element {
  return (
    <div className={"slick-arrow slick-prev dealsprevarrow"} onClick={onClick}>
      <Image
        src={`/images/svg/${currentSlide === 0 ? "white" : "dark"}-arrow.svg`}
        width={20}
        height={20}
        alt="deals prev arrow"
      />
    </div>
  );
}

export default function DealsList({ pageType = "", list = [] }: Props) {
  return (
    <Slider {...settings}>
      {list.map((val) => (
        <DealsItem key={`Deals${val.id}`} pageType={pageType} data={val} />
      ))}
    </Slider>
  );
}
