import React from "react";
import Nav from "./Nav";
import MatrixText from "./MatrixText.js";

const Header = () => {
  return (
    <header>
    <h3>Portfolio</h3>
    <MatrixText text=" me.escape(world);
       world.execute(me);" />
      <Nav />
    </header>
  );
};

export default Header;
