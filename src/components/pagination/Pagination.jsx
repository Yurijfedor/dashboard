import { useState, useEffect } from "react";
import {
  PaginationContainer,
  PaginationButton,
  PaginationWrapp,
  PaginationText,
} from "./Pagination.styled";

export const Pagination = ({
  data,
  setVisibleData,
  pageLimit = 4,
  dataLimit = 8,
}) => {
  const [pages, setPages] = useState(Math.ceil(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPages(Math.ceil(data.length / dataLimit));
  }, [data, dataLimit]);

  function goToNextPage() {
    setCurrentPage((page) => Math.min(page + 1, pages));
  }

  function goToPreviousPage() {
    setCurrentPage((page) => Math.max(page - 1, 1));
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const startIndex = (currentPage - 1) * dataLimit;
  const endIndex = startIndex + dataLimit;

  const getPaginatedData = () => {
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(Math.min(pageLimit, pages - start))
      .fill()
      .map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    setVisibleData(getPaginatedData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, data, setVisibleData]);

  return (
    <PaginationWrapp>
      <PaginationText>{`Showing data ${startIndex + 1} to ${
        endIndex > data.length ? data.length : endIndex
      } of ${data.length} entries`}</PaginationText>
      <PaginationContainer>
        <PaginationButton
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          {"<"}
        </PaginationButton>

        {getPaginationGroup().map((item, index) => (
          <PaginationButton
            key={index}
            onClick={changePage}
            isActive={currentPage === item ? "active" : null}
          >
            {item}
          </PaginationButton>
        ))}

        <PaginationButton
          onClick={goToNextPage}
          disabled={currentPage === pages}
        >
          {">"}
        </PaginationButton>
      </PaginationContainer>
    </PaginationWrapp>
  );
};
