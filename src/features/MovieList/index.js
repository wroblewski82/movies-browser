import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieList,
  selectMovies,
  selectLoadingStatus,
  selectErrorStatus,
} from "./moviesSlice";
import { LoadingPage } from "../../LoadingPage";
import { ErrorPage } from "../../ErrorPage";

export const MovieList = () => {
  const dispatch = useDispatch();
  const movieList = useSelector(selectMovies);
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

  console.log(movieList);
};
