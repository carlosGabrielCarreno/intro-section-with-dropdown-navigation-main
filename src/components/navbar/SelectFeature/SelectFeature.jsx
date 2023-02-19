import Select from "react-select";
import "./_selectedFeatures.css";

import todoList from "../../../images/icon-todo.svg";
import calendar from "../../../images/icon-calendar.svg";
import reminders from "../../../images/icon-reminders.svg";
import planning from "../../../images/icon-planning.svg";

const options = [
  { value: "todoList", label: "Todo List", icon: todoList },
  { value: "calendar", label: "Calendar", icon: calendar },
  { value: "reminders", label: "Reminders", icon: reminders },
  { value: "planning", label: "Planning", icon: planning },
];

export const SelectFeature = () => {
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
            style={{ width: 8, marginRight: 2 }}
          />
          <div className="label">{label}</div>
        </div>
      )}
      isSearchable={false}
      styles={customStyles}
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
    fontSize: 10,
    margin: 0,
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
