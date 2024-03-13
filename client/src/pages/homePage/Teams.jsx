import { useState, useEffect } from "react";
import { getTeams } from "../../services/teamFunctions/teams.js";
import Team from "../../components/team/Team.jsx";
import "../../styles/home/home.css";

function Teams() {
  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    const allTeams = await getTeams();
    setTeams(allTeams);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div>
      <header className="team-header">
        <h1>Relive the Glory: Witness the Legends of the World Cup!</h1>
      </header>
      <img
        className="world-cup-winner"
        src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-12/221218-argentina-world-cup-trophy-jm-1353-bd9669.jpg"
        alt="world-cup-winner"
      />
      <h2 className="title">Winners By Year</h2>
      <div className="content-container">
        {teams.map((team) => (
          <Team team={team} key={team._id} />
        ))}
      </div>
    </div>
  );
}

export default Teams;
