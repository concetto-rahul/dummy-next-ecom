import Link from "next/link";
import "./products-breadcrumb.scss";
type Props = {
  list: {
    title: string;
    slug: string;
  }[];
};
export default function ProductsBreadcrumb({ list }: Props) {
  return (
    <div className="products-breadcrumb">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {list.map((val, index) => (
            <li
              key={`breadcrumb-${index}`}
              className={`breadcrumb-item ${
                index === list.length - 1 ? "active" : ""
              }`}
            >
              <Link href={val.slug}>{val.title}</Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
