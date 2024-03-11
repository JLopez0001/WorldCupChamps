import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/nav/nav.css";

function Nav() {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="main-nav-links">
            <img
              className="soccerball"
              src="http://www.sweetclipart.com/multisite/sweetclipart/files/soccer_ball_football_futbol_1.png"
              alt="soccerball"
            />
            <NavLink to="/">
              <h1>The Elites</h1>
            </NavLink>
          </div>
          <div className="nav-links">
            <NavLink>About |</NavLink>
            <NavLink>Home |</NavLink>
            <NavLink>Create</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
