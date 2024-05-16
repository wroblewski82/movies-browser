import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  text-align: center;
  margin: 195px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: auto;
  }
`;

export const StyledHeader = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 43.2px;
  padding: 0 0 120px;
  margin: 0;
`;

export const StyledParagraph = styled.p`
  max-width: 426.53px;
  font-weight: 500;
  font-size: 22px;
  line-height: 28.6px;
  padding: 2px 0;
  text-align: center;
  margin: -76px auto 24px;
`;

export const StyledLink = styled.a`
  background-color: ${({ theme }) => theme.colors.cornflowerBlue};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 16px 24px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  line-height: 19px;
  cursor: pointer;
`;
