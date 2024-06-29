import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
    <h4>
        Po
        <NavLink to="/logout" className="logout">
        r
        </NavLink>
        <NavLink to="/login" className="login">
        t
        </NavLink>
        folio
        </h4>
      <Nav />
    </header>
  );
};

export default Header;
