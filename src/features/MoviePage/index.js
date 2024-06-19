import { nanoid } from "@reduxjs/toolkit";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

import { getDataFromApi } from "../MovieList/getDataFromApi";
import { MovieTile } from "../../common/MovieTile";
import { PersonTile } from "../../common/PersonTile";
import { StyledHeader, StyledList } from "../MovieList/styled";
import {
  StyledMoviePage,
  PosterContainer,
  MovieMainData,
  MovieTitle,
  VotesContainer,
  StyledStarIcon,
  MarkContainer,
  Mark,
  MaxMark,
  VotesNumber,
  TileContainer,
  Article,
} from "./styled";

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
    <StyledMoviePage>
      <PosterContainer
        backdrop={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
      >
        <MovieMainData>
          <MovieTitle>{movie?.original_title}</MovieTitle>
          <VotesContainer>
            <StyledStarIcon />
            <MarkContainer>
              <Mark>{movie?.vote_average.toFixed(1)}</Mark>
              <MaxMark>/ 10</MaxMark>
            </MarkContainer>
            <VotesNumber>{movie?.vote_count} votes</VotesNumber>
          </VotesContainer>
        </MovieMainData>
      </PosterContainer>

      <TileContainer>
        <MovieTile
          $main
          key={nanoid()}
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
      </TileContainer>

      <Article>
        <StyledHeader as="h2">Cast</StyledHeader>
        <StyledList $people>
          {credits?.cast?.map((person) => (
            <PersonTile
              key={nanoid()}
              {...(person.profile_path && {
                poster: `https://image.tmdb.org/t/p/w342${person.profile_path}.jpg`,
              })}
              personName={person.name}
            />
          ))}
        </StyledList>
      </Article>

      <Article>
        <StyledHeader as="h2">Crew</StyledHeader>
        <StyledList $people>
          {credits?.crew?.map((person) => (
            <PersonTile
              key={nanoid()}
              {...(person.profile_path && {
                poster: `https://image.tmdb.org/t/p/w342${person.profile_path}.jpg`,
              })}
              personName={person.name}
            />
          ))}
        </StyledList>
      </Article>
    </StyledMoviePage>
  );
};