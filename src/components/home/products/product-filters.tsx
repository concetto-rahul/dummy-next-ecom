"use client";

import "./product-filters.scss";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const filterData = {
  category: {
    id: 1,
    title: "Category",
    data: [
      { id: 1, title: "Women's T-shirts", slug: "womens-t-shirts" },
      { id: 2, title: "Women's Tank Tops & Camis", slug: "womens-t-shirts2" },
      { id: 3, title: "Women's Dresses", slug: "womens-t-shirts3" },
      { id: 4, title: "Women's Blouses & Shirts", slug: "womens-t-shirts4" },
      { id: 5, title: "Women's Two-piece Outfilts", slug: "womens-t-shirts5" },
      { id: 6, title: "Women's piece Outfilts", slug: "womens-t-shirts6" },
      {
        id: 7,
        title: "Women's Jumpsuits & Playsuits",
        slug: "womens-t-shirts7",
      },
      { id: 8, title: "Women's Outfilts", slug: "womens-t-shirts8" },
    ],
  },
  size: {
    id: 2,
    title: "Women's Clothing Size",
    data: [
      { id: 1, title: "XXS", slug: "xxs" },
      { id: 2, title: "XS", slug: "xs" },
      { id: 3, title: "S", slug: "s" },
      { id: 4, title: "M", slug: "m" },
      { id: 5, title: "L", slug: "l" },
      { id: 6, title: "XL", slug: "xl" },
      {
        id: 7,
        title: "XXL",
        slug: "xxl",
      },
      { id: 8, title: "XXXL", slug: "xxxl" },
    ],
  },
  color: {
    id: 3,
    title: "Colors",
    data: [
      { id: 1, title: "red", slug: "red" },
      { id: 2, title: "blue", slug: "green" },
      { id: 3, title: "green", slug: "green" },
    ],
  },
};
export default function ProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = searchParams.get("category")
    ? searchParams.get("category")?.split(",")
    : [];
  console.log("category", category);
  const handleFilter = (key: string, value: string) => {
    const newQuery = new URLSearchParams(Array.from(searchParams.entries()));
    if (key === "category") {
      let categoryArray = [];
      if (category && category.length > 0 && category.includes(value)) {
        categoryArray = category.filter((val) => val !== value);
      } else {
        categoryArray = category ? [...category, value] : [value];
      }
      newQuery.set(key, categoryArray.join(","));
    }
    router.push(`${pathname}?${newQuery.toString()}`);
  };
  return (
    <div>
      <h4>Filters</h4>
      <div>
        <h6>Category</h6>
        <div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="womens-t-shirts"
              id="womens-t-shirts"
              onChange={() => handleFilter("category", "womens-t-shirts")}
              checked={category?.includes("womens-t-shirts")}
            />
            <label className="form-check-label" htmlFor="womens-t-shirts">
              Womens T-shirts
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="womens-t-shirts2"
              id="womens-t-shirts2"
              onChange={() => handleFilter("category", "womens-t-shirts2")}
              checked={category?.includes("womens-t-shirts2")}
            />
            <label className="form-check-label" htmlFor="womens-t-shirts2">
              Womens T-shirts 2
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
