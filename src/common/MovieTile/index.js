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

export const MovieTile = ({ poster, title, year, genres, mark, votes }) => {
  return (
    <StyledMovieTile>
      {poster ? (
        <Image src={poster} alt="Movie Poster" />
      ) : (
        <ImagePlaceholder>
          <PlaceholderIcon />
        </ImagePlaceholder>
      )}
      <Decsription>
        {title && <Title>{title}</Title>}
        {year && <Year>{year}</Year>}
        {genres && (
          <Genres>
            {genres.map((genre) => (
              <Genre key={nanoid()}>{genre.name}</Genre>
            ))}
          </Genres>
        )}
        <VotesContainer>
          <StyledStarIcon />
          <Mark>{mark}</Mark>
          <VotesNumber>{votes} votes</VotesNumber>
        </VotesContainer>
      </Decsription>
    </StyledMovieTile>
  );
};
