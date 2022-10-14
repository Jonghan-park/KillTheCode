import { useMemo } from "react";
import "./Pagination.css";

const Pagination = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
}) => {
  const LAST_PAGE = Math.ceil(totalCount / pageSize);
  const paginationBar = useMemo(() => {
    const pageNumbers = [];
    for (let i = 1; i <= LAST_PAGE; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }, [])
  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const onNext = () => {
    if (currentPage < LAST_PAGE) {
      onPageChange(currentPage + 1);
    }
  };
  return (
    <div className="paginationContainer">
      <ul className="paginationUl">
        <li
          className="paginationBtn pageArrow"
          onClick={onPrevious}
        >
          &lt;
        </li>
        {paginationBar.map((pageNumber) => {
          return (
            <li
              key={pageNumber}
              className={
                "paginationBtn" +
                (currentPage === pageNumber ? " currentPage" : "")
              }
              onClick={()=> onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          className="paginationBtn pageArrow"
          onClick={onNext}
        >
          &gt;
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
