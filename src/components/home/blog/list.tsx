"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogList } from "@/types/blog";
import SliderContent from "@/components/slider-content";
import "./blog-list.scss";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

type Props = {
  list: BlogList;
};

export default function BlogList({ list }: Props) {
  return (
    <section className="mt-5 blog-section">
      <div className="container">
        <h2>Blogs</h2>
        <p>Feeling nosey? Check out what we&apos;ve been up to in the den.</p>
        <div className="blog-list">
          <SliderContent settings={settings}>
            {list.map((val) => (
              <div key={`BlogItem${val.id}`} className="blog-list-item">
                <Image
                  src={val.image}
                  fill
                  className="image"
                  alt={val.title}
                  priority
                />
                <h2>{val.title}</h2>
                <div className="detail-div">
                  <div className="date-box">
                    <Image
                      src={`/images/svg/light-star.svg`}
                      width={20}
                      height={20}
                      alt="blog date icon"
                    />
                    <span>{val.date}</span>
                  </div>
                  <Link
                    href={`/blog/${val.id}`}
                    className="btn rounded-pill btn-primary"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </SliderContent>
        </div>
      </div>
    </section>
  );
}
