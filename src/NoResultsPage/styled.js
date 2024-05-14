import styled from "styled-components";
import { ReactComponent as NoResultsImage } from "../assets/noResultsImage.svg";

export const Container = styled.div`
  padding: 16px;
`;

export const StyledParagraph = styled.p`
  font-weight: 600;
  font-size: 36px;
  line-height: 43.2px;
  margin: 0 0 40px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 18.2px;
    margin: 0 0 8px;
  }
`;

export const IconContainer = styled.div`
  text-align: center;
`;

export const Image = styled(NoResultsImage)`
  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 246px;
    height: 196px;
  }
`;
