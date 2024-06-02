import styled from "styled-components";

export const StyledMain = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px;
`;

export const StyledHeader = styled.h1`
  font-size: 36px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 18px;
    line-height: 1.2;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-gap: 16px 0;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: center;
`;
