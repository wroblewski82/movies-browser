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

  ${({ actor }) =>
    actor &&
    css`
      width: 176px;
      height: 231px;
      margin-bottom: 12px;
      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        width: 120px;
        height: 178px;
        margin-bottom: 8px;
      }
    `}

  ${({ personPage }) =>
    personPage &&
    css`
      width: 399px;
      height: 564px;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        width: 116px;
        height: 163px;
      }
    `}
`;
