export const customStyles = {
  control: (provided: any) => ({
    ...provided,
    background: "white",
    borderRadius: "30px",
    display: "flex",
    position: "realetive",
    border: "0",
    boxShadow: "none",
  }),

  dropdownIndicator: (provided: any) => ({
    ...provided,
    position: "absolute",
    color: "#756c6c99",
    right: "20px",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),

  singleValue: (provided: any) => ({
    ...provided,
    margin: "0 auto",
    color: "#756c6c99",
    fontSize: "18px",
    fontWeight: "300",
    lineHeight: "26px",
    letterSpacing: "-0.3px",
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    margin: "0 auto",
    padding: "21px",
    position: "realitive",
  }),
  input: (provided: any) => ({
    ...provided,
    position: "absolute",
  }),
};
