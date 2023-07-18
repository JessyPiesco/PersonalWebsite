import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
const brandRef = useRef(null);

useEffect(() => {
  const brandElement = brandRef.current;
  const text = brandElement.textContent;
  const speed = 100;

  let i = 0;
  brandElement.textContent = "";

  const typeWriter = () => {
    if (i < text.length) {
      brandElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  };

  typeWriter();
}, []);


return (
  <div className="navbar">
    <h1 className="navbar-brand">
      <span className="typewriter" ref={brandRef}>
        Your Developer, Jessy Piesco
      </span>
    </h1>

      <div className="navbar-nav flex-row">
      <NavLink
          className="nav-link"
          activeClassName="active"
          exact to={"/"}
        >
          HOME
        </NavLink>

        <NavLink
          className="nav-link"
          activeClassName="active"
          to={"/projects"}
        >
          PORTFOLIO
        </NavLink>

      </div>
    </div>
  );
};

export default Navbar;
