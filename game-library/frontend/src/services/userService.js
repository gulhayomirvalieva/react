import axios from "axios";

const API_URL = "http://localhost:3000/api/users";

// Token konfiguratsiyasi
const getTokenConfig = () => {
    const token = localStorage.getItem("token");
    return {
        headers: { Authorization: `Bearer ${token}` },
    };
};

// 🟢 Register
export const registerUser = async (data) => {
    const res = await axios.post(`${API_URL}/register`, data);
    if (res.data.user?.id) localStorage.setItem("userId", res.data.user.id);
    return res.data;
};

// 🟢 Login
export const loginUser = async (data) => {
    const res = await axios.post(`${API_URL}/login`, data);
    if (res.data.user?.id) localStorage.setItem("userId", res.data.user.id);
    return res.data;
};

// 🟢 Profilni olish
export const getProfile = async () => {
    const res = await axios.get(`${API_URL}/profile`, getTokenConfig());
    return res.data;
};

// 🟢 Profilni yangilash
export const updateProfile = async (userId, data) => {
    const res = await axios.put(`${API_URL}/update/${userId}`, data, getTokenConfig());
    return res.data;
};


// 🟢 Foydalanuvchini o‘chirish
export const deleteUser = async () => {
    const res = await axios.delete(`${API_URL}/delete`, getTokenConfig());
    return res.data;
};
