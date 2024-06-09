import { ReactComponent as PlaceholderIcon } from "../../assets/placeholderActorIcon.svg";

import { ImagePlaceholder } from "../ImagePlaceholder/styled";
import { StyledPersonTile, Image, PersonName } from "./styled";

export const PersonTile = ({ poster, personName }) => {
  return (
    <StyledPersonTile>
      {poster ? (
        <Image src={poster} alt="This person photo" />
      ) : (
        <ImagePlaceholder $forPerson>
          <PlaceholderIcon />
        </ImagePlaceholder>
      )}
      <PersonName>{personName}</PersonName>
    </StyledPersonTile>
  );
};