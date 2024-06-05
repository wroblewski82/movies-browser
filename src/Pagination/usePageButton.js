import { useSelector } from "react-redux";
import { selectMoviesObject } from "../features/MovieList/moviesSlice";
import { useEffect, useState } from "react";
import paginationParamName from "./paginationParamName";
import { useQueryParam, useReplaceQueryParam } from "../Navigation/queryParam";

export const usePageButton = () => {
  const movieData = useSelector(selectMoviesObject);
  const data = movieData;
  const totalPages = data.total_Pages > 500 ? 500 : data.total_Pages;
  const replaceQueryParameter = useReplaceQueryParam();
  const [actualPage, setPage] = useState(
    parseInt(useQueryParam(paginationParamName))
  );

  useEffect(() => {
    if (actualPage !== 1) {
      replaceQueryParameter({ key: paginationParamName, value: actualPage });
    } else {
      replaceQueryParameter({ key: paginationParamName });
    }
  }, [actualPage]);

  const setFirstPage = () => {
    setPage(1);
  };

  const setLastPage = () => {
    setPage(totalPages);
  };

  const setNextPage = () => {
    setPage((actualPage) => (actualPage += 1));
  };

  const setPreviousPage = () => {
    setPage((actualPage) => (actualPage -= 1));
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
