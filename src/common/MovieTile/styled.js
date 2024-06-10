import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../assets/starIcon.svg";

export const StyledMovieTile = styled.section`
  display: grid;
  max-width: 324px;
  min-height: 650px;
  border-radius: 5px;
  padding: 16px;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px 0px #BAC7D580;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    max-width: 288px;
    min-height: 201px;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

export const Image = styled.img`
  width: 292px;
  height: 434px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 114px;
    height: 169px;
  }
`;

export const Description = styled.div`
  display: grid;
  align-items: start;
  grid-template-rows: 1fr 1fr 3fr 1fr;
  max-width: 292px;
  max-height: 270px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    display: flex;
    padding: 0;
    margin-top: -14px;
    gap: 4px;
    flex-direction: column;
    justify-content: top;
  }
`;

export const Title = styled.h3`
  font-weight: 500px;
  font-size: 22px;
  line-height: 1.3;
  margin: 16px 0 8px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 16px;
    margin: 16px 0 4px;
  }
`;

export const Year = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.waterloo};
  margin: 0 0 8px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 13px;
    line-height: 1.3;
    margin: 0 0 8px;
  }
`;

export const Genres = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  gap: 8px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    max-width: 130px;
    margin: 0 0 12px;
  }
`;

export const Genre = styled.li`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.mystic};
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.black};
  padding: 8px 16px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    padding: 4px 8px;
    font-size: 10px;
    line-height: 1.1;
  }
`;

export const VotesContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  bottom: 16px;
  margin-top: 39px;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    position: static;
    margin: 0;
  }
`;

export const StyledStarIcon = styled(StarIcon)`
  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 16px;
    height: 15.25px;
  }
`;

export const Mark = styled.em`
  font-weight: bold;
  line-height: 1.5;
  font-size: 16px;
  text-decoration: none;
  font-style: normal;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 13px;
    line-height: 1.3;
    white-space: nowrap;
  }
`;

export const VotesNumber = styled.b`
  font-weight: normal;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 13px;
    line-height: 1.3;
    white-space: nowrap;
  }
`;
