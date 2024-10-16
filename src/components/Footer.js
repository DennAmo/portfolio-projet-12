import React from "react";
import { NavLink

 } from "react-router-dom";
const Footer = () => {
  return (
      <footer>
    <nav>
      <ul>
      <h4>Navigation Rapide</h4>
        <NavLink to="/home" className="index">
          <li className="mod">
            Home
          </li>
        </NavLink>

        <NavLink to="/services" className="services">
          <li className="mod">
            Projets
          </li>
        </NavLink>

        <NavLink to="/aboutme" className="aboutmeBTN">
          <li className="mod">
            Contact
          </li>
        </NavLink>

        <NavLink to="/shop" className="shop">
          <li className="mod">
            Redbubble Shop
          </li>
        </NavLink>

        <a href="https://github.com/DennAmo" target="_blank" rel="noreferrer">
          <li className="mod">
            GitHub CodeSpace
          </li>
        </a>

        <a href="https://www.youtube.com/@AmoGlobine/videos" target="_blank" rel="noreferrer">
          <li className="mod">
            Youtube Channel
          </li>
        </a>
        <h5>Aubry Dennis © 2024</h5>
      </ul>
    </nav>
      </footer>
  );
};

export default Footer;
