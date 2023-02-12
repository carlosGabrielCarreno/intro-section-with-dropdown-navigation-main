import Select from "react-select";
import "./_selectedFeatures.scss";

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

export const SelectFeature = () => (
  <Select
    className="container-selected-features select-no-outline"
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
  />
);
