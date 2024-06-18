import styled from "styled-components";

import { ReactComponent as StarIcon } from "../../assets/starIcon.svg";

export const PosterContainer = styled.div`
  width: 100%;
  display: inline-block;
  height: 770px;
  position: relative;
  background-image: linear-gradient(
      270deg,
      rgb(0, 0, 0) 14.11%,
      rgba(0, 0, 0, 0.875) 15.08%,
      rgba(0, 0, 0, 0.72) 16.51%,
      rgba(0, 0, 0, 0.294) 19.99%,
      rgba(0, 0, 0, 0.16) 21.88%,
      rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
      90deg,
      rgb(0, 0, 0) 13.6%,
      rgba(0, 0, 0, 0.984) 14.58%,
      rgba(0, 0, 0, 0.97) 15.44%,
      rgba(0, 0, 0, 0.867) 16.3%,
      rgba(0, 0, 0, 0.23) 22.87%,
      rgba(0, 0, 0, 0) 26.64%
    ),
    linear-gradient(
      rgb(0, 0, 0) 0%,
      rgba(0, 0, 0, 0.69) 4.66%,
      rgba(0, 0, 0, 0.44) 9.34%,
      rgba(0, 0, 0, 0.208) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
      189.44deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.106) 63.17%,
      rgba(0, 0, 0, 0.235) 68.85%,
      rgba(0, 0, 0, 0.494) 78.08%,
      rgba(0, 0, 0, 0.74) 85.86%,
      rgb(0, 0, 0) 92.87%
    ),
    url(${({ backdrop }) => backdrop});
  background-size: 1920px 770px, 1920px 770px, 1920px 770px, 1920px 770px,
    1368px 769px;
  background-repeat: no-repeat;
  background-position: top center;

  @media (max-width: 1039.98px) {
    background-size: 1040px 400px, 1040px 400px, 1040px 400px, 1040px 400px,
      776px 400px;
    background-position: center top;
    height: 400px;
  }

  @media (max-width: 1199px) {
    background-size: 1366px 525px, 1366px 525px, 1366px 525px, 1366px 525px,
      1024px 525px;
    height: 525px;
  }
`;

export const MovieMainData = styled.div`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  bottom: 15%;
  left: 10%;
`;

export const MovieTitle = styled.h2`
  font-size: 44px;
  font-weight: 600px;
  line-height: 1.2;
  margin: 0 0 24px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 0 0 4px;
  }
`;

export const VotesContainer = styled.p`
  margin: 0 0 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 40px;
  height: 38.12px;
`;

export const MarkContainer = styled.div`
  display: flex;
  align-items: top;
`;

export const Mark = styled.em`
  font-weight: 500;
  font-size: 30px;
  line-height: 0.8;
  text-decoration: none;
  font-style: normal;
`;

export const MaxMark = styled.b`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  margin-left: 5px;
  align-self: flex-end;
`;

export const VotesNumber = styled.b`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  position: absolute;
  top: 56px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    position: static;
    align-self: center;
  }
`;

export const StyledMoviePage = styled.section`
  padding-bottom: 8px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const TileContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 12px #bac7d5;
  max-width: 1368px;
  margin: 64px auto;
  padding: 40px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    max-width: 288px;
    padding: 16px;
    margin: 16px auto;
  }
`;

export const Article = styled.article`
  margin: 64px auto;
  max-width: 1368px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 0;
    padding-left: 16px;
  }
`;