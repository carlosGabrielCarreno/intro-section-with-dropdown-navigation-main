import { useContext } from "react";
import logo from "../../images/logo.svg";
import menuOpen from "../../images/icon-menu.svg";
import closeMenu from "../../images/icon-close-menu.svg";
import "./_navbar.scss";
import { Navigation } from "./Navigation/Navigation";
import { DropdownContext } from "../../Context/DropdownContext";
import { getOpenClass } from "../../utils/getOpenClass";

export const Navbar = () => {
  const { showMobileMenu, setShowMobileMenu, windowSize } =
    useContext(DropdownContext);
  return (
    <header
      id="header"
      className={`container-header ${getOpenClass(
        showMobileMenu && windowSize.width < 960
      )}`}
    >
      <div className="wrapper">
        <img src={logo} className="logotipo" alt="logo mark" />
        {windowSize.width > 960 ? (
          <Navigation nameClass={"links-desktop"} />
        ) : (
          <></>
        )}
        <div
          className="mobileIcon"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <img src={closeMenu} /> : <img src={menuOpen} />}
        </div>
      </div>
      {showMobileMenu ? (
        <Navigation
          nameClass={`links ${getOpenClass(
            showMobileMenu && windowSize.width < 960
          )}`}
        />
      ) : (
        <></>
      )}
    </header>
  );
};
