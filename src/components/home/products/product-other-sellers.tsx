"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import ModalLayout from "@/components/modal-layout";
import "./other-seller-modal.scss";

type Props = {
  images: string[];
  data: any;
};

type SellerProps = {
  id: string;
  name: string;
  orderTime: string | null;
  delivery_by: string;
  price: number;
  actual_price: number;
};

const sellerData: SellerProps[] = [
  {
    id: "12",
    name: "Celby Store",
    orderTime: "2h 25m",
    delivery_by: "Saturday 19/8/2023",
    price: 11,
    actual_price: 13.5,
  },
  {
    id: "23",
    name: "Celby Store",
    orderTime: "10h 25m",
    delivery_by: "Saturday 19/8/2023",
    price: 12.88,
    actual_price: 14.88,
  },
  {
    id: "14",
    name: "Celby Store",
    orderTime: null,
    delivery_by: "Saturday 11/8/2023",
    price: 14,
    actual_price: 14,
  },
  {
    id: "16",
    name: "Celby Store",
    orderTime: null,
    delivery_by: "Saturday 17/8/2023",
    price: 19,
    actual_price: 20.14,
  },
];
export default function ProductOtherSellers({ images, data }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [showSellers, setShowSellers] = useState(false);
  const [sortedSellers, setSortedSellers] = useState<SellerProps[]>([]);
  const [sortBy, setSortBy] = useState("price_asc");
  const handleClose = () => {
    setShowSellers(false);
  };
  const handleSortBy = (value: string) => {
    setSortBy(value);
  };
  const rating = 4;
  const totalRating = 46546;

  const selectSeller = (id: string) => {
    const newQuery = new URLSearchParams(Array.from(searchParams.entries()));
    newQuery.set("seller", id);
    router.push(`${pathname}?${newQuery.toString()}`);
    handleClose();
  };

  useEffect(() => {
    const newSellerData = sellerData.sort((a, b) => {
      if (sortBy === "price_asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortedSellers([...newSellerData]);
  }, [sortBy]);
  return (
    <>
      <div className="other-seller">
        View this product from{" "}
        <span onClick={() => setShowSellers(true)}>other sellers</span>
      </div>
      <ModalLayout show={showSellers} handleClose={handleClose}>
        <div className="other-seller-modal">
          <div className="row">
            <div className="col-3">
              <Image
                src={images[0]}
                fill
                className="image"
                alt={`seller`}
                priority
              />
            </div>
            <div className="col-7 product-details">
              <h5>
                Womens Blouse Solid Simple Long Sleeve V Neck Button Long Sleeve
                V Neck Button
              </h5>
              <div className="rating">
                <Image
                  src={`/images/svg/${rating >= 1 ? "dark" : "light"}-star.svg`}
                  alt={"rating star 1"}
                  width="20"
                  height="20"
                />
                <Image
                  src={`/images/svg/${rating >= 2 ? "dark" : "light"}-star.svg`}
                  alt={"rating star 2"}
                  width="20"
                  height="20"
                />
                <Image
                  src={`/images/svg/${rating >= 3 ? "dark" : "light"}-star.svg`}
                  alt={"rating star 3"}
                  width="20"
                  height="20"
                />
                <Image
                  src={`/images/svg/${rating >= 4 ? "dark" : "light"}-star.svg`}
                  alt={"rating star 4"}
                  width="20"
                  height="20"
                />
                <Image
                  src={`/images/svg/${rating >= 5 ? "dark" : "light"}-star.svg`}
                  alt={"rating star 5"}
                  width="20"
                  height="20"
                />
                <p>{totalRating}</p>
              </div>
              <div className="price">
                <span>$</span>
                <span>{data.price || 0}</span>
                <span>$40</span>
              </div>
              <p className="order-time">
                Order within <span>2h 25m</span>
              </p>
              <p className="deliver-by">
                Delivery by <strong>Tuesday 15/8/2023</strong>
              </p>
            </div>
            <div className="col-2 action-btn">
              <div>
                <Image
                  src="/images/svg/close-gray.svg"
                  width={20}
                  height={20}
                  alt="close"
                  className="close-icon"
                  title="Close"
                  onClick={handleClose}
                />
              </div>
              <div className="add-to-cart-btn" onClick={handleClose}>
                <Image
                  src="/images/svg/add-shopping-cart.svg"
                  width={30}
                  height={30}
                  alt="Add to cart"
                  title="Add to cart"
                />
              </div>
            </div>
            <div className="col-12 filter-options">
              <p>{sellerData.length || 0} other options</p>
              <div>
                <label htmlFor="short_by">Short By</label>
                <select
                  name="short_by"
                  id="short_by"
                  value={sortBy}
                  onChange={(e) => handleSortBy(e.target.value)}
                >
                  <option value="price_asc">Price, low to high</option>
                  <option value="price_desc">Price, high to low</option>
                  <option value="reviews_desc">Top Customers Reviews</option>
                </select>
              </div>
            </div>
            <div className="col-12 seller-options">
              {sortedSellers.map((val: any) => (
                <div className="row" key={`seller-${val.id}`}>
                  <div className="col-3">
                    <div className="price">
                      <span>$</span>
                      <span>{val.price || 0}</span>
                    </div>
                  </div>
                  <div className="col-7">
                    <p className="seller-name">
                      sold, by <strong>{val.name}</strong>
                    </p>
                    {val.orderTime && (
                      <p className="order-time">
                        Order within <span>{val.orderTime}</span>
                      </p>
                    )}

                    <p className="deliver-by">
                      Delivery by <strong>{val.delivery_by}</strong>
                    </p>
                  </div>
                  <div className="col-2 select-action-btn">
                    <div
                      className="add-to-cart-btn select"
                      onClick={() => selectSeller(val.id)}
                    >
                      <Image
                        src="/images/svg/add-shopping-cart.svg"
                        width={24}
                        height={24}
                        alt="Add to cart"
                        title="Add to cart"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ModalLayout>
    </>
  );
}
