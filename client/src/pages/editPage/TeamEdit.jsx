import React, { useEffect, useState } from "react";
import TeamForm from "../../components/team/TeamForm.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { getTeam, editTeam } from "../../services/teamFunctions/teams.js";

function TeamEdit() {
  const { id } = useParams();
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

  const fetchTeam = async () => {
    const oneTeam = await getTeam(id);
    setTeamData(oneTeam);
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setTeamData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editTeam(id, teamData);
    navigate(`/teams/${id}`);
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <div>
      <TeamForm
        teamData={teamData}
        id={id}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default TeamEdit;
