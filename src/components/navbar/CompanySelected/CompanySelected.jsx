import Select from "react-select";

const options = [
  { value: "history", label: "History" },
  { value: "ourTeam", label: "Our Team" },
  { value: "blog", label: "blog" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    "&:hover": {
      borderColor: "transparent",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    fontSize: 12,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: () => ({
    display: "none",
  }),
};
export const CompanySelected = () => {
  return (
    <Select
      id="feature-select"
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
