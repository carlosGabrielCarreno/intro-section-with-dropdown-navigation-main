import todoList from "../../../images/icon-todo.svg";
import calendar from "../../../images/icon-calendar.svg";
import reminders from "../../../images/icon-reminders.svg";
import planning from "../../../images/icon-planning.svg";
import "../_navbar.scss";

export const Navigation = ({ nameClass }) => {
  return (
    <nav className={nameClass}>
      <ul>
        <div className="calendar">Calendar</div>
        <div className="reminders">Reminders</div>
        <div className="planning">Planning</div>
        <div className="company">Company</div>
        <div className="carrers">Carrers</div>
        <div className="about">About</div>
        <div className="container-buttons">
          <button className="login">Login</button>
          <button className="register">Register</button>
        </div>
      </ul>
    </nav>
  );
};
