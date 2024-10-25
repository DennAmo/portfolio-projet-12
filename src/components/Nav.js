import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (

    <nav>
      <ul>
        <NavLink to="/home" className="animated-button1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>

          <li className="mod">
            Home
          </li>
        </NavLink>


        <NavLink to="/services" className="animated-button2">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <li className="mod">
            Projets
          </li>
        </NavLink>


        <NavLink to="/aboutme" className="animated-button3">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <li className="mod">
            Contact
          </li>
        </NavLink>
      </ul>
    </nav>

  );
};

export default Nav;
