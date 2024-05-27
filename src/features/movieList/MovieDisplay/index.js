import { useSelector } from "react-redux";
import { selectMovies, selectGenres } from "../movieSlice";

import { MoviesContainer } from "./styled";
import { MovieTile } from "../../../common/MovieTile";

export const MovieDisplay = () => {
  const movies = useSelector((state) => selectMovies(state));
  const genres = useSelector((state) => selectGenres(state));

  const findGenresById = (ids) => {
    const filtredGenres = ids.map((id) =>
      genres.find((genre) => genre.id === id)
    );
    return filtredGenres;
  };

  return (
    <MoviesContainer>
      {movies.map((movie) =>
        movie.results.map((result) => (
          <MovieTile
            key={result.id}
            poster={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
            title={result.title}
            year={result.release_date.split("-")[0]}
            genres={findGenresById(result.genre_ids)}
            mark={result.vote_average.toFixed(1)}
            votesNumber={result.vote_count}
          />
        ))
      )}
    </MoviesContainer>
  );
};
