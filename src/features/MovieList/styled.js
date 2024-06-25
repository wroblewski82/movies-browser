import styled, { css } from "styled-components";

export const StyledMain = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 16px;
`;

export const StyledHeader = styled.h1`
  font-size: 36px;
  line-height: 1.2;
  margin-top: 56px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 18px;
    line-height: 1.2;
    margin-top: 24px;
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
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  }

  ${({ $people }) =>
    $people &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
      grid-auto-rows: minmax(208px, 1fr);
      align-items: center;
      justify-items: center;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
        grid-gap: 16px;
      }
    `}
`;
