import React from "react";

function TeamForm({ teamData, handleChange, id, onSubmit }) {
  const formType = id !== null ? "Edit" : "Create";

  return (
    <div>
      <h1>{formType} Team</h1>
      <form className="form-container" onSubmit={onSubmit}>
        <div>
          <label htmlFor="country-name">Country Name: </label>
          <input
            id="country-name"
            type="text"
            name="winningNation"
            value={teamData.winningNation}
            onChange={handleChange}
          />
          <label htmlFor="country-img">Country Img: </label>
          <input
            id="country-img"
            type="text"
            name="nationImg"
            value={teamData.nationImg}
            onChange={handleChange}
          />
          <label htmlFor="world-cup-year">World Cup Year: </label>
          <select
            id="world-cup-year"
            name="worldCupYear"
            onChange={handleChange}
          >
            <option value={teamData.worldCupYear}>
              {teamData.worldCupYear}
            </option>
            <option value="2026">2026</option>
            <option value="2030">2030</option>
            <option value="2034">2034</option>
            <option value="2038">2038</option>
            <option value="2042">2042</option>
            <option value="2046">2046</option>
            <option value="2050">2050</option>
          </select>

          <label htmlFor="score">Score: </label>
          <input
            id="score"
            type="text"
            name="score"
            value={teamData.score}
            onChange={handleChange}
          />
          <label htmlFor="opponent">Opponent: </label>
          <input
            id="opponent"
            type="text"
            name="finalOpponent"
            value={teamData.finalOpponent}
            onChange={handleChange}
          />
          <label htmlFor="over-time">Overtime? </label>

          <select
            id="over-time"
            name="extraTime"
            value={teamData.extraTime}
            onChange={handleChange}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>

        <div>
          <label htmlFor="penalties">Penalties? </label>
          <select
            id="penalties"
            name="wentToPenalties"
            value={teamData.wentToPenalties}
            onChange={handleChange}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label htmlFor="top-scorer">Top Scorer: </label>
          <input
            id="top-scorer"
            type="text"
            name="highestGoalScorer"
            value={teamData.highestGoalScorer}
            onChange={handleChange}
          />
          <label htmlFor="captain">Captain: </label>
          <input
            id="captain"
            type="text"
            name="captain"
            value={teamData.captain}
            onChange={handleChange}
          />
          <label htmlFor="captain-img">Captain Img: </label>
          <input
            id="captain-img"
            type="text"
            name="captainImg"
            value={teamData.captainImg}
            onChange={handleChange}
          />
          <label htmlFor="manager">Manager: </label>
          <input
            id="manager"
            type="text"
            name="manager"
            value={teamData.manager}
            onChange={handleChange}
          />
          <label htmlFor="players">Players: </label>
          <textarea
            id="players"
            rows={4}
            cols={40}
            name="players"
            value={teamData.players}
            onChange={handleChange}
          />
        </div>

        <button type="submit">{formType} This Team</button>
      </form>
    </div>
  );
}

export default TeamForm;
