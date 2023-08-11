import { DealList } from "@/types/deals";
import DealsList from "./list";
import "./deal-top-section.scss";

type Props = {
  list: DealList;
};

export default function DealTopSection({ list }: Props) {
  return (
    <section className="mb-5 deal-top-section">
      <div className="container">
        <h2>Deals of the Day</h2>
        <p>
          Explore great offers on various products from wide range of
          categories. Up to 80% Off
        </p>
        <div className="deal-top-list">
          <DealsList pageType="deals" list={list} />
        </div>
      </div>
    </section>
  );
}
