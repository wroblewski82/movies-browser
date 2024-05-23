import { useSelector } from "react-redux";
import { selectMovies, selectGenres } from "./movieSlice";

import { MovieTile } from "../../common/MovieTile";

export const MovieDisplay = () => {
  const movies = useSelector((state) => selectMovies(state));
  const genres = useSelector((state) => selectGenres(state));

  return movies.map((movie) =>
    movie.results.map((result) => {
      <MovieTile
        key={result.id}
        poster={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
        title={result.title}
        year={result.release_date.split("-")[0]}
        genres={result.genre_ids.map(
          (genre_id) => genres.find((genre) => genre.id === genre_id).name
        )}
        mark={result.vote_average.toFixed(1)}
        votesNumber={result.vote_count}
      />;
    })
  );
};
