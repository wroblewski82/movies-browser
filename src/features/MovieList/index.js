import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieList,
  selectMoviesList,
  selectLoadingStatus,
  selectErrorStatus,
} from "./moviesSlice";
import { LoadingPage } from "../../common/LoadingPage";
import { ErrorPage } from "../../common/ErrorPage";
import { MovieTile } from "../../common/MovieTile";
import { StyledHeader, StyledList, StyledItem } from "./styled";

export const MovieList = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector(selectMoviesList);
  const loadingState = useSelector(selectLoadingStatus);
  const errorState = useSelector(selectErrorStatus);

  useEffect(() => {
    dispatch(fetchMovieList());
  }, [dispatch]);

  if (loadingState) {
    return <LoadingPage />;
  }

  if (errorState) {
    return <ErrorPage />;
  }

  return (
    <>
      <StyledHeader>Popular movies</StyledHeader>
      <StyledList>
        {moviesList?.map((movie) => (
          <StyledItem key={movie.id}>
            <MovieTile {...movie} />
          </StyledItem>
        ))}
      </StyledList>
    </>
  );
};
