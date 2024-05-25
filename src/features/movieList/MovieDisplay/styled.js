import styled from "styled-components";

export const MoviesContainer = styled.div`
  max-width: 1500px;
  justify-items: center;
  padding: 30px;
  display: grid;
  grid-gap: 24px;
  grid-auto-flow: column-reverse;
  grid-template-columns: repeat(4, 400px);
  grid-template-rows: repeat(auto, 650px);

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
