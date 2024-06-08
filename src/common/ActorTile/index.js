import { ReactComponent as PlaceholderIcon } from "../../assets/placeholderActorIcon.svg";

import { ImagePlaceholder } from "../ImagePlaceholder/styled";
import { StyledActorTile, Image, ActorName } from "./styled";

export const ActorTile = ({ poster, actorName }) => {
  return (
    <StyledActorTile>
      {poster ? (
        <Image src={poster} alt="This actor photo" />
      ) : (
        <ImagePlaceholder>
          <PlaceholderIcon />
        </ImagePlaceholder>
      )}
      <ActorName>{actorName}</ActorName>
    </StyledActorTile>
  );
};
