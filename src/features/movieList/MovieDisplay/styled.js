import styled from "styled-components";

export const MoviesContainer = styled.div`
  justify-items: center;
  padding: 24px;
  display: grid;
  grid-gap: 24px;
  grid-auto-flow: column-reverse;
  grid-template-columns: repeat(4, minmax(360px, 1fr));
  grid-template-rows: auto;

  @media (max-width: ${({ theme }) => theme.media.desktopSmall}px) {
    grid-template-columns: repeat(3, minmax(360px, 1fr));
    padding: 0;
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    grid-template-columns: repeat(2, 400px);
    padding: 0;
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px 5px;
  }
`;
