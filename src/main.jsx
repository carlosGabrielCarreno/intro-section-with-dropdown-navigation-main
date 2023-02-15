import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DropdownProvider } from "./Context/DropdownProvider";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <DropdownProvider>
    <App />
  </DropdownProvider>
  //</React.StrictMode>
);
