import React from "react";
import Nav from "./Nav";
import MatrixText from "./MatrixText.js";

const Footer = () => {
  return (
    <>
      <footer>
        <h4>Navigation Rapide</h4>
        <Nav />
        <h5>Aubry Dennis © 2024</h5>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ESx_hy1n7HA"><MatrixText text=" me.escape(world);
world.execute(me);" />
        </a>
      </footer>
    </>
  );
};

export default Footer;
