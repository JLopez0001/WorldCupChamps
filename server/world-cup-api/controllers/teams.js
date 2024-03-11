import Team from "../models/Team.js";

export const getTeams = async (request, response) => {
    try {
        const teams = await Team.find();
        response.json(teams);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: error.message });
    }
};

export const getTeam = async (request, response) => {
    try {
        const { id } = request.params;
        const team = await Team.findById(id)

        if (team) {
            return response.json(team);
        }

        response.status(404).json({ message: "Team not found" });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: error.message });
    }
};

export const createTeam = async (request, response) => {
    const team = new Team(request.body);
    await team.save();
    response.status(201).json(team);
};

export const updateTeam = async (request, response) => {
    try {
        const { id } = request.params;
        const team = await Team.findByIdandUpdate(id, request.body);
        response.status(201).json(team);
    }  catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const deleteTeam = async (request, response) => {
    try {
        const { id } = request.params;
        const deleted = await Team.findByIdAndDelete(id);

        if (deleted) {
            return response.status(200).send("Team deleted!");
        }

        throw new Error("Team not found!");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
      }
};