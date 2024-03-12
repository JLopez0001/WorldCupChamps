import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/nav/nav.css";

function Nav() {
  const getNavLinkClass = (isActive) => `link ${isActive ? "active-link" : ""}`;

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
            <NavLink
              to="/"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              <h1>The Elites</h1>
            </NavLink>
          </div>
          <div className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              About <span className="separator">|</span>
            </NavLink>
            <NavLink
              to="/teams"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              Home <span className="separator">|</span>
            </NavLink>
            <NavLink
              to="/create-team"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              Create
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
