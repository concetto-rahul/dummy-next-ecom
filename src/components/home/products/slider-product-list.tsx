"use client";
import Image from "next/image";
import Link from "next/link";
import { ProductList } from "@/types/products";
import SliderContent from "@/components/slider-content";
import ProductsItem from "./products-item";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
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
  title: string;
  url: string;
  list: ProductList;
};

export default function SliderProductList({ title, url, list = [] }: Props) {
  return (
    <section className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="box-header-heading">{title}</h2>
        <Link href={url} className="box-header-link">
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
      <div>
        <SliderContent settings={settings}>
          {list.map((val) => (
            <ProductsItem key={`SliderProduct${val.id}`} data={val} />
          ))}
        </SliderContent>
      </div>
    </section>
  );
}
