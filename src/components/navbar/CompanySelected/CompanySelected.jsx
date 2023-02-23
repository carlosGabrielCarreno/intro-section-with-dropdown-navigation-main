import Select from "react-select";

const options = [
  { value: "history", label: "History" },
  { value: "ourTeam", label: "Our Team" },
  { value: "blog", label: "blog" },
];

export const CompanySelected = () => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      width: "8rem",
      backgroundColor: "hsl(0, 0%, 98%)",
      "&:hover": {
        borderColor: "transparent",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      fontSize: 14,
      margin: 0,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transition: "transform 0.3s ease",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
      color: "hsl(0, 0%, 41%)",
      "&:hover": {
        color: "hsl(0, 0%, 8%)",
      },
    }),
  };

  return (
    <Select
      classNamePrefix="itemFeatures"
      options={options}
      placeholder="Company"
      formatOptionLabel={({ label }) => (
        <div className="item-features">
          <div className="label">{label}</div>
        </div>
      )}
      isSearchable={false}
      styles={customStyles}
    />
  );
};
