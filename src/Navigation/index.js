import {
  Container,
  NavigationBar,
  NavigationItem,
  NavigationList,
  StyledNavLink,
  Wrapper,
} from "./styled";

export const Navigation = () => {
  return (
    <NavigationBar>
      <Wrapper>
        <Container>
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
