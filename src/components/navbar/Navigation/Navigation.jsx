import { CompanySelected } from "../CompanySelected/CompanySelected";
import { SelectFeature } from "../SelectFeature/SelectFeature";
import "../_navbar.scss";

export const Navigation = ({ nameClass }) => {
  return (
    <nav className={nameClass}>
      <ul>
        <SelectFeature />
        <CompanySelected />
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
