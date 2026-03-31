import axios from "axios";

const API_URL = "http://localhost:3000/api/admin";

export const getAllGames = () => axios.get(`${API_URL}/games`);
export const createGame = (gameData) => axios.post(`${API_URL}/games`, gameData);
export const updateGame = (id, gameData) => axios.put(`${API_URL}/games/${id}`, gameData);
export const deleteGame = (id) => axios.delete(`${API_URL}/games/${id}`);
