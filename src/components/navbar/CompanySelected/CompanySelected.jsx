import Select from "react-select";

import todoList from "../../../images/icon-todo.svg";
import calendar from "../../../images/icon-calendar.svg";
import reminders from "../../../images/icon-reminders.svg";
import planning from "../../../images/icon-planning.svg";
import arrowUp from "../../../images/icon-arrow-up.svg";
import arrowDown from "../../../images/icon-arrow-down.svg";
import { useState } from "react";

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
  dropdownIndicator: (provided, state) => ({
    ...provided,
    backgroundImage: `url(${arrowDown})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: 0,
    width: 20,
    height: 20,
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    transition: "transform 0.2s ease",
  }),
};
export const CompanySelected = () => {
  const [isMenuOpenTwo, setIsMenuOpenTwo] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpenTwo(!isMenuOpenTwo);
  };

  const arrowImage = isMenuOpenTwo ? arrowUp : arrowDown;

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
      menuIsOpen={isMenuOpenTwo}
      onMenuOpen={toggleMenu}
      onMenuClose={toggleMenu}
    />
  );
};
