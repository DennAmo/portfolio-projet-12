import React from "react";
import { NavLink } from "react-router-dom";




const Header = () => {
    return (
        <header>
            <h1>
            <NavLink to="/accueil" className="login"> 
            <span className="d">D</span>
            </NavLink>
                <span className="m">E</span>
                <NavLink to="/logout" className="logout"><span className="e">M</span>
                </NavLink>
                <NavLink to="/login" className="login">
                <span id="o">O</span>
                </NavLink>
            </h1>
        </header>
    )

   
}

export default Header