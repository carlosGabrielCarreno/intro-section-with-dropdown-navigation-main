import { useEffect, useState } from "react";
import { DropdownContext } from "./DropdownContext";

const DropdownProvider = ({ children }) => {
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

  return (
    <DropdownContext.Provider
      value={{
        showMobileMenu,
        setShowMobileMenu,
        windowSize,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

export { DropdownContext, DropdownProvider };
