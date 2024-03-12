import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getTeam, deleteTeam } from "../../services/teamFunctions/teams.js";
import "../../styles/team/teamDetail.css";

function TeamDetail() {
  let { id } = useParams();
  let nav = useNavigate();

  const [teamData, setTeamData] = useState({});

  const fetchTeam = async () => {
    const oneTeam = await getTeam(id);
    setTeamData(oneTeam);
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  const handleDelete = async () => {
    await deleteTeam(id);
    nav("/teams");
  };

  return (
    <div>
      <header className="team-header">
        <h1 className="team-text">{`${teamData.worldCupYear} World Cup Winner:`}</h1>
        <h1 className="team-text">{`${teamData.winningNation}!!`}</h1>
      </header>
      <main
        style={{
          background:
            'url("https://5.imimg.com/data5/SELLER/Default/2020/12/CB/IM/VN/119439370/football-turf.jpg") center/cover no-repeat ',
        }}
      >
        <img src={teamData.nationImg} alt={teamData.winningNation} />
        <div>
          <aside className="individual-container">
            <h2 className="title">The Team</h2>
            <h3>{`${teamData.winningNation}'s Captain: ${teamData.captain}`}</h3>
            <img src={teamData.captainImg} alt={teamData.captain} />
            <h3>Manager: {teamData.manager}</h3>
            <h3>{teamData.winningNation}'s Players: </h3>
            <p>
              {teamData.players?.map((player) => (
                <span>{player}, </span>
              ))}
            </p>
          </aside>
        </div>
        <div>
          <aside className="individual-container">
            <h2 className="title">The Match</h2>
            <h3 className="title">
              {teamData.winningNation} vs {teamData.finalOpponent}
            </h3>
            <div className="stats">
              <p>
                Score: <span>{teamData.score}</span>
              </p>
              <p>
                Overtime:{" "}
                <span>{teamData.extraTime === true ? "Yes" : "No"}</span>
              </p>
              <p>
                To Penalties:
                <span>{teamData.wentToPenalties === true ? "Yes" : "No"}</span>
              </p>
              <p>
                Highest Goal Scorer:
                <span>{teamData.highestGoalScorer}</span>
              </p>
            </div>
            <img
              src="https://sporttechie-prod.s3.amazonaws.com/2016/11/RS267962_20140713_PE3_8452.jpg"
              alt="World Cup"
            />
          </aside>
        </div>
        <Link to={`/teams/${teamData._id}/edit`}>
          <button>Edit This Team</button>
        </Link>

        <button onClick={handleDelete}>Delete Team</button>
      </main>
    </div>
  );
}

export default TeamDetail;
