import ProductShortBy from "./product-short-by";
import "./product-list-heading.scss";

type Props = {
  total: number;
  currentPage: number;
  limit: number;
};

export default function ProductListHeading({
  total,
  limit,
  currentPage,
}: Props) {
  const maxValue = currentPage > 0 ? limit * currentPage : limit;
  const minValue = currentPage > 1 ? limit * (currentPage - 1) + 1 : 1;
  return (
    <div className="product-list-heading">
      <div className="pages-count">
        <h4>Results</h4>
        <h6>
          {minValue}-{maxValue > total ? total : maxValue} of over {total}
        </h6>
      </div>
      <ProductShortBy />
    </div>
  );
}
