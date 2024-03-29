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
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      backgroundColor: "hsl(0, 0%, 98%)",
      width: "8rem",
      //border: "solid",
      "&:hover": {
        borderColor: "transparent",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 12,
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
    }),
  };

  return (
    <Select
      classNamePrefix="itemFeatures"
      options={options}
      placeholder="Features"
      formatOptionLabel={({ label, icon }) => (
        <div
          style={{
            display: "flex",
            flexFlow: 1,
          }}
          className="item-features"
        >
          <div className="label">{label}</div>

          <img
            src={icon}
            alt={`${label} icon`}
            style={{ width: 15, marginLeft: 22 }}
          />
        </div>
      )}
      isSearchable={false}
      styles={customStyles}
    />
  );
};
