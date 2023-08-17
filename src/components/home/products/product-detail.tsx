import Image from "next/image";
import Link from "next/link";
import ProductAddToCart from "./product-add-to-cart";
import "./product-detail.scss";
import ProductOtherSellers from "./product-other-sellers";
import ProductSharingOptions from "./product-sharing-options";

type Props = {
  data: any;
};
export default function ProductDetail({ data }: Props) {
  const ratingRound = data.rating ? Math.round(data.rating) : 0;
  return (
    <div className="product-detail">
      <div className="heading">
        <h1>{data.title}</h1>
        <div className="share-box">
          <Image
            src="/images/svg/share.svg"
            width={20}
            height={20}
            alt="share"
          />
        </div>
        <div className="sharing-options">
          <ProductSharingOptions
            url="https://bargainfox.com/collections/home-kitchen-1/products/b079b93w3x"
            title={data.title}
            images={data.images}
          />
        </div>
      </div>
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
        <ProductOtherSellers data={data} images={data.images || []} />
      </div>
      <ProductAddToCart />
    </div>
  );
}
