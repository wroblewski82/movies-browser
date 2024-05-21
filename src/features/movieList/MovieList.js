import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMovies } from "./movieSlice";

function MovieList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return <h1>MovieList</h1>;
}

export default MovieList;
