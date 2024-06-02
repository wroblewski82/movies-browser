import { ReactComponent as PlaceholderIcon } from "../assets/placeholderIcon.svg";
import { ReactComponent as StarIcon } from "../assets/starIcon.svg";

import {
  StyledTile,
  Image,
  ImagePlaceholder,
  Decsription,
  Title,
  Year,
  Genres,
  Genre,
  VotesContainer,
  VotesNumber,
  Mark,
} from "./styled";

export const Tile = ({ poster, title, year, genres, mark, votesNumber }) => {
  return (
    <StyledTile>
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
          <StarIcon />
          <Mark>{mark}</Mark>
          <VotesNumber>{votesNumber} votes</VotesNumber>
        </VotesContainer>
      </Decsription>
    </StyledTile>
  );
};
