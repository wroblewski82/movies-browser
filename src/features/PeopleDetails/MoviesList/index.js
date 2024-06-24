import { MovieTile } from "../../../common/MovieTile";
import { StyledHeader } from "./styled";
import { StyledList, StyledItem } from "../../styled";

export const MoviesList = ({ header, moviesList, genreList }) => {
  return (
    <>
      {moviesList.length !== 0 && (
        <StyledHeader>
          {header} ({moviesList.length})
        </StyledHeader>
      )}
      <StyledList>
        {moviesList.map((movie) => (
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
  );
};
