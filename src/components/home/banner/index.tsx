import Image from "next/image";
import SliderContent from "@/components/slider-content";
import "./home-banner.scss";

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
    <section className="mt-5 container-fluid home-banner">
      <SliderContent settings={settings} actionButtons={false}>
        <div className="image-container">
          <Image
            src={"/images/home-banner.jpg"}
            fill
            className="image"
            alt="home banner one"
          />
        </div>
        <div className="image-container">
          <Image
            src={"/images/home-banner.jpg"}
            fill
            className="image"
            alt="home banner two"
          />
        </div>
        <div className="image-container">
          <Image
            src={"/images/home-banner.jpg"}
            fill
            className="image"
            alt="home banner three"
          />
        </div>
      </SliderContent>
    </section>
  );
}
