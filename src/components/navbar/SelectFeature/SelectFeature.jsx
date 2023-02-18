import Select, { components } from "react-select";
import "./_selectedFeatures.css";

import todoList from "../../../images/icon-todo.svg";
import calendar from "../../../images/icon-calendar.svg";
import reminders from "../../../images/icon-reminders.svg";
import planning from "../../../images/icon-planning.svg";
import arrowUp from "../../../images/icon-arrow-up.svg";
import arrowDown from "../../../images/icon-arrow-down.svg";
import { useState } from "react";

const options = [
  { value: "todoList", label: "Todo List", icon: todoList },
  { value: "calendar", label: "Calendar", icon: calendar },
  { value: "reminders", label: "Reminders", icon: reminders },
  { value: "planning", label: "Planning", icon: planning },
];

export const SelectFeature = () => {
  const [isMenuOpen1, setIsMenuOpen1] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen1(!isMenuOpen1);
  };

  const arrowImage = isMenuOpen1 ? arrowUp : arrowDown;

  return (
    <Select
      id="feature-select"
      classNamePrefix="itemFeatures"
      options={options}
      placeholder="Features"
      formatOptionLabel={({ label, icon }) => (
        <div className="item-features">
          <img
            src={icon}
            alt={`${label} icon`}
            style={{ width: 20, marginRight: 10 }}
          />
          <div className="label">{label}</div>
        </div>
      )}
      isSearchable={false}
      styles={customStyles}
      menuIsOpen={isMenuOpen1}
      onMenuOpen={toggleMenu}
      onMenuClose={toggleMenu}
    />
  );
};

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
