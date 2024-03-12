import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTeam } from "../../services/teamFunctions/teams.js";
import TeamForm from "../../components/team/TeamForm.jsx";

function TeamCreate() {
  const navigate = useNavigate();

  const [teamData, setTeamData] = useState({
    winningNation: "",
    nationImg: "",
    finalOpponent: "",
    captain: "",
    captainImg: "",
    manager: "",
    worldCupYear: "",
    score: "",
    highestGoalScorer: "",
    extraTime: "",
    wentToPenalties: "",
    players: [],
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setTeamData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTeam(teamData);
    console.log("After");
    navigate("/teams");
  };

  return (
    <div>
      <TeamForm
        id={null}
        onSubmit={handleSubmit}
        handleChange={handleChange}
        teamData={teamData}
      />
    </div>
  );
}

export default TeamCreate;
