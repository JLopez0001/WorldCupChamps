import React from "react";
import { Link } from "react-router-dom";
import "../../styles/about/about.css";

function About() {
  return (
    <div className="about-container">
      <div
        className="intro"
        style={{
          background:
            'url("https://tse3.mm.bing.net/th?id=OIP.LOxpqlpVz15r9mN5HEoXxAHaD_&pid=Api&P=0&h=220") center/cover no-repeat ',
        }}
      >
        <h4 className="intro-title">Welcome To The Elites</h4>
        <article>
          <p>
            Step into the world of soccer where World Cup history and fantasy
            collide!
          </p>
          <p>
            Dive into the victories, meet the legends, and relish every
            game-changing play that led to glory. But why stop at watching?
            Here, you craft your ultimate dream team, blending past and present
            champions to create soccer magic.
          </p>
          <p>
            Ready for a whirlwind of goals, glory, and your own soccer legacy?
          </p>
        </article>
      </div>

      <div className="aside-container">
        <img
          className="kicking-img"
          src="https://i.pinimg.com/originals/2c/ba/97/2cba975d53779a3b668024d5f4250c88.jpg"
          alt="person-kicking"
        />
        <aside className="aside-content">
          <p> Come Find All The World Cup Winners! </p>
          <p>
            Unlock the stories behind the triumphs of the World Cup and discover
            how your team won.
          </p>

          <p>
            With in-depth details on matches, strategies, and star players.
            Click to journey through the legacy and get closer to the action
            than ever before.
          </p>
          <Link to="/teams">
            <button>See Winners</button>
          </Link>
        </aside>
      </div>

      <div>
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.5wqB0guIUFKH23LXtBZMAgHaE8&pid=Api&P=0&h=220"
          alt="line-up"
        />

        <aside className="aside-content-2">
          <p> Create your fantasy dream team here for the next cup! </p>
          <p>
            Mix and match the greats from different eras or create new players
            and, strategist your lineup.
          </p>

          <p>It’s time to lead your team to glory. Click below.</p>

          <Link to="/create-team">
            <button>Create A Team</button>
          </Link>
        </aside>
      </div>
    </div>
  );
}

export default About;
