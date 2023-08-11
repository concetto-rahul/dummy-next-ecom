"use client";

import Image from "next/image";

import { DealItem } from "@/types/deals";
import "./deals.item.scss";

type Props = {
  pageType: string;
  data: DealItem;
};
export default function DealsItem({
  pageType = "",
  data: { title, image, discount },
}: Props) {
  return (
    <>
      {pageType === "home" ? (
        <div className="card box-container">
          <Image src={image} fill className="card-img-top image" alt={title} />
          <div className="card-body">
            <p className="discount-text">Upto {discount}% off</p>
            <h5 className="discount-title">{title}</h5>
          </div>
        </div>
      ) : (
        <div className="box-round-container">
          <div className="image-box">
            <Image
              src={image}
              fill
              className="card-img-top image"
              alt={title}
              priority
            />
          </div>
          <span className="badge bg-primary rounded-pill discount-text">
            Upto {discount}% off
          </span>
          <h5 className="discount-title">{title}</h5>
        </div>
      )}
    </>
  );
}
