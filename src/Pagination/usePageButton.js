import { useLocation } from "react-router";

export const usePageButton = () => {
  var actualPage = 2;
  const totalPages = 500;

  const setFirstPage = () => {
    actualPage = 1;
  };

  const setLastPage = () => {
    actualPage = totalPages;
  };

  const setNextPage = () => {
    actualPage = actualPage + 1;
  };

  const setPreviousPage = () => {
    actualPage = actualPage - 1;
  };

  return {
    actualPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    setFirstPage,
    setLastPage,
  };
};
