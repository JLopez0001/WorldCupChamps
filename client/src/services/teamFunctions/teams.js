import api from "../configuration/apiConfig.js";

export const getTeams = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Error Getting all Teams");
  }
};
