import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 45px;
  max-width: 456px;
`;

export const StyledTitle = styled.h1`
  font-size: 40px;
  font-weight: 400;
  line-height: 58px;
  text-align: center;
  color: #000000;
  letter-spacing: -0.3px;
  @media (max-width: 744px) {
    font-size: 24px;
    line-height: 35px;
  }
`;

export const StyledText = styled.p`
  font-size: 32px;
  font-weight: 400;
  line-height: 37.5px;
  text-align: center;
  color: #756c6c91;
  letter-spacing: -0.3px;
  @media (max-width: 744px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const StyledInputContainer = styled.div`
  display: grid;
  grid-row-gap: 33px;
  @media (max-width: 744px) {
    grid-row-gap: 17px;
    width: 100%;
  }
`;

export const StyledTotal = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 35px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #000000;
  @media (max-width: 414px) {
    font-size: 18px;
    line-height: 26px;
  }
`;
