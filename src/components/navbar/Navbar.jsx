//C:\Program Files\PostgreSQL\15
import { useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import "./_navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { Navigation } from "./Navigation/Navigation";

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="container">
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
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      {showMobileMenu ? (
        <Navigation
          nameClass={`links ${
            showMobileMenu && windowSize.width < 960 ? "open" : ""
          }`}
        />
      ) : (
        <></>
      )}
    </header>
  );
};
