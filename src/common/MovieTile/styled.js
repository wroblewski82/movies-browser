import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as StarIcon } from "../../assets/starIcon.svg";

export const StyledSection = styled.section`
  ${({ $main }) =>
    $main &&
    css`
      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 324px;
        min-height: 400px;
        max-height: 650px;
        background-color: ${({ theme }) => theme.colors.white};
        margin: 0 auto;
        gap: 16px;
        padding: 16px;
      }
    `}
`;

export const StyledMovieTile = styled.div`
  display: grid;
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
    position: relative;
  }

  ${({ $main }) =>
    $main &&
    css`
      max-width: 1368px;
      grid-template-columns: 1fr 2fr;
      margin: 64px auto;
      padding: 8px 20px;
      gap: 30px;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        margin: 0;
        background-color: transparent;
      }
    `}
`;

export const Image = styled.img`
  width: 292px;
  height: 434px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 114px;
    height: 169px;
  }

  ${({ $main }) =>
    $main &&
    css`
      margin: auto;
    `}

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 0;
  }
`;

export const DataContainer = styled.div`
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

  ${({ $main }) =>
    $main &&
    css`
      padding: 64px 0;
      justify-items: top;
    `}

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    display: block;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;

export const Title = styled.h3`
  margin-top: 16px;
  font-weight: 500;
  font-size: 22px;
  line-height: 28.6px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 16px;
    line-height: 20.8px;
  }

  ${({ $main }) =>
    $main &&
    css`
      font-weight: 600;
      font-size: 36px;
      line-height: 43.2px;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        font-size: 16px;
        font-weight: 500;
        line-height: 20.8px;
      }
    `}
`;

export const Year = styled.p`
  margin-top: -18px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin-top: 16px;
    font-size: 13px;
    line-height: 16.9px;
  }

  ${({ $main }) =>
    $main &&
    css`
      @media (min-width: ${({ theme }) => theme.media.mobile}px) {
        display: none;
      }
    `}
`;

export const Container = styled.p`
  margin: 0 0 16px;
`;

export const AdditionalDataName = styled.span`
  ${({ $main }) =>
    $main &&
    css`
      font-size: 22px;
      line-height: 21.6px;
      color: ${({ theme }) => theme.colors.stormGray};

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        display: none;
      }
    `}
`;

export const AdditionalData = styled.span`
  ${({ $main }) =>
    $main &&
    css`
      font-size: 22px;
      line-height: 21.6px;
      font-weight: 400;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        font-size: 12px;
        line-height: 18.6px;
        font-weight: 400;
      }
    `}
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
    margin-top: 12px;
  }

  ${({ $main }) =>
    $main &&
    css`
      font-weight: 500;
      line-height: 28.6px;
      font-size: 22px;
    `}
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

  ${({ $main }) =>
    $main &&
    css`
      font-weight: 500;
      line-height: 28.6px;
      font-size: 22px;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        font-weight: bold;
      }
    `}
`;

export const MaxMark = styled.b`
  display: none;
  font-size: 14px;
  line-height: 16.8px;

  ${({ $main }) =>
    $main &&
    css`
      display: block;

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        display: none;
      }
    `};
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

  ${({ $main }) =>
    $main &&
    css`
      ${({ theme }) => theme.colors.black};
    `}
`;

export const Description = styled.p`
  ${({ $main }) =>
    $main &&
    css`
      font-size: 24px;
      font-weight: 400;
      line-height: 32px;
      text-align: justify;
      color: ${({ theme }) => theme.colors.black};

      @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        display: none;
      }
    `}
`;

export const Description2 = styled.p`
  ${({ $main }) =>
    $main &&
    css`
      color: ${({ theme }) => theme.colors.black};
      margin: 0 auto;
      font-size: 14px;
      font-weight: 400;
      line-height: 22.4px;
      max-width: 288px;
      padding: 16px 18px;
      text-align: justify;

      @media (min-width: ${({ theme }) => theme.media.mobile}px) {
        display: none;
      }
    `}
`;
