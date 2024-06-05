import { nanoid } from "@reduxjs/toolkit";
import { ReactComponent as PlaceholderIcon } from "../../assets/placeholderMovieIcon.svg";
import { ImagePlaceholder } from "../ImagePlaceholder/styled";
import {
  StyledSection,
  StyledMovieTile,
  Image,
  DataContainer,
  Title,
  Year,
  Container,
  AdditionalDataName,
  AdditionalData,
  Genres,
  Genre,
  VotesContainer,
  StyledStarIcon,
  VotesNumber,
  Mark,
  MaxMark,
  Description,
  Description2,
} from "./styled";

export const MovieTile = ({
  poster,
  title,
  year,
  productionPlace,
  releaseDate,
  genres,
  mark,
  votes,
  description,
  $main,
}) => {
  return (
    <StyledSection $main={$main}>
      <StyledMovieTile $main={$main}>
        {poster ? (
          <Image src={poster} alt="Movie Poster" $main={$main} />
        ) : (
          <ImagePlaceholder $main={$main}>
            <PlaceholderIcon />
          </ImagePlaceholder>
        )}
        <DataContainer $main={$main}>
          {title && <Title $main={$main}>{title}</Title>}
          {year && <Year $main={$main}>{year}</Year>}
          {productionPlace && (
            <Container>
              <AdditionalDataName $main={$main}>Production:</AdditionalDataName>{" "}
              <AdditionalData $main={$main}>{productionPlace}</AdditionalData>
            </Container>
          )}
          {releaseDate && (
            <Container>
              <AdditionalDataName $main={$main}>
                Release date:
              </AdditionalDataName>
              {"  "}
              <AdditionalData $main={$main}>{releaseDate}</AdditionalData>
            </Container>
          )}
          {genres && (
            <Genres>
              {genres.map((genre) => (
                <Genre key={nanoid()}>{genre.name}</Genre>
              ))}
            </Genres>
          )}
          <VotesContainer>
            <StyledStarIcon />
            <Mark $main={$main}>{mark}</Mark>
            <MaxMark $main={$main}>/10</MaxMark>
            <VotesNumber $main={$main}>{votes} votes</VotesNumber>
          </VotesContainer>
          {description && (
            <Description $main={$main}>{description}</Description>
          )}
        </DataContainer>
      </StyledMovieTile>
      {description && <Description2 $main={$main}>{description}</Description2>}
    </StyledSection>
  );
};
