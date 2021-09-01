import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar: React.FC<{}> = () => {
  return (
    <nav className="bg-white p-4">
      <ul className="flex justify-center m-auto space-x-4">
        <li>
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" exact>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active" exact>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
