import { StyledButton } from "./styles";
import { IButton } from "../../types/types";

const Button = ({ isDisabled }: IButton) => {
  return (
    <StyledButton disabled={isDisabled} type={"submit"}>
      Ohhhoooo 🍻
    </StyledButton>
  );
};

export default Button;
