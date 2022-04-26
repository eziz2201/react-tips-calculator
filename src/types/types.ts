import { ChangeEvent } from "react";

export interface IOption {
  value: string | number;
  label: string;
}
export interface ISelect {
  handleSelect: (newValue: IOption | null) => void;
}
export interface ICount {
  bill: string;
  persons: string;
  select: string | number;
  total: number;
  isDisabled: boolean;
}
export interface IButton {
  isDisabled: boolean;
}
export interface IInput {
  name: string;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
