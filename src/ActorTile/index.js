import { StyledActorTile, Image, ActorName } from "./styled";

export const ActorTile = ({ poster, actorName }) => {
  return (
    <StyledActorTile>
      <Image src={poster} alt="This actor photo" />{" "}
      <ActorName>{actorName}</ActorName>
    </StyledActorTile>
  );
};
