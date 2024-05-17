import styled from "styled-components";
import { ReactComponent as LoadingIcon } from "../assets/loadingIcon.svg";

export const Container = styled.div`
  padding: 16px;
`;

export const Header = styled.h1`
  font-size: 36px;
  line-height: 43.2px;
  margin: 0 0 120px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 18.2px;
    margin: 0 0 24px;
  }
`;

export const IconContainer = styled.div`
  text-align: center;
`;

export const Icon = styled(LoadingIcon)`
  animation: 2s all linear infinite;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    height: 35px;
  }

  @keyframes all {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
