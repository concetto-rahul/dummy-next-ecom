"use client";

import Image from "next/image";
import { useState } from "react";
import "./product-detail-images.scss";

type Props = {
  images: string[];
  title: string;
};
export default function ProductDetailImages({ images, title }: Props) {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="row product-detail-images">
      <div className="col-2 images-list">
        {images.map((val, index) => (
          <div
            key={`product-${index}`}
            className="image-box mb-4"
            onClick={() => setImageIndex(index)}
          >
            <Image
              src={val}
              fill
              className="image"
              alt={`${title} ${index}`}
              priority
            />
          </div>
        ))}
      </div>
      <div className="col-10 image-detail">
        <div className="deal-label">DEAL OF THE DAY</div>
        <div className="wishlist-div">
          <Image
            src="/images/svg/wishlist-heart.svg"
            width={20}
            height={20}
            alt="wishlist heart incon"
            title="wishlist"
          />
        </div>
        <Image
          src={images[imageIndex || 0]}
          fill
          className="image"
          alt={`${title} ${imageIndex || 0}`}
          priority
        />
      </div>
    </div>
  );
}
