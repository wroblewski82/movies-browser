import { ReactComponent as PlaceholderIcon } from "../../../assets/placeholderActorIcon.svg";
import { ImagePlaceholder } from "../../../common/ImagePlaceholder/styled";
import {
  StyledPersonPage,
  StyledDataContainer,
  StyledImage,
  StyledHeader,
  StyledDetails,
  StyledDetailsSpan,
  StyledDescriptionsDesktop,
  StyledDescriptionsMobile,
} from "./styled";

export const PersonPage = ({
  poster,
  name,
  birthDate,
  birthPlace,
  biography,
}) => {
  return (
    <StyledPersonPage>
      <StyledDataContainer>
        {poster !== "https://image.tmdb.org/t/p/h632/null" ? (
          <StyledImage width={399} src={poster} alt="Selected actor" />
        ) : (
          <ImagePlaceholder $personPage>
            <PlaceholderIcon />
          </ImagePlaceholder>
        )}
        <div>
          {name && <StyledHeader>{name}</StyledHeader>}
          {birthDate && (
            <StyledDetails>
              <StyledDetailsSpan $desktop>Date of birth: </StyledDetailsSpan>
              <StyledDetailsSpan $mobile>Birth: </StyledDetailsSpan>
              {birthDate}
            </StyledDetails>
          )}
          {birthPlace && (
            <StyledDetails>
              <StyledDetailsSpan>Place of birth: </StyledDetailsSpan>
              {birthPlace}
            </StyledDetails>
          )}
          {biography && (
            <StyledDescriptionsDesktop>{biography}</StyledDescriptionsDesktop>
          )}
        </div>
      </StyledDataContainer>
      {biography && (
        <StyledDescriptionsMobile>{biography}</StyledDescriptionsMobile>
      )}
    </StyledPersonPage>
  );
};
