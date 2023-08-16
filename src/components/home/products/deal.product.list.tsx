"use client";

import { Product, ProductList } from "@/types/products";
import Link from "next/link";
import { useState } from "react";
import ProductsItem from "./products-item";

type fetchResponseData = {
  products: ProductList;
  total: number;
  skip: number;
  limit: number;
  pageNumber: number;
};
type Props = {
  list: fetchResponseData;
  title: string;
};

const fetchProductList = async (pageNumber: number) => {
  const limit = 12;
  const skip = limit * (pageNumber ? pageNumber - 1 : 0);
  const data = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    {
      cache: "no-store",
    }
  );
  const res = (await data).json();
  return res;
};

export default function DealProductList({ title, list }: Props) {
  const [productsList, setProductsList] = useState(list.products);
  const [loadCount, setLoadCount] = useState(1);
  return (
    <section className="my-5 container">
      <h2>{title}</h2>
      <div className="row">
        {list.total > 0 ? (
          <>
            {productsList.map((val: Product) => (
              <div key={`dealp-${val.id}`} className="col-md-3">
                <ProductsItem data={val} />
              </div>
            ))}
            {productsList.length < list.total ? (
              <button
                onClick={async () => {
                  const newProducts: fetchResponseData = await fetchProductList(
                    loadCount + 1
                  );
                  setProductsList([...productsList, ...newProducts.products]);
                  setLoadCount(loadCount + 1);
                }}
                className="btn btn-primary rounded-pill"
              >
                Show More
              </button>
            ) : null}
          </>
        ) : (
          <div className="col-12">
            <p>No product list</p>
          </div>
        )}
      </div>
    </section>
  );
}
