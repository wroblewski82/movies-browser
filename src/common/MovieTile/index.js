import { nanoid } from "@reduxjs/toolkit";
import { ReactComponent as PlaceholderIcon } from "../../assets/placeholderMovieIcon.svg";
import { ImagePlaceholder } from "../ImagePlaceholder/styled";
import {
  StyledMovieTile,
  Image,
  DataContainer,
  Title,
  Year,
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
          <p>
            <AdditionalDataName>Production:</AdditionalDataName>{" "}
            <AdditionalData>{productionPlace}</AdditionalData>
          </p>
        )}
        {releaseDate && (
          <p>
            <AdditionalDataName>Release date:</AdditionalDataName>
            {"  "}
            <AdditionalData>{releaseDate}</AdditionalData>
          </p>
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
        {description && <Description>{description}</Description>}
      </DataContainer>
    </StyledMovieTile>
  );
};
