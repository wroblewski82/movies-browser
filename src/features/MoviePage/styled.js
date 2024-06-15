import styled from "styled-components";

import { ReactComponent as StarIcon } from "../../assets/starIcon.svg";

export const PosterContainer = styled.div`
  width: 100%;
  display: inline-block;
  height: 770px;
  position: relative;

  background: linear-gradient(
      270deg,
      #000000 14.11%,
      rgba(0, 0, 0, 0.873268) 15.08%,
      rgba(0, 0, 0, 0.720529) 16.51%,
      rgba(0, 0, 0, 0.294577) 19.99%,
      rgba(0, 0, 0, 0.159921) 21.88%,
      rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
      90deg,
      #000000 13.6%,
      rgba(0, 0, 0, 0.984059) 14.58%,
      rgba(0, 0, 0, 0.967732) 15.44%,
      rgba(0, 0, 0, 0.865569) 16.3%,
      rgba(0, 0, 0, 0.230315) 22.87%,
      rgba(0, 0, 0, 0) 26.64%
    ),
    linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.689555) 4.66%,
      rgba(0, 0, 0, 0.439033) 9.34%,
      rgba(0, 0, 0, 0.20628) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
      189.44deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.106473) 63.17%,
      rgba(0, 0, 0, 0.235359) 68.85%,
      rgba(0, 0, 0, 0.492821) 78.08%,
      rgba(0, 0, 0, 0.740286) 85.86%,
      #000000 92.87%
    ),
    url(${({ backdrop }) => backdrop}) center center no-repeat;
`;

export const MovieMainData = styled.div`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  bottom: 56px;
  left: 276px;
`;

export const MovieTitle = styled.h2`
  font-size: 64px;
  font-weight: 600px;
  line-height: 1.2;
  margin: 0 0 24px;
`;

export const VotesContainer = styled.p`
  margin: 0 0 16px;
  display: flex;
  align-items: center;
  gap: 12px;
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
`;

export const StyledMoviePage = styled.section`
  padding-bottom: 8px;
  height: auto;
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
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    max-width: 288px;
    margin-left: 16px;
  }
`;

export const Article = styled.article`
  margin: 0 auto;
  max-width: 1368px;
  
  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 0;
    padding-left: 16px;
  }
`;
