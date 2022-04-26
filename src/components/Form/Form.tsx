import { ChangeEvent, FormEvent, useEffect } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";

import {
  StyledForm,
  StyledTitle,
  StyledText,
  StyledInputContainer,
  StyledTotal,
} from "./Styles";

import { IOption, ICount } from "../../types/types";

const Form = () => {
  const [count, setCount] = useState<ICount>({
    bill: "",
    persons: "",
    select: "10",
    total: 0,
    isDisabled: false,
  });
  const { bill, persons, select, total, isDisabled }: ICount = count;

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setCount({
      ...count,
      [name]: value,
    });
  };
  const handleSelect = (newValue: IOption | null): void => {
    if (newValue) {
      setCount({
        ...count,
        select: newValue.value,
      });
    }
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setCount({
      ...count,
      total:
        (+bill + (+bill / 100) * +select) / +persons,
    });
  };

  useEffect((): void => {
    setCount({
      ...count,
      isDisabled: !(bill && persons),
    });
  }, [count]);

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <StyledTitle>Welcome to App</StyledTitle>
      <StyledText>Let’s go calculate your tips</StyledText>
      <StyledInputContainer>
        <Input
          name={"bill"}
          handleInput={handleInput}
          value={bill}
        />
        <Input
          name={"persons"}
          handleInput={handleInput}
          value={persons}
        />
        <CustomSelect handleSelect={handleSelect} />
      </StyledInputContainer>
      <StyledTotal>
        Total: <span>{total.toFixed(2)}</span>$
      </StyledTotal>
      <Button isDisabled={isDisabled} />
    </StyledForm>
  );
};

export default Form;
