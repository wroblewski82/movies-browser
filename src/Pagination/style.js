import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 100px;
`;

export const Button = styled.button`
  color: rebeccapurple;
`;

export const PageCounter = styled.div`
  margin: 0 24px 0 16px;
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 16px;
  line-height: 150%;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 10px;
    line-height: 24px;
    margin: 0 8px 0 8px;
  }
`;
