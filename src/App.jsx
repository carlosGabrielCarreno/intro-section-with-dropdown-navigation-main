import { useContext } from "react";
import { Footer, Main, Navbar, Sidebar } from "./components";
import { getOpenClass } from "./utils/getOpenClass";
import { DropdownContext } from "./Context/DropdownProvider";
import "./app.scss";

function App() {
  const { showMobileMenu, setShowMobileMenu, windowSize } =
    useContext(DropdownContext);

  return (
    <div
      className={`app  ${getOpenClass(
        showMobileMenu && windowSize.width < 960
      )}`}
    >
      <Navbar />
      <div className="grid-container">
        <Sidebar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
