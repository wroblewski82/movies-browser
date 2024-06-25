import styled, { css } from "styled-components";

export const ImagePlaceholder = styled.div`
  display: flex;
  width: 292px;
  height: 434px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.silver};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 114px;
    height: 169px;
  }

  ${({ $main }) =>
    $main &&
    css`
      width: 312px;
      height: 464px;
      margin: auto;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        margin: 0;
      }
    `}

  ${({ $forPerson }) =>
    $forPerson &&
    css`
      border-radius: 5px;
      width: 100%;
      height: 100%;
      margin: 0 auto;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        width: 100%;
        height: 100%;
      }
    `}
`;