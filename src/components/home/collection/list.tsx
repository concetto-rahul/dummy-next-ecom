import Image from "next/image";
import Link from "next/link";
import "./collection-list.scss";
const collections = [
  {
    id: 1,
    title: "Home & Kitchen",
    slug: "home-decoration",
    image: "/images/Image11.png",
  },
  {
    id: 2,
    title: "Health & Beauty",
    slug: "skincare",
    image: "/images/Image12.png",
  },
  {
    id: 3,
    title: "Electronics",
    slug: "smartphones",
    image: "/images/Image13.png",
  },
  {
    id: 4,
    title: "Toys & Crafts",
    slug: "furniture",
    image: "/images/Image14.png",
  },
  {
    id: 5,
    title: "Sports & Leisure",
    slug: "mens-shoes",
    image: "/images/Image15.png",
  },
  {
    id: 6,
    title: "Clearance",
    slug: "sunglasses",
    image: "/images/Image16.png",
  },
];
export default function CollectionList() {
  return (
    <section className="container home-collection-section">
      <div className="row">
        {collections.map((val) => (
          <div className="col-2" key={`Collection${val.id}`}>
            <div className="collection-box-container">
              <Image
                src={val.image}
                fill
                className="image"
                alt={val.title}
                priority
              />
              <Link href={`/collections/${val.slug}`} className="title">
                {val.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
