import mongoose from "mongoose";

const Schema = mongoose.Schema

let TeamSchema = new Schema({
    "winningNation": { type: String },
    "nationImg": { type: String },
    "finalOpponent": { type: String },
    "captain": { type: String },
    "captainImg": { type: String },
    "manager": { type: String },
    "worldCupYear": { type: String },
    "score": { type: String },
    "highestGoalScorer": { type: String },
    "extraTime": { type: Boolean },
    "wentToPenalties": { type: Boolean },
    "players": [{ type: String }]
})

export default mongoose.model("teams", TeamSchema)