import { Container, StyledParagraph, IconContainer, Icon } from "./styled";

export const LoadingPage = ({ title }) => (
  <Container>
    <StyledParagraph>
      {title ? <>Search results for {title}</> : ""}
    </StyledParagraph>
    <IconContainer>
      <Icon />
    </IconContainer>
  </Container>
);
