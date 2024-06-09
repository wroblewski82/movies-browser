import styled from "styled-components";

export const StyledPersonTile = styled.section`
  max-width: 208px;
  height: 380px;
  margin: 24px;
  padding: 10px 15px 22px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 16px;
    padding: 8px 8px 15px;
    border-radius: 5px;
    max-width: 136px;
    min-height: 245px;
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 177px;
  height: 264px;
  margin: 0 0 12px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 120px;
    height: 178px;
  }
`;

export const ImagePlaceholder = styled.div`
  max-width: 177px;
  height: 264px;
`;

export const PersonName = styled.h3`
  line-height: 1.3;
  font-size: 22px;
  font-weight: 500px;
  margin: 0 0 22px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    line-height: 1.3;
    font-size: 14px;
  }
`;
