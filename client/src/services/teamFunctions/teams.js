import api from "../configuration/apiConfig.js";

export const getTeams = async () => {
  try {
    const response = await api.get("/teams");
    return response.data;
  } catch (error) {
    console.error("Error Getting all Teams");
  }
};

export const getTeam = async (id) => {
  try {
    const response = await api.get(`/teams/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error Getting Your Team");
  }
};

export const deleteTeam = async (id) => {
  try {
    const response = await api.delete(`/teams/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error Deleting Your Team");
  }
};
