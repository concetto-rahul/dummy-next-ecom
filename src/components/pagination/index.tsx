"use client";

import ReactPaginate from "react-paginate";

export default function Pagination() {
  //   items,
  //   pageSize,
  //   currentPage,
  //   onPageChange,
  // }
  //   const pagesCount = Math.ceil(items / pageSize);

  //   if (pagesCount === 1) return null;
  //   const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <nav aria-label="Page navigation example">
      {/* <ul className="pagination  justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul> */}

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        // onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={80}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        // activeLinkClassName=""
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        disabledClassName="disabled"
      />
    </nav>
  );
}
