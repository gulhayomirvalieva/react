import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post("http://localhost:3000/api/auth/loginUser", {
        email,
        password,
      });

      const token = res.data.token;
      const user = res.data.user;

      if (token && user) {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", user.id);

        // Admin bo‘lsa kod tekshirish
        if (user.isAdmin) {
          if (adminCode.trim() === "") {
            setMessage("Admin sifatida kirish uchun kodni kiriting ❗");
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            return;
          }

          if (adminCode === "0100") {
            localStorage.setItem("isAdmin", "true");
            navigate("/admin");
          } else {
            setMessage("Admin kod noto‘g‘ri ❌");
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
          }
        } else {
          // Oddiy foydalanuvchi
          localStorage.setItem("isAdmin", "false");
          navigate("/");
        }
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Email yoki parol noto‘g‘ri ❌");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <form className="login-box" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Admin kod (faqat adminlar uchun)"
            value={adminCode}
            onChange={(e) => setAdminCode(e.target.value)}
          />

          <button type="submit">Login</button>

          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </>
  );
};

export default Login;
