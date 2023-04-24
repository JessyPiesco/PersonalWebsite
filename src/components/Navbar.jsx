import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <h1 className="navbar-brand">Your Developer, Jessy Piesco!</h1>
      <div className="navbar-nav flex-row">
        <NavLink className="nav-link" to="/projects">
          Portfolio
        </NavLink>
        <NavLink className="nav-link" to="/">
          About me
        </NavLink>

      </div>
    </nav>
  );
};

export default Navbar;
