"use client";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../../app/[lang]/page.module.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
};
export default function HomeBanner() {
  return (
    <div>
      <Slider {...settings}>
        <div className={styles.image_container}>
          <Image
            src={"/images/home-banner.jpg"}
            fill
            className={styles.image}
            alt="home banner one"
          />
        </div>
        <div className={styles.image_container}>
          <Image
            src={"/images/home-banner.jpg"}
            fill
            className={styles.image}
            alt="home banner two"
          />
        </div>
        <div className={styles.image_container}>
          <Image
            src={"/images/home-banner.jpg"}
            fill
            className={styles.image}
            alt="home banner three"
          />
        </div>
      </Slider>
    </div>
  );
}
