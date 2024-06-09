import styled from "styled-components";

export const StyledActorTile = styled.section`
  max-width: 208px;
  min-height: 339px;
  padding: 16px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    padding: 8px;
    border-radius: 5px;
    max-width: 136px;
    min-height: 245px;
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 176px;
  height: 231px;
  object-fit: cover;
  margin-bottom: 12px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 120px;
    height: 178px;
    margin-bottom: 8px;
  }
`;

export const ActorName = styled.h3`
  line-height: 1.3;
  font-size: 22px;
  font-weight: 500;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    line-height: 1.3;
    font-size: 14px;
  }
`;
