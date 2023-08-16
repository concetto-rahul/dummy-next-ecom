import { DealList } from "@/types/deals";
import "./deal-top-section.scss";
import SliderContent from "@/components/slider-content";
import DealsItem from "./box-item";

type Props = {
  list: DealList;
};

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
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
          <SliderContent settings={settings}>
            {list.map((val) => (
              <DealsItem key={`Deals${val.id}`} pageType={"deals"} data={val} />
            ))}
          </SliderContent>
        </div>
      </div>
    </section>
  );
}
