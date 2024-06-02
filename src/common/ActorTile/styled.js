import styled from "styled-components";

export const StyledActorTile = styled.section`
  max-width: 208px;
  min-height: 339px;
  margin: 24px;
  padding: 10px 15px 22px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 16px;
    padding: 8px 8px 15px;
    border-radius: 5px;
    max-width: 136px;
    min-height: 245px;
  }
`;

export const Image = styled.img`
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 120px;
    height: 178px;
  }
`;

export const ActorName = styled.h3`
  line-height: ${({ theme }) => theme.lineHeights.titleDesktop}px;
  font-size: ${({ theme }) => theme.fontSizes.titleDesktop}px;
  font-weight: 500px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    line-height: 18.2px;
    font-size: 14px;
  }
`;
