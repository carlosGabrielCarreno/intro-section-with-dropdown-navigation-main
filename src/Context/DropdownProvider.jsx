import { useEffect, useState } from "react";
import { DropdownContext } from "./DropdownContext";

const DropdownProvider = ({ children }) => {
  const [isMenuOpen1, setIsMenuOpen1] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
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
  }, [windowSize]);

  useEffect(() => {
    if (windowSize.width >= 960) {
      setShowMobileMenu(false);
    }
  }, [windowSize]);

  return (
    <DropdownContext.Provider
      value={{
        showMobileMenu,
        setShowMobileMenu,
        windowSize,
        isMenuOpen1,
        setIsMenuOpen1,
        isMenuOpen2,
        setIsMenuOpen2,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

export { DropdownContext, DropdownProvider };
