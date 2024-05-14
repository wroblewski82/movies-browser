import { Container, StyledParagraph, IconContainer, Image } from "./styled";

export const NoResultsPage = ({ title }) => (
  <Container>
    <StyledParagraph>
      {title ? <>Sorry, there are no results for "{title}"</> : ""}
    </StyledParagraph>
    <IconContainer>
      <Image />
    </IconContainer>
  </Container>
);
