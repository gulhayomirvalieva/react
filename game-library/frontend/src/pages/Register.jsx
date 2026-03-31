import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Navbar from "../components/Navbar";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post("http://localhost:3000/api/auth/registerUser", {
        ...form,
        isAdmin: false,
      });

      if (res.data.user && res.data.user.id) {
        setMessage("Ro‘yxatdan o‘tildi ✅ Login sahifasiga yo‘naltirilmoqda...");
        setTimeout(() => navigate("/login"), 1500);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Xatolik yuz berdi!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        <form className="register-box" onSubmit={handleSubmit}>
          <h2>Register</h2>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>

          {message && <p>{message}</p>}
        </form>
      </div>
    </>
  );
};

export default Register;
