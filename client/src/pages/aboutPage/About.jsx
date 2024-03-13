import React from "react";
import { Link } from "react-router-dom";
import "../../styles/about/about.css";

function About() {
  return (
    <div className="about-container">
      <div className="intro">
        <div className="intro-overlay">
          <header className="header-container">
            <h4 className="intro-title">Welcome To The Elites</h4>
            <article>
              <p>
                Step into the world of soccer where World Cup history and
                fantasy collide!
              </p>
              <p>
                But why stop at watching? Here, you craft your ultimate dream
                team, blending past and present champions to create soccer
                magic.
              </p>
              <p>
                Ready for a whirlwind of goals, glory, and your own soccer
                legacy?
              </p>
            </article>
          </header>
        </div>
      </div>

      <main>
        <div className="aside-container">
          <img
            className="about-img"
            src="https://i.pinimg.com/originals/2c/ba/97/2cba975d53779a3b668024d5f4250c88.jpg"
            alt="person-kicking"
          />
          <aside className="aside-content">
            <div className="about-content">
              <p> Come Find All The World Cup Winners! </p>
              <p>
                Unlock the stories behind the triumphs of the World Cup and
                discover how your team won.
              </p>

              <p>
                With in-depth details on matches, strategies, and star players.
                Click to journey through the legacy and get closer to the action
                than ever before.
              </p>
              <Link to="/teams">
                <button className="info-button">See Winners</button>
              </Link>
            </div>
          </aside>
        </div>

        <div className="aside-container-2">
          <img
            className="about-img line-up-img"
            src="https://tse3.mm.bing.net/th?id=OIP.5wqB0guIUFKH23LXtBZMAgHaE8&pid=Api&P=0&h=220"
            alt="line-up"
          />

          <aside className="aside-content-2">
            <div className="about-content">
              <p> Create your fantasy dream team here for the next cup! </p>
              <p>
                Mix and match the greats from different eras or create new
                players and, strategist your lineup.
              </p>

              <p>It’s time to lead your team to glory. Click below.</p>

              <Link to="/create-team">
                <button className="info-button">Create A Team</button>
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default About;
