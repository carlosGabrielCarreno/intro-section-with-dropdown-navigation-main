import { CompanySelected } from "../CompanySelected/CompanySelected";
import { SelectFeature } from "../SelectFeature/SelectFeature";
import "../_navbar.scss";
import "./_navigation.scss";
export const Navigation = ({ nameClass }) => {
  return (
    <>
      <nav className={nameClass}>
        <div>
          <div className="container-list-navigation">
            <SelectFeature />
            <CompanySelected />
            <div className="carrers">Carrers</div>
            <div className="about">About</div>
          </div>
          <div className="container-buttons">
            <button className="login">Login</button>
            <button className="register">Register</button>
          </div>
        </div>
      </nav>
    </>
  );
};
