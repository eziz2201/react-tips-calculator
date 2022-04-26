import Select from "react-select";
import { customStyles } from "./styles";
import { ISelect, IOption } from "../../types/types";

const CustomSelect = ({ handleSelect }: ISelect) => {
  const options: IOption[] = [
    { value: "10", label: "10%" },
    { value: "15", label: "15%" },
    { value: "20", label: "20%" },
  ];

  return (
    <Select
      styles={customStyles}
      options={options}
      defaultValue={options[0]}
      onChange={handleSelect}
      isSearchable={false}
    />
  );
};

export default CustomSelect;
