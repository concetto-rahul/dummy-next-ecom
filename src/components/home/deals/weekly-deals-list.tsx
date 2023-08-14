import "./weekly-deals-list.scss";

import { WeeklyDealItem } from "@/types/deals";
import Link from "next/link";
import Image from "next/image";

type Props = {
  list: WeeklyDealItem[];
};

export default function WeeklyDealsList({ list }: Props) {
  return (
    <section className="container mt-5">
      <div className="row weekly-deals-list">
        {list.map((val) => (
          <div
            key={`weekly${val.id}`}
            className="col-md-4 col-sm-3 weekly-deals-item"
          >
            <Image
              src={val.image}
              fill
              className="card-img-top image"
              alt={val.title}
              priority
            />
            <h2>{val.title}</h2>
            <Link href="/deals">View All Products</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
