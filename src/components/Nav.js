import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

    return (
   
        <nav>
            <ul>
            <NavLink to="/shop" className="shop"><li class="mod">Redbubble Shop<span></span></li></NavLink>
                <li class="mod"><a  href="https://www.nexusmods.com/skyrimspecialedition/users/132498663?tab=user+files" target="_blank" rel="noreferrer">Skyrim Modspace</a><span></span></li>
                <li class="mod"><a  href="https://github.com/DennAmo" target="_blank" rel="noreferrer">GitHub CodeSpace</a><span></span></li>
            </ul>
        </nav>
  
    )

}

export default Nav