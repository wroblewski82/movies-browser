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

  ${({ $actor }) =>
    $actor &&
    css`
      max-width: 208px;
      min-height: 339px;
      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        max-width: 136px;
        min-height: 245px;
      }
    `}
`;
