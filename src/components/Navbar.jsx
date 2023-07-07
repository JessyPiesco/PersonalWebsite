import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-brand">Your Developer, Jessy Piesco!</h1>
      <div className="navbar-nav flex-row">
      <NavLink
          className="nav-link"
          activeClassName="active"
          exact to={"/"}
        >
          About Me
        </NavLink>

        <NavLink
          className="nav-link"
          activeClassName="active"
          to={"/projects"}
        >
          Portfolio
        </NavLink>

      </div>
    </div>
  );
};

export default Navbar;
