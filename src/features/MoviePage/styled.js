import styled, { css } from "styled-components";
export const StyledMoviePage = styled.section`
  ${({ $main }) =>
    $main &&
    css`
      padding-bottom: 8px;
      height: auto;
      max-width: 1368px;
      margin: 0 auto;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 324px;
        gap: 16px;
      }
    `}
`;

export const TileContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    max-width: 288px;
    margin-left: 16px;
  }
`;

export const Article = styled.article`
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 0;
    padding-left: 16px;
  }
`;