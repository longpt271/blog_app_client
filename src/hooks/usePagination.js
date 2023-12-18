import { useMemo } from "react";

export const usePagination = ({
  siblingCount = 1,
  currentPage,
  totalPageCount,
}) => {
  const paginationRange = useMemo(() => {
    // our core logic goes here
    const totalPageNumbers = siblingCount + 5;

    // State 1: if the number of pages is less than the page numbers
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    // calculating the left and right sibling index
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );
  }, [siblingCount, currentPage, totalPageCount]);

  return paginationRange;
};

function range(start, end) {
  const length = end - start + 1;

  return Array.from({ length }, (value, index) => index + start);
}
