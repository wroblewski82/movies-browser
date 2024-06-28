import { ReactComponent as DangerIcon } from "../../assets/danger.svg";
import { Container, StyledHeader, StyledParagraph, StyledLink } from "./styled";

export const ErrorPage = () => (
  <Container>
    <DangerIcon />
    <StyledHeader>Ooops! Something went wrong... </StyledHeader>
    <StyledParagraph>
      Please check your network connection and try again
    </StyledParagraph>
    <StyledLink
      href="https://wroblewski82.github.io/movies-browser/#/movies"
      rel="noreferrer noopener"
      title="Movies Browser Home Page"
    >
      Back to home page
    </StyledLink>
  </Container>
);
