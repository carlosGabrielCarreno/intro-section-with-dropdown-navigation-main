import { useState } from 'react';
import { BurguerButton } from '../BurguerButton';
import logo from '../../images/logo.svg';
import todoList from '../../images/icon-todo.svg';
import calendar from '../../images/icon-calendar.svg';
import reminders from '../../images/icon-reminders.svg';
import planning from '../../images/icon-planning.svg';
import './_navbar.scss';

export const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  const handleActiveBtn = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <header className="container">
      <img src={logo} alt="logo mark" />

      <nav className={`links ${menuStatus ? 'active' : ''}`}>
        <ul>
          <select className="select select-feacture">
            <option value="Feactures">
              <span>
                <img src={todoList} alt="" /> Feactures
              </span>
            </option>
            <option value="Calendar">
              <img src={calendar} /> <span>Calendar</span>
            </option>
            <option value="Reminders">
              <img src={reminders} /> <span>Reminders</span>
            </option>
            <option value="Planning">
              <img src={planning} /> <span>Planning</span>
            </option>
          </select>
          <select className="select select-company">
            <option value="Company">Company</option>
          </select>
          <a className="carrers">Carrers</a>
          <a className="about">About</a>
        </ul>
        <div className="container-buttons">
          {/* <button className="mode">Mode</button> */}
          <button className="login">Login</button>
          <button className="register">Register</button>
        </div>
      </nav>
      <div className="burguer">
        <BurguerButton clicked={menuStatus} handleActiveBtn={handleActiveBtn} />
      </div>
      <div className={`initial ${menuStatus ? ' active' : ''}`}></div>
    </header>
  );
};
