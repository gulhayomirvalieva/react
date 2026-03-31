import axios from "axios";

const API_URL = "http://localhost:3000/api/library";

export const getLibrary = () => {
  return axios.get(API_URL, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

export const addToLibrary = (gameId) => {
  return axios.post(
    API_URL,
    { gameId },
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  );
};

export const removeFromLibrary = (gameId) => {
  return axios.delete(`${API_URL}/${gameId}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
