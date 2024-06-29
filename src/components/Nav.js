import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>

        <NavLink to="/accueil" className="shop">
          <li className="mod">
            Accueil
          </li>
        </NavLink>

        <NavLink to="/services" className="services">
          <li className="mod">
            Services
          </li>
        </NavLink>

        <NavLink to="/aboutme" className="aboutme">
          <li className="mod">
            A Propos/Contact
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

        <a href="https://soundcloud.com/amo-globine" target="_blank" rel="noreferrer">
        <li className="mod">
            SoundCloud Music
        </li>
        </a>

      </ul>
    </nav>
  );
};

export default Nav;
