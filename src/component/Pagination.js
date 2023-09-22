import React from "react";

export const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItem,
  setCurrentPage,
}) => {
  const pageNumber = [];

  console.log("totalItem / itemsPerPage", totalItem / itemsPerPage);
  for (let i = 1; i <= Math.ceil(totalItem / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const goToNextPage = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div>
      <nav>
        <ul className="pagination">
          <button
            onClick={goToPreviousPage}
            className={`page-link pagination-button ${
              currentPage === 1 ? "disabled" : ""
            }`}
          >
            Previous
          </button>
          {pageNumber.map((num) => (
            <li className="page-item" key={num}>
              {console.log(num)}
              <a
                onClick={() => setCurrentPage(num)}
                href="#"
                className={`page-link ${currentPage === num ? "active" : ""}`}
              >
                {num}
              </a>
            </li>
          ))}
          <button
            onClick={goToNextPage}
            className={`page-link pagination-buttons ${
              currentPage === pageNumber.length ? "disabled" : ""
            }`}
          >
            Next
          </button>
        </ul>
      </nav>
    </div>
  );
};
