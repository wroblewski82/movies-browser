import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectFetchMoviesStatus,
  fetchMovies,
} from "./movieSlice";
import { ErrorPage } from "../../common/ErrorPage";
import { LoadingPage } from "../../common/LoadingPage";
import { MovieDisplay } from "./MovieDisplay";

function MovieList() {
  const dispatch = useDispatch();
  const fetchMoviesStatus = useSelector((state) =>
    selectFetchMoviesStatus(state)
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <main>
      {fetchMoviesStatus === "error" && <ErrorPage />}
      {fetchMoviesStatus === "loading" && <LoadingPage />}
      {fetchMoviesStatus === "success" && <MovieDisplay />}
    </main>
  );
}

export default MovieList;
