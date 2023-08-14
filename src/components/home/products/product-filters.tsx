"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import "./product-filters.scss";

const filterData = [
  {
    id: 1,
    title: "Category",
    key: "category",
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
  {
    id: 2,
    title: "Women's Clothing Size",
    key: "size",
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
  {
    id: 3,
    title: "Colors",
    key: "colors",
    data: [
      { id: 1, title: "Red", slug: "red" },
      { id: 2, title: "Orange", slug: "orange" },
      { id: 3, title: "Green", slug: "green" },
      { id: 4, title: "Blue", slug: "blue" },
      { id: 5, title: "Black", slug: "black" },
      { id: 6, title: "Yellow", slug: "yellow" },
      { id: 7, title: "Purple", slug: "purple" },
      { id: 8, title: "Brown", slug: "brown" },
      { id: 9, title: "Pink", slug: "pink" },
      { id: 10, title: "Gray", slug: "gray" },
      { id: 11, title: "White", slug: "white" },
      { id: 12, title: "Cyan", slug: "cyan" },
      { id: 13, title: "Magenta", slug: "magenta" },
      { id: 14, title: "Maroon", slug: "maroon" },
      { id: 15, title: "Violet", slug: "violet" },
      { id: 16, title: "Navy Blue", slug: "navy-blue" },
      { id: 17, title: "Aqua", slug: "aqua" },
      { id: 18, title: "Lime", slug: "lime" },
      { id: 19, title: "Beige", slug: "beige" },
      { id: 20, title: "Indigo", slug: "indigo" },
      { id: 21, title: "Coral", slug: "coral" },
      { id: 22, title: "Crimson", slug: "crimson" },
      { id: 23, title: "Silver", slug: "silver" },
      { id: 24, title: "Lavender", slug: "lavender" },
    ],
  },
];
export default function ProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handleFilter = (key: string, value: string) => {
    const newQuery = new URLSearchParams(Array.from(searchParams.entries()));
    let categoryArray = searchParams.get(key)
      ? searchParams.get(key)?.split(",")
      : [];
    if (
      categoryArray &&
      categoryArray.length > 0 &&
      categoryArray.includes(value)
    ) {
      categoryArray = [...categoryArray.filter((val) => val !== value)];
    } else {
      categoryArray = categoryArray ? [...categoryArray, value] : [value];
    }
    newQuery.set(key, categoryArray.join(","));
    newQuery.set("page", "1");
    router.push(`${pathname}?${newQuery.toString()}`);
  };
  return (
    <div className="product-filters-box">
      {filterData && filterData.length > 0 && (
        <>
          <h4>Filters</h4>
          {filterData.map((val) => (
            <div key={`filters-${val.id}`} className="filter-main-box">
              <h6>{val.title}</h6>
              <div className="filter-options-box">
                {val.data.map((option) => {
                  const selectedData = searchParams.get(val.key)
                    ? searchParams.get(val.key)?.split(",")
                    : [];
                  return (
                    <div
                      key={`filters-option-${val.id}${option.id}`}
                      className={`form-check options-div ${val.key}`}
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={`${val.key}-${option.slug}`}
                        id={`${val.key}-${option.slug}`}
                        onChange={() => handleFilter(val.key, option.slug)}
                        checked={
                          selectedData && selectedData?.includes(option.slug)
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`${val.key}-${option.slug}`}
                        style={{
                          backgroundColor:
                            val.key === "colors" ? option.title : "transparent",
                        }}
                      >
                        {val.key === "colors" ? "" : option.title}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
