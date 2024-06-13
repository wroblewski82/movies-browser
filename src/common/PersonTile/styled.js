import styled from "styled-components";

export const StyledPersonTile = styled.section`
  width: 208px;
  height: 380px;
  padding: 10px 15px 22px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    padding: 8px 8px 15px;
    border-radius: 5px;
    max-width: 136px;
    height: 245px;
    box-shadow: 0 4px 12px #BAC7D5;
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