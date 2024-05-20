import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMovies } from "./movieSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return <p>Hello world!</p>;
}

export default App;
