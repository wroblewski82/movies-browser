import styled from "styled-components";

export const StyledActorTile = styled.section`
  width: 100%;
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.colors.heather};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    padding: 8px;
    border-radius: 5px;
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  margin: 0 auto 12px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 0 auto 8px;
  }
`;

export const ActorName = styled.h3`
  line-height: 1.3;
  font-size: 22px;
  font-weight: 500;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    line-height: 1.3;
    font-size: 14px;
  }
`;
