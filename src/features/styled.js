import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledMain = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px 40px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    padding-bottom: 32px;
  }
`;

export const StyledHeader = styled.h1`
  font-size: 36px;
  line-height: 1.2;
  margin-top: 56px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 18px;
    line-height: 1.2;
  }

  ${({ $paragraph }) =>
    $paragraph &&
    css`
      font-weight: 600;
      margin: 64px 0 24px;
    `}

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-size: 20px;
    margin: 24px 0 16px;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  grid-gap: 24px;

  ${({ $people }) =>
    $people &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
    `}

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    grid-gap: 16px 0;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:link {
    color: ${({ theme }) => theme.colors.black};
  }

  &:visited {
    color: ${({ theme }) => theme.colors.black};
  }
`;
