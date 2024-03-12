import { Link } from "react-router-dom";
import "../../styles/team/teams.css";
function Team({ team }) {
  return (
    <div className="team-container">
      <h2 className="world-cup-year">{team.worldCupYear}</h2>
      <div className="team">
        <h3 className="winning-nation">{team.winningNation}</h3>
        <img
          className="nation-flag"
          src={team.nationImg}
          alt={`${team.winningNation} flag`}
        />
      </div>
      <div className="stats">
        <h2 className="match-stats">Match Stats</h2>
        <p>
          Opponent: <span>{team.finalOpponent}</span>
        </p>
        <p>
          Score: <span>{team.score}</span>
        </p>
        <p>
          Went to Penalties: <span>{team.wentToPenalties ? "Yes" : "No"}</span>
        </p>
      </div>
      <Link to={`/teams/${team._id}`}>
        <button className="more-info-button">More Info</button>
      </Link>
    </div>
  );
}

export default Team;
