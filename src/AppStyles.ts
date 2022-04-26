import styled from "styled-components";
import circles from "./assets/circles.png";

export const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1512px;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  margin: 10px auto;
  background-image: url(${circles});
  background-repeat: no-repeat;
  background-color: #eaf2f2;
`;
