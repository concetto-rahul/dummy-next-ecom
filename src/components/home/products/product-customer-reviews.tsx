"use client";

import Image from "next/image";
import { useState } from "react";
import AddProductReview from "./add-product-review";
import "./product-customer-reviews.scss";

type Props = {
  data: any;
};
type Reviews = {
  id: number;
  name: string;
  rating: number;
  date: string;
  review: string;
  image: string;
  photos: string[];
};
export default function ProductCustomerReviews({ data }: Props) {
  const [selectedStar, setSelectedStar] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const ratingRound = data.rating ? Math.round(data.rating) : 0;
  const totalRating = 14517;
  const starCount_5 = 5231;
  const starCount_5_per = Math.round((starCount_5 / totalRating) * 100);
  const starCount_4 = 456;
  const starCount_4_per = Math.round((starCount_4 / totalRating) * 100);
  const starCount_3 = 8231;
  const starCount_3_per = Math.round((starCount_3 / totalRating) * 100);
  const starCount_2 = 354;
  const starCount_2_per = Math.round((starCount_2 / totalRating) * 100);
  const starCount_1 = 245;
  const starCount_1_per = Math.round((starCount_1 / totalRating) * 100);
  const reviews = [
    {
      id: 1,
      name: "Krishnakumar K",
      rating: 3,
      date: "2023-08-21",
      image: "/images/user-review.png",
      photos: [...data?.images],
      review:
        "i think it's overpriced if it is really almost $1000. This was supposed to be a successor to iPhone SE in the $500 to $600 range. It doesn't even have 5G connectivity. The cameras as so basic. The display is nothing to rave about. Surely it can't be that expensive?",
    },
    {
      id: 2,
      name: "MUSFIK .",
      rating: 2,
      date: "2023-08-29",
      image: "/images/user-review.png",
      photos: [],
      review: "Lol 720p screen.\n2000 msg battery\nPure Junk",
    },
    {
      id: 3,
      name: "arben bytyqi",
      rating: 5,
      date: "2023-09-14",
      image: "/images/user-review.png",
      photos: [...data?.images],
      review: "399 for this junk NO",
    },
  ];
  return (
    <div className="row product-customer-reviews">
      <div className="col-12">
        <h4 className="heading-title">Customer Reviews</h4>
      </div>
      <div className="row py-4 py-6">
        <div className="col-5 gloabal-ratings">
          <h3>{ratingRound}</h3>
          <div className="rating">
            <Image
              src={`/images/svg/${
                ratingRound >= 1 ? "dark" : "light"
              }-star.svg`}
              alt={"rating star 1"}
              width="20"
              height="20"
            />
            <Image
              src={`/images/svg/${
                ratingRound >= 2 ? "dark" : "light"
              }-star.svg`}
              alt={"rating star 2"}
              width="20"
              height="20"
            />
            <Image
              src={`/images/svg/${
                ratingRound >= 3 ? "dark" : "light"
              }-star.svg`}
              alt={"rating star 3"}
              width="20"
              height="20"
            />
            <Image
              src={`/images/svg/${
                ratingRound >= 4 ? "dark" : "light"
              }-star.svg`}
              alt={"rating star 4"}
              width="20"
              height="20"
            />
            <Image
              src={`/images/svg/${
                ratingRound >= 5 ? "dark" : "light"
              }-star.svg`}
              alt={"rating star 1"}
              width="20"
              height="20"
            />
          </div>
          <p>{totalRating} Gloabal ratings</p>
        </div>
        <div className="col-7 customer-ratings">
          <div className="star-list star-5">
            <div>
              <span>5</span>
              <Image
                src={`/images/svg/light-star.svg`}
                alt={"rating star 5"}
                width="14"
                height="14"
              />
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: starCount_5_per }}
              ></div>
            </div>
            <h6>{starCount_5}</h6>
          </div>
          <div className="star-list star-4">
            <div>
              <span>4</span>
              <Image
                src={`/images/svg/light-star.svg`}
                alt={"rating star 4"}
                width="14"
                height="14"
              />
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: starCount_4_per }}
              ></div>
            </div>
            <h6>{starCount_4}</h6>
          </div>
          <div className="star-list star-3">
            <div>
              <span>3</span>
              <Image
                src={`/images/svg/light-star.svg`}
                alt={"rating star 3"}
                width="14"
                height="14"
              />
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: starCount_3_per }}
              ></div>
            </div>
            <h6>{starCount_3}</h6>
          </div>
          <div className="star-list star-2">
            <div>
              <span>2</span>
              <Image
                src={`/images/svg/light-star.svg`}
                alt={"rating star 2"}
                width="14"
                height="14"
              />
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: starCount_2_per }}
              ></div>
            </div>
            <h6>{starCount_2}</h6>
          </div>
          <div className="star-list star-1">
            <div>
              <span>1</span>
              <Image
                src={`/images/svg/light-star.svg`}
                alt={"rating star 2"}
                width="14"
                height="14"
              />
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: starCount_1_per }}
              ></div>
            </div>
            <h6>{starCount_1}</h6>
          </div>
        </div>
      </div>
      <div className="col-12 rate-product">
        <div className="star-box">
          <Image
            src={`/images/svg/${selectedStar >= 1 ? "dark" : "light"}-star.svg`}
            alt={"rating star 1"}
            width="40"
            height="40"
            onClick={() => setSelectedStar(1)}
          />
          <Image
            src={`/images/svg/${selectedStar >= 2 ? "dark" : "light"}-star.svg`}
            alt={"rating star 2"}
            width="40"
            height="40"
            onClick={() => setSelectedStar(2)}
          />
          <Image
            src={`/images/svg/${selectedStar >= 3 ? "dark" : "light"}-star.svg`}
            alt={"rating star 3"}
            width="40"
            height="40"
            onClick={() => setSelectedStar(3)}
          />
          <Image
            src={`/images/svg/${selectedStar >= 4 ? "dark" : "light"}-star.svg`}
            alt={"rating star 4"}
            width="40"
            height="40"
            onClick={() => setSelectedStar(4)}
          />
          <Image
            src={`/images/svg/${selectedStar >= 5 ? "dark" : "light"}-star.svg`}
            alt={"rating star 1"}
            width="40"
            height="40"
            onClick={() => setSelectedStar(5)}
          />
        </div>
        <p onClick={() => setShowReviewForm(true)}>Rate This Product</p>
        <AddProductReview
          show={showReviewForm}
          handleClose={() => setShowReviewForm(false)}
          image={data.images[0] || ""}
          title={data?.title || ""}
          productId={data?.id || ""}
        />
      </div>
      <div className="col-12 customer-photos">
        <h5>
          Customer Photos({data && data?.images ? data?.images.length : 0})
        </h5>
        <div className="photos-list">
          {data &&
            data?.images.map((val: string, index: number) => (
              <div key={`customer-photo-${index}`} className="image-box">
                <Image
                  src={val}
                  fill
                  className="image"
                  alt={`Customer Photos ${index}`}
                  priority
                />
              </div>
            ))}
        </div>
      </div>
      <div className="col-12 customer-reviews">
        <h5>Customer Review({reviews ? reviews.length : 0})</h5>
        <div className="reviews-list">
          {reviews &&
            reviews.map((val: Reviews, index: number) => (
              <div key={`customer-review-${index}`} className="review-box">
                <div className="user-detail">
                  <Image
                    src={val.image}
                    fill
                    className="image"
                    alt={`Customer Review ${val.name}`}
                    priority
                  />
                  <h4>{val.name}</h4>
                </div>
                <p>{val.review}</p>
                <div className="photos-list">
                  {val.photos &&
                    val.photos.map((val: string, index: number) => (
                      <div
                        key={`customer-photo-${index}`}
                        className="image-box"
                      >
                        <Image
                          src={val}
                          fill
                          className="image"
                          alt={`Customer Photos ${index}`}
                          priority
                        />
                      </div>
                    ))}
                </div>
                <div className="rating-box">
                  <div className="rating">
                    <Image
                      src={`/images/svg/${
                        val.rating >= 1 ? "dark" : "light"
                      }-star.svg`}
                      alt={"rating star 1"}
                      width="20"
                      height="20"
                    />
                    <Image
                      src={`/images/svg/${
                        val.rating >= 2 ? "dark" : "light"
                      }-star.svg`}
                      alt={"rating star 2"}
                      width="20"
                      height="20"
                    />
                    <Image
                      src={`/images/svg/${
                        val.rating >= 3 ? "dark" : "light"
                      }-star.svg`}
                      alt={"rating star 3"}
                      width="20"
                      height="20"
                    />
                    <Image
                      src={`/images/svg/${
                        val.rating >= 4 ? "dark" : "light"
                      }-star.svg`}
                      alt={"rating star 4"}
                      width="20"
                      height="20"
                    />
                    <Image
                      src={`/images/svg/${
                        val.rating >= 5 ? "dark" : "light"
                      }-star.svg`}
                      alt={"rating star 5"}
                      width="20"
                      height="20"
                    />
                    <p>{val.date}</p>
                  </div>
                  <p>
                    Was this helpful?
                    <Image
                      src="/images/svg/like-up.svg"
                      width={16}
                      height={16}
                      alt="review helpful"
                    />
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
