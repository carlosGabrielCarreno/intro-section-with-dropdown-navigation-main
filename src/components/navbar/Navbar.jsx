import './_navbar.scss';
import logo from '../../images/logo.svg';
import menu from '../../images/icon-menu.svg';
import { useState } from 'react';

export const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(true);

  const handleActiveBtn = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <header className="container">
      <img src={logo} alt="logo mark" />

      <div className="container-menu">
        <img
          className={`menu-item ${menuStatus ? 'active' : ''}`}
          src={menu}
          alt="menu"
          onClick={handleActiveBtn}
        />
        <div id="back_menu"></div>
        <nav className="nav">
          <ul>
            <select className="select-feacture" name="" id="">
              Feactures
            </select>
            <select className="select-company" name="" id="">
              Company
            </select>
            <p className="carrers">Carrers</p>
            <p className="about">About</p>
            <p className="mode">Mode</p>
            <button className="login">Login</button>
            <button className="register">Register</button>
          </ul>
        </nav>
      </div>
    </header>
  );
};
