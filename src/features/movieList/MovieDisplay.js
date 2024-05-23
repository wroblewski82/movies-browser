import { useSelector } from "react-redux";
import { selectMovies } from "./movieSlice";

import { MovieTile } from "../../common/MovieTile";

export const MovieDisplay = () => {
  const movies = useSelector((state) => selectMovies(state));

  return (
    <div>
      {movies.map((movie) =>
        movie.results.map((result) => {
          return (
            <MovieTile
              key={result.id}
              poster={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
              title={result.title}
              year={result.release_date.split("-")[0]}
              genres={""}
              mark={result.vote_average.toFixed(1)}
              votesNumber={result.vote_count}
            />
          );
        })
      )}
    </div>
  );
};
