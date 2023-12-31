import { useState, useEffect } from "react";

export default function useNavigation(allItems, size = 5) {
  const [pageItems, setPageItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = size;
  let pagesCount = Math.ceil(allItems.length / pageSize);
  let pagesNumber = Array.from(Array(pagesCount).keys());

  useEffect(() => {
    const endIndex = pageSize * currentPage;
    const startIndex = endIndex - pageSize;
    setPageItems(allItems.slice(startIndex, endIndex));
  }, [currentPage, allItems]);

  useEffect(() => {
    pageItems.length === 0 && currentPage !== 1 && changePage(currentPage - 1)
  }, [pageItems])
  
  const changePage = (page) => {
    setCurrentPage(page);
  };
  
  return { pagesNumber, pageItems, currentPage, changePage };
}
