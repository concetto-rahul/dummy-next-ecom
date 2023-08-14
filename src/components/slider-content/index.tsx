"use client";
import Image from "next/image";
import { default as Slider, Settings, CustomArrowProps } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider-content.scss";
type Props = {
  children: React.ReactNode;
  settings: Settings;
  actionButtons?: boolean;
};

function SliderNextArrow({
  currentSlide,
  onClick,
  slideCount,
}: CustomArrowProps): JSX.Element {
  return (
    <div
      className={"slick-arrow slick-next slider-next-arrow"}
      onClick={onClick}
    >
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

function SliderPrevArrow({
  currentSlide,
  onClick,
}: CustomArrowProps): JSX.Element {
  return (
    <div
      className={"slick-arrow slick-prev slider-prev-arrow"}
      onClick={onClick}
    >
      <Image
        src={`/images/svg/${currentSlide === 0 ? "white" : "dark"}-arrow.svg`}
        width={20}
        height={20}
        alt="deals prev arrow"
      />
    </div>
  );
}

export default function SliderContent({
  children,
  settings,
  actionButtons = true,
}: Props) {
  const newSettings = actionButtons
    ? {
        ...settings,
        className: "slider variable-width",
        nextArrow: <SliderNextArrow />,
        prevArrow: <SliderPrevArrow />,
      }
    : settings;
  return <Slider {...newSettings}>{children}</Slider>;
}
