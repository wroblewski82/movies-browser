import styled from "styled-components";

export const StyledPersonTile = styled.section`
  display: grid;
  grid-template-rows: 4fr 1fr;
  width: 100%;
  height: 100%;
  padding: 16px 16px 0;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    padding: 8px;
    border-radius: 5px;
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;

export const PersonName = styled.h3`
  line-height: 1.3;
  font-size: 22px;
  font-weight: 500;
  margin: 12px auto 0;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    line-height: 1.3;
    font-size: 14px;
  }
`;

export const Role = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.waterloo};
  margin: 8px auto 16px;
`;
