import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieList,
  selectFetchDataStatus,
  selectMovieList,
  selectGenreList,
} from "./moviesSlice";
import { LoadingPage } from "../../common/LoadingPage";
import { ErrorPage } from "../../common/ErrorPage";
import { MovieTile } from "../../common/MovieTile";
import { StyledMain, StyledHeader, StyledList, StyledItem } from "./styled";
import { Pagination } from "../../Pagination";
import { useQueryParam } from "../../Navigation/queryParam";
import paginationParamName from "../../Pagination/paginationParamName";

export const MovieList = () => {
  const dispatch = useDispatch();
  const fetchDataStatus = useSelector(selectFetchDataStatus);
  const movieList = useSelector(selectMovieList);
  const genreList = useSelector(selectGenreList);
  const page = useQueryParam(paginationParamName) || 1;

  useEffect(() => {
    dispatch(fetchMovieList(page));
  }, [page, dispatch]);

  return (
    <>
      <StyledMain>
        {fetchDataStatus === "loading" && <LoadingPage />}
        {fetchDataStatus === "error" && <ErrorPage />}
        {fetchDataStatus === "success" && (
          <>
            <StyledHeader>Popular movies</StyledHeader>
            <StyledList>
              {movieList.map((movie) => (
                <StyledItem key={movie.id}>
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
                </StyledItem>
              ))}
            </StyledList>
          </>
        )}
      </StyledMain>
      <Pagination />
    </>
  );
};
