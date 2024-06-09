import styled, { css } from "styled-components";

export const StyledMoviePage = styled.section`
  ${({ $main }) =>
    $main &&
    css`
      padding-bottom: 8px;
      height: auto;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 324px;
        background-color: ${({ theme }) => theme.colors.white};
        margin: 0 auto;
        gap: 16px;
        padding: 16px;
      }
    `}
`;