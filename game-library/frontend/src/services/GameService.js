import axios from "axios";
const API_URL = "http://localhost:3000/api/games";

export const getAllGames = (token) =>
    axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });
