"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const colorList = [
  {
    key: "red",
    value: "Red",
  },
  {
    key: "maroon",
    value: "Maroon",
  },
  {
    key: "yellow",
    value: "Yellow",
  },
  {
    key: "orange",
    value: "Orange",
  },
  {
    key: "blue",
    value: "Blue",
  },
];
const sizeList = [
  {
    key: "xs",
    value: "XS",
  },
  {
    key: "s",
    value: "S",
  },
  {
    key: "m",
    value: "M",
  },
  {
    key: "L",
    value: "L",
  },
  {
    key: "xl",
    value: "XL",
  },
];
export default function ProductAddToCart() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedColor = searchParams.get("color");
  const selectedSize = searchParams.get("size");

  const [productQty, setProductQty] = useState("1");

  const selectOptions = (key: string, value: string) => {
    const newQuery = new URLSearchParams(Array.from(searchParams.entries()));
    newQuery.set(key, value);
    router.push(`${pathname}?${newQuery.toString()}`);
  };
  return (
    <>
      <div className="filter">
        <span className="title color">
          Color: <strong>Orange</strong>
        </span>
        {colorList.map((val) => (
          <div
            key={`color-${val.key}`}
            className={`filter-option color ${
              selectedColor === val.key ? "active" : ""
            }`}
            style={{ backgroundColor: val.value }}
            onClick={() => selectOptions("color", val.key)}
          ></div>
        ))}
      </div>
      <div className="filter">
        <span className="title size">Size:</span>
        {sizeList.map((val) => (
          <div
            key={`size-${val.key}`}
            className={`filter-option size ${
              selectedSize === val.key ? "active" : ""
            }`}
            onClick={() => selectOptions("size", val.key)}
          >
            {val.value}
          </div>
        ))}
      </div>
      <div className="size-guide">
        <Image
          src={"/images/svg/ruler-sizes.svg"}
          width={20}
          height={20}
          alt={"Size Guide"}
        />
        <span>Size Guide</span>
      </div>
      <div className="filter">
        <span className="title size">Size:</span>
        <select
          name="product-qty"
          id="product-qty"
          value={productQty}
          onChange={(e) => setProductQty(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="delivery-info">
        <div className="detail-div">
          <div className="icon-div">
            <Image
              src="/images/svg/delivery-van.svg"
              width={38}
              height={24}
              alt="Free delivery"
            />
          </div>
          <p>
            Free delivery on orders over £50. <Link href="#">Read More</Link>
          </p>
        </div>
        <div className="detail-div">
          <div className="icon-div">
            <Image
              src="/images/svg/45-days.svg"
              width={32}
              height={32}
              alt="45 days returns"
            />
          </div>
          <p>
            Free 45 day returns. <Link href="#">Read More</Link>
          </p>
        </div>
        <div className="detail-div">
          <div className="icon-div">
            <Image
              src="/images/svg/warranty.svg"
              width={32}
              height={32}
              alt="6 month warranty"
            />
          </div>
          <p>
            6 month warranty with the Bargain Fox guarantee.{" "}
            <Link href="#">Read More</Link>
          </p>
        </div>
      </div>
      <div className="stock-info">
        <p> HURRY, THERE ARE ONLY 6 ITEM(S) LEFT!</p>
        <div className="group-div">
          <span>
            <Image
              src="/images/svg/group.svg"
              width="16"
              height="16"
              alt="group"
            />
            8
          </span>
          People looking at this product
        </div>
      </div>
      <div className="add-to-cart-div">
        <button
          className="btn btn-primary rounded-pill add-to-cart-btn"
          type="button"
        >
          Add to Cart
        </button>
        <button
          className="btn btn-outline-primary rounded-pill buy-now-btn"
          type="button"
        >
          Buy Now
        </button>
      </div>
      <p className="checkout-message">
        Order within <span className="time">2h 25m</span> and choose{" "}
        <span className="shipping">Express Shipping</span> to get it by{" "}
        <strong>Tuesday 25/7/2023</strong>
      </p>
    </>
  );
}
