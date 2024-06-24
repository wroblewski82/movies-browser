import { ReactComponent as PlaceholderIcon } from "../../../assets/placeholderActorIcon.svg";
import { ImagePlaceholder } from "../../../common/ImagePlaceholder/styled";
import {
  StyledActorProfile,
  StyledDiv,
  StyledImage,
  StyledHeader,
  StyledDetails,
  StyledDetailsSpan,
  StyledDescriptionsDesktop,
  StyledDescriptionsMobile,
} from "./styled";

export const ActorProfile = ({
  poster,
  name,
  birthDate,
  birthPlace,
  biography,
}) => {
  return (
    <StyledActorProfile>
      <StyledDiv>
        {poster !== "https://image.tmdb.org/t/p/h632/null" ? (
          <StyledImage width={399} src={poster} alt="Selected actor" />
        ) : (
          <ImagePlaceholder actorProfile>
            <PlaceholderIcon />
          </ImagePlaceholder>
        )}
        <div>
          {name && <StyledHeader>{name}</StyledHeader>}
          {birthDate && (
            <StyledDetails>
              <StyledDetailsSpan desktop>Date of birth: </StyledDetailsSpan>
              <StyledDetailsSpan mobile>Birth: </StyledDetailsSpan>
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
      </StyledDiv>
      {biography && (
        <StyledDescriptionsMobile>{biography}</StyledDescriptionsMobile>
      )}
    </StyledActorProfile>
  );
};
