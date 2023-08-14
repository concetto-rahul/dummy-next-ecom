"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

type Props = {
  total: number;
  limit: number;
};
export default function Pagination({ total, limit }: Props) {
  const pagesCount = Math.ceil(total / limit);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialPage = searchParams.get("page")
    ? Number(searchParams.get("page")) - 1
    : 0;
  console.log("initialPage", initialPage);
  if (pagesCount === 1) return null;

  const handlePageClick = (event: any) => {
    const newQuery = new URLSearchParams(Array.from(searchParams.entries()));
    newQuery.set("page", `${event.selected + 1}`);
    router.push(`${pathname}?${newQuery.toString()}`);
  };

  return (
    <nav aria-label="Page navigation example" className="mt-5">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pagesCount}
        initialPage={initialPage}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        disabledClassName="disabled"
      />
    </nav>
  );
}
