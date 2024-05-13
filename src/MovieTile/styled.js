import styled from "styled-components";
import { ReactComponent as StarIcon } from "../assets/starIcon.svg";

export const StyledMovieTile = styled.div`
  display: grid;
  margin: 24px;
  max-width: 324px;
  min-height: 650px;
  border-radius: 5px;
  padding: 16px;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    max-width: 288px;
    min-height: 201px;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin: 24px auto;
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
`;

export const Decsription = styled.div`
  display: grid;
  grid-template-columns: 1fr;

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
  margin-top: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.titleDesktop}px;
  font-size: ${({ theme }) => theme.fontSizes.titleDesktop}px;
  line-height: ${({ theme }) => theme.lineHeights.titleDesktop}px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 16px;
    line-height: 20.8px;
  }
`;

export const Year = styled.p`
  margin-top: -18px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 13px;
    line-height: 16.9px;
  }
`;

export const Genres = styled.ul`
  display: flex;
  max-width: 308px;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  margin: -4px 0 0;
  padding: 0;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    max-width: 130px;
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
    line-height: 11px;
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
  line-height: 24px;
  font-size: 16px;
  text-decoration: none;
  font-style: normal;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 13px;
    line-height: 16.9px;
    white-space: nowrap;
  }
`;

export const VotesNumber = styled.b`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 13px;
    line-height: 16.9px;
    white-space: nowrap;
  }
`;
