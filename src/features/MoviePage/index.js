import { useParams } from "react-router";
import { useState, useEffect } from "react";

import { getDataFromApi } from "../MovieList/getDataFromApi";
import { MovieTile } from "../../common/MovieTile";
import { PersonTile } from "../../common/PersonTile";
import { StyledMoviePage, Article } from "./styled";
import { StyledHeader, StyledList } from "../MovieList/styled";

export const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await getDataFromApi(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=ac5371c0e378529d6face3e2fab3b7c1`
        );
        const creditsData = await getDataFromApi(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=ac5371c0e378529d6face3e2fab3b7c1`
        );
        setMovie(movieData);
        setCredits(creditsData);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <StyledMoviePage $main>
      <MovieTile
        $main
        poster={`https://image.tmdb.org/t/p/w342${movie?.poster_path}.jpg`}
        title={movie?.title}
        year={movie?.release_date.split("-")[0]}
        productionPlaces={movie?.production_countries}
        releaseDate={movie?.release_date.split("-").reverse().join(".")}
        genres={movie?.genres}
        mark={movie?.vote_average.toFixed(1)}
        votes={movie?.vote_count}
        description={movie?.overview}
      />

      <Article>
        <StyledHeader>Cast</StyledHeader>
        <StyledList>
          {credits?.cast?.map((person) => (
            <PersonTile
              poster={`https://image.tmdb.org/t/p/w342${person?.profile_path}.jpg`}
              personName={person.name}
            />
          ))}
        </StyledList>
      </Article>

      <Article>
        <StyledHeader>Crew</StyledHeader>
        <StyledList>
          {credits?.crew?.map((person) => (
            <PersonTile
              poster={`https://image.tmdb.org/t/p/w342${person?.profile_path}.jpg`}
              personName={person.name}
            />
          ))}
        </StyledList>
      </Article>
    </StyledMoviePage>
  );
};