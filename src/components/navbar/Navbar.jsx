import { useState } from 'react';
import { BurguerButton } from '../BurguerButton';
import logo from '../../images/logo.svg';
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
          <select className="select-feacture">
            <option value="Feactures">Feactures</option>
          </select>
          <select className="select-company">
            <option value="Company">Company</option>
          </select>
          <a className="carrers">Carrers</a>
          <a className="about">About</a>
          <button className="mode">Mode</button>
          <button className="login">Login</button>
          <button className="register">Register</button>
        </ul>
      </nav>
      <div className="burguer">
        <BurguerButton clicked={menuStatus} handleActiveBtn={handleActiveBtn} />
      </div>
      <div className={`initial ${menuStatus ? ' active' : ''}`}></div>
    </header>
  );
};
