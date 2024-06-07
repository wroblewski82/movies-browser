import { nanoid } from "@reduxjs/toolkit";

import { ReactComponent as PlaceholderIcon } from "../../assets/placeholderMovieIcon.svg";
import { ImagePlaceholder } from "../ImagePlaceholder/styled";
import {
  StyledSection,
  StyledMovieTile,
  Image,
  DataContainer,
  StyledLink,
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
  id,
  poster,
  title,
  year,
  productionPlaces,
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
          <Image $main={$main} src={poster} alt="Movie Poster" />
        ) : (
          <ImagePlaceholder $main={$main}>
            <PlaceholderIcon />
          </ImagePlaceholder>
        )}
        <DataContainer $main={$main}>
          <StyledLink to={`/movies/${id}`}>
            {title && <Title $main={$main}>{title}</Title>}{" "}
          </StyledLink>
          {year && <Year $main={$main}>{year}</Year>}
          {productionPlaces && (
            <Container>
              <AdditionalDataName $main={$main}>Production:</AdditionalDataName>{" "}
              {productionPlaces?.map((productionPlace, index) => (
                <AdditionalData key={index} $main={$main}>
                  {productionPlace.name}
                  {index === productionPlaces.length - 1 ? "." : ", "}
                </AdditionalData>
              ))}
            </Container>
          )}
          {releaseDate && (
            <Container>
              <AdditionalDataName $main={$main}>
                Release date:
              </AdditionalDataName>{" "}
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
