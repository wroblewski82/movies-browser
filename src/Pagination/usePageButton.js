import { useSelector } from "react-redux";
import { selectMoviePage } from "../features/MovieList/moviesSlice";
import { useEffect, useState } from "react";
import paginationParamName from "./paginationParamName";
import { useQueryParam, useReplaceQueryParam } from "../Navigation/queryParam";

export const usePageButton = () => {
  const movieData = useSelector(selectMoviePage);
  const data = movieData;
  const totalPages = data > 500 ? 500 : data;
  const replaceQueryParameter = useReplaceQueryParam();
  const [page, setPage] = useState(
    parseInt(useQueryParam(paginationParamName)) || 1
  );

  useEffect(() => {
    if (page !== 1) {
      replaceQueryParameter({ key: paginationParamName, value: page });
    } else {
      replaceQueryParameter({ key: paginationParamName });
    }
  }, [page]);

  const setFirstPage = () => {
    setPage(1);
  };

  const setLastPage = () => {
    setPage(totalPages);
  };

  const setNextPage = () => {
    setPage((page) => (page += 1));
  };

  const setPreviousPage = () => {
    setPage((page) => (page -= 1));
  };

  return {
    page,
    totalPages,
    setNextPage,
    setPreviousPage,
    setFirstPage,
    setLastPage,
  };
};
