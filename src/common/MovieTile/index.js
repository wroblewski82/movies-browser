import { nanoid } from "@reduxjs/toolkit";
import { ReactComponent as PlaceholderIcon } from "../../assets/placeholderMovieIcon.svg";
import { ImagePlaceholder } from "../ImagePlaceholder/styled";
import {
  StyledMovieTile,
  Image,
  Decsription,
  Title,
  Year,
  Genres,
  Genre,
  VotesContainer,
  StyledStarIcon,
  VotesNumber,
  Mark,
} from "./styled";

export const MovieTile = ({
  poster_path,
  title,
  release_date,
  genre_ids,
  vote_average,
  vote_count,
}) => {
  const year = release_date?.split("-")[0];

  return (
    <StyledMovieTile>
      {poster_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          alt="Movie Poster"
        />
      ) : (
        <ImagePlaceholder>
          <PlaceholderIcon />
        </ImagePlaceholder>
      )}
      <Decsription>
        {title && <Title>{title}</Title>}
        {release_date && <Year>{year}</Year>}
        {genre_ids && (
          <Genres>
            {genre_ids.map((genre) => (
              <Genre key={nanoid()}>{genre}</Genre>
            ))}
          </Genres>
        )}
        <VotesContainer>
          <StyledStarIcon />
          <Mark>{vote_average}</Mark>
          <VotesNumber>{vote_count} votes</VotesNumber>
        </VotesContainer>
      </Decsription>
    </StyledMovieTile>
  );
};
