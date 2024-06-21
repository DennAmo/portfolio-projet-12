import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <h1>
        <span>P</span>
        <span>o</span>
        <NavLink to="/logout" className="logout">
          <span className="e">r</span>
        </NavLink>
        <NavLink to="/login" className="login">
          <span>t</span>
        </NavLink>
        <span>f</span>
        <span>o</span>
        <span>l</span>
        <span>i</span>
        <span>o</span>
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
