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
  const [actualPage, setPage] = useState(
    parseInt(useQueryParam(paginationParamName)) || 1
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
