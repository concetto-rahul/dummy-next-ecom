"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ProductShortBy() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sortBy = searchParams.get("sort_by");
  const handleSortBy = (value: string) => {
    const newQuery = new URLSearchParams(Array.from(searchParams.entries()));
    newQuery.set("page", "1");
    newQuery.set("sort_by", value);
    router.push(`${pathname}?${newQuery.toString()}`);
  };
  return (
    <div>
      <label htmlFor="short_by">Short By</label>
      <select
        name="short_by"
        id="short_by"
        onChange={(e) => handleSortBy(e.target.value)}
      >
        <option
          value="relevency"
          selected={sortBy === "relevency" || sortBy === null}
        >
          Relevency
        </option>
        <option value="price_asc" selected={sortBy === "price_asc"}>
          Lowest Price
        </option>
        <option value="price_desc" selected={sortBy === "price_desc"}>
          Highest Price
        </option>
        <option value="reviews_desc" selected={sortBy === "reviews_desc"}>
          Top Customers Reviews
        </option>
        <option value="recent_desc" selected={sortBy === "recent_desc"}>
          Most Recent
        </option>
      </select>
    </div>
  );
}
