import { ReactComponent as PlaceholderIcon } from "../assets/placeholderMovieIcon.svg";

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
  poster,
  title,
  year,
  genres,
  mark,
  votesNumber,
}) => {
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
              <Genre key={genre}>{genre}</Genre>
            ))}
          </Genres>
        )}
        <VotesContainer>
          <StyledStarIcon />
          <Mark>{mark}</Mark>
          <VotesNumber>{votesNumber} votes</VotesNumber>
        </VotesContainer>
      </Decsription>
    </StyledMovieTile>
  );
};
