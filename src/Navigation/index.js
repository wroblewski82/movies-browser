import {
  Container,
  LogoLink,
  LogoTyp,
  NavigationBar,
  NavigationItem,
  NavigationList,
  StyledNavLink,
  Sygnet,
  Wrapper,
} from "./styled";

export const Navigation = () => {
  return (
    <NavigationBar>
      <Wrapper>
        <Container>
          <LogoLink to="/movies">
            <Sygnet />
            <LogoTyp>Movies&nbsp;Browser</LogoTyp>
          </LogoLink>
          <NavigationList>
            <NavigationItem>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </NavigationItem>
            <NavigationItem>
              <StyledNavLink to="/people">People</StyledNavLink>
            </NavigationItem>
          </NavigationList>
        </Container>
      </Wrapper>
    </NavigationBar>
  );
};
