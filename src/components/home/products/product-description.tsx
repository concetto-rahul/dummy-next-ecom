import Image from "next/image";
import "./product-description.scss";

type Props = {
  data: any;
};
export default function ProductDescription({ data }: Props) {
  return (
    <div className="product-description">
      <div className="highlight">
        <h5>Highlight</h5>
        <p>
          <Image
            src={"/images/svg/right_tick.svg"}
            width="28"
            height="28"
            alt="Customers"
          />
          80+ Customers bought this item
        </p>
      </div>
      <div className="description">
        <h5>Product Description</h5>
        <ul>
          <li>
            Stylish design: Fashionable lapel coat with a solid color that will
            never go out of style
          </li>
          <li>
            Versatile: Perfect for fall and winter, suitable for both casual and
            formal occasions
          </li>
          <li>
            Comfortable: Made of high-quality materials that are soft and cozy
            to wear
          </li>
        </ul>
      </div>
    </div>
  );
}
