import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 21px;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.3px;
  text-align: center;
  color: #756c6c99;
  border-radius: 30px;
  border: none;

  &::-webkit-inner-spin-button {
    display: none;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.3px;
    text-align: center;
    color: #756c6c99;
  }
`;
