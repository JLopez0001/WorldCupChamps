import React from "react";

function TeamForm({ teamData, handleChange, id, onSubmit }) {
  const formType = id !== null ? "Edit" : "Create";

  return (
    <div>
      <h1 className="form-title">{formType} Team</h1>
      <div>
        <form onSubmit={onSubmit}>
          <div className="form-container">
            <section className="form-section">
              <label className="form-label" htmlFor="country-name">
                Country Name:
              </label>
              <input
                id="country-name"
                type="text"
                name="winningNation"
                value={teamData.winningNation}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="country-img">
                Country Img:{" "}
              </label>
              <input
                id="country-img"
                type="text"
                name="nationImg"
                value={teamData.nationImg}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="world-cup-year">
                World Cup Year:{" "}
              </label>
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

              <label className="form-label" htmlFor="score">
                Score:{" "}
              </label>
              <input
                id="score"
                type="text"
                name="score"
                value={teamData.score}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="opponent">
                Opponent:{" "}
              </label>
              <input
                id="opponent"
                type="text"
                name="finalOpponent"
                value={teamData.finalOpponent}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="over-time">
                Overtime?{" "}
              </label>

              <select
                id="over-time"
                name="extraTime"
                value={teamData.extraTime}
                onChange={handleChange}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </section>

            <section className="form-section">
              <label className="form-label" htmlFor="penalties">
                Penalties?{" "}
              </label>
              <select
                id="penalties"
                name="wentToPenalties"
                value={teamData.wentToPenalties}
                onChange={handleChange}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>

              <label className="form-label" htmlFor="top-scorer">
                Top Scorer:{" "}
              </label>
              <input
                id="top-scorer"
                type="text"
                name="highestGoalScorer"
                value={teamData.highestGoalScorer}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="captain">
                Captain:{" "}
              </label>
              <input
                id="captain"
                type="text"
                name="captain"
                value={teamData.captain}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="captain-img">
                Captain Img:{" "}
              </label>
              <input
                id="captain-img"
                type="text"
                name="captainImg"
                value={teamData.captainImg}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="manager">
                Manager:{" "}
              </label>
              <input
                id="manager"
                type="text"
                name="manager"
                value={teamData.manager}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="players">
                Players:{" "}
              </label>
              <textarea
                id="players"
                rows={4}
                cols={40}
                name="players"
                value={teamData.players}
                onChange={handleChange}
              />
            </section>
          </div>
          <div className="form-button-container">
            <button className="form-info-button" type="submit">
              {formType} This Team
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TeamForm;
