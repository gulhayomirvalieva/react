import axios from "axios";

const API_URL = "http://localhost:3000/api/favorites";

export const getFavorites = () => {
  return axios.get(API_URL, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const addFavorite = (gameId) => {
  return axios.post(
    API_URL,
    { gameId },
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
};

export const removeFavorite = (gameId) => {
  return axios.delete(`${API_URL}/${gameId}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
