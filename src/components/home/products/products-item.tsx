import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import "./products-item.scss";

type props = {
  data: Product;
};
export default function ProductsItem({
  data: {
    id,
    title,
    price,
    discountPercentage,
    rating,
    thumbnail,
    deal,
    category,
  },
}: props) {
  const ratingRound = Math.round(rating);
  return (
    <div className="prducts-item-box card">
      {deal && <div className="deal-label">DEAL OF THE DAY</div>}
      <Image src={thumbnail} fill className="image" alt={title} priority />
      <div className="card-body">
        <h2>
          <Link href={`/collections/${category}/products//${id}`}>{title}</Link>
        </h2>
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
        <div className="price-box">
          <div className="price">
            <span>$</span>
            <span>{price}</span>
            <span>$400</span>
          </div>
          <div className="discount">-{Math.round(discountPercentage)}%</div>
        </div>
      </div>
    </div>
  );
}
