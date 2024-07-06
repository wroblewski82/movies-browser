import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieList,
  selectFetchDataStatus,
  selectMovieList,
  selectGenreList,
  fetchMovieSearch,
  selectMovieResult,
} from "./moviesSlice";
import { LoadingPage } from "../../common/LoadingPage";
import { ErrorPage } from "../../common/ErrorPage";
import { MovieTile } from "../../common/MovieTile";
import { StyledMain, StyledHeader, StyledList, StyledLink, Item } from "../styled";
import { Pagination } from "../../Pagination";
import { useQueryParam } from "../../Navigation/queryParam";
import paginationParamName from "../../Pagination/paginationParamName";
import searchQueryName from "../../Navigation/searchQueryName";
import { NoResultsPage } from "../../common/NoResultsPage";

export const MovieList = () => {
  const dispatch = useDispatch();
  const fetchDataStatus = useSelector(selectFetchDataStatus);
  const movieList = useSelector(selectMovieList);
  const genreList = useSelector(selectGenreList);
  const page = useQueryParam(paginationParamName) || 1;
  const query = useQueryParam(searchQueryName) || "";
  const totalResult = useSelector(selectMovieResult);
  const title =
    query !== ""
      ? `Search results for "${query}" (${totalResult})`
      : "Popular movies";

  useEffect(() => {
    const options = {
      query: query,
      page: page,
      type: "movie",
    };
    if (query) {
      dispatch(fetchMovieSearch(options));
    } else {
      dispatch(fetchMovieList(page));
    }
  }, [page, dispatch, query]);

  return (
    <StyledMain>
      {fetchDataStatus === "loading" && <LoadingPage title={query} />}
      {totalResult === 0 && query !== "" && <NoResultsPage title={query} />}
      {fetchDataStatus === "error" && <ErrorPage />}
      {fetchDataStatus === "success" && totalResult !== 0 && (
        <>
          <StyledHeader>{title}</StyledHeader>
          <StyledList>
            {movieList.map((movie) => (
              <Item key={nanoid()}>
                <StyledLink to={`/movies/${movie.id}`}>
                  <MovieTile
                    poster={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                    title={movie.title}
                    year={movie.release_date.split("-")[0]}
                    genres={movie.genre_ids.map((id) =>
                      genreList.find((genre) => genre.id === id)
                    )}
                    mark={movie.vote_average.toFixed(1)}
                    votes={movie.vote_count}
                  />
                </StyledLink>
              </Item>
            ))}
          </StyledList>
          <Pagination />
        </>
      )}
    </StyledMain>
  );
};
