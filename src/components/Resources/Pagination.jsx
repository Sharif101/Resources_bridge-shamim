import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({
  pageIndex,
  totalPages,
  onPageChange,
  itemsPerPage,
  totalItems,
}) {
  const startItem = pageIndex * itemsPerPage + 1;
  const endItem = Math.min((pageIndex + 1) * itemsPerPage, totalItems);

  return (
    <div className="w-full flex justify-between items-center p-6 bg-white">
      <div className="text-gray-500 text-sm mb-2">
        Showing{" "}
        <span className="text-black-600">
          {startItem}-{endItem}
        </span>{" "}
        of <span className="text-black"> {totalItems}</span> items
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(e) => onPageChange(e.selected)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={totalPages}
        forcePage={pageIndex}
        containerClassName="flex gap-1"
        pageClassName="px-3 py-1 border rounded bg-white-100 hover:bg-gray-200"
        activeClassName="!bg-blue-600 !text-white"
        previousClassName="px-3 py-1 border rounded bg-white-100 hover:bg-gray-200"
        nextClassName="px-3 py-1 border rounded bg-white-100 hover:bg-gray-200"
        disabledClassName="cursor-not-allowed opacity-50"
      />
    </div>
  );
}
