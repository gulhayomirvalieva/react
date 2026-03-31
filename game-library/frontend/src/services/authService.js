import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

export const registerUser = async (userData) => {
    return axios.post(`${API_URL}/registerUser`, userData);
};

export const loginUser = async (userData) => {
    return axios.post(`${API_URL}/loginUser`, userData);
};
