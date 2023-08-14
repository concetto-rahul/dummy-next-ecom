import Image from "next/image";
import Link from "next/link";
import "./product-detail.scss";

type Props = {
  data: any;
};
export default function ProductDetail({ data }: Props) {
  const ratingRound = data.rating ? Math.round(data.rating) : 0;
  return (
    <div className="product-detail">
      <h1>{data.title}</h1>
      <div className="seller-box">
        <div className="rating">
          <Image
            src={`/images/svg/${ratingRound >= 1 ? "dark" : "light"}-star.svg`}
            alt={"rating star 1"}
            width="20"
            height="20"
          />
          <Image
            src={`/images/svg/${ratingRound >= 2 ? "dark" : "light"}-star.svg`}
            alt={"rating star 2"}
            width="20"
            height="20"
          />
          <Image
            src={`/images/svg/${ratingRound >= 3 ? "dark" : "light"}-star.svg`}
            alt={"rating star 3"}
            width="20"
            height="20"
          />
          <Image
            src={`/images/svg/${ratingRound >= 4 ? "dark" : "light"}-star.svg`}
            alt={"rating star 4"}
            width="20"
            height="20"
          />
          <Image
            src={`/images/svg/${ratingRound >= 5 ? "dark" : "light"}-star.svg`}
            alt={"rating star 1"}
            width="20"
            height="20"
          />
          <p>46,546</p>
        </div>
        <div className="seller">
          374 sold, by{" "}
          <Link href="#">
            <strong>Celby Store</strong>
          </Link>
        </div>
      </div>
      <div className="price-div">
        <div className="price-box">
          <div className="price">
            <span>$</span>
            <span>{data.price || 0}</span>
            <span>$40</span>
          </div>
          <div className="discount">
            {Math.round(data.discountPercentage)}% off
          </div>
        </div>
        <div className="other-seller">
          View this product from <span>other sellers</span>
        </div>
      </div>
      <div className="filter">
        <span className="title color">
          Color: <strong>Orange</strong>
        </span>
        <div
          className="filter-option color"
          style={{ backgroundColor: "Red" }}
        ></div>
        <div
          className="filter-option color active"
          style={{ backgroundColor: "Maroon" }}
        ></div>
        <div
          className="filter-option color"
          style={{ backgroundColor: "Yellow" }}
        ></div>
        <div
          className="filter-option color"
          style={{ backgroundColor: "Orange" }}
        ></div>
      </div>
      <div className="filter">
        <span className="title size">Size:</span>
        <div className="filter-option size active">XS</div>
        <div className="filter-option size">S</div>
        <div className="filter-option size">M</div>
        <div className="filter-option size">L</div>
        <div className="filter-option size">XL</div>
        <div className="filter-option size">XXL</div>
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
        <select>
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
    </div>
  );
}
