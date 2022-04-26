import { StyledInput } from "./styles";
import { IInput } from "../../types/types";

const Input = ({ name, handleInput, value }: IInput) => {
  return (
    <StyledInput
      type="number"
      name={name}
      placeholder={`Enter ${name}`}
      onChange={handleInput}
      value={value}
    />
  );
};

export default Input;
