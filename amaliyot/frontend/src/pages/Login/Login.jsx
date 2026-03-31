import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:5001/api/users";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const url = isLogin ? `${API_URL}/login` : `${API_URL}/register`;

      const body = isLogin
        ? { email, password }
        : { name: username, email, password };

      const response = await axios.post(url, body);

      localStorage.setItem("token", response.data.token);

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.error || "Xato yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>{isLogin ? "Kirish" : "Ro'yxatdan o'tish"}</h1>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Foydalanuvchi nomi"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading
              ? "Kutilmoqda..."
              : isLogin
                ? "Kirish"
                : "Ro'yxatdan o'tish"}
          </button>
        </form>

        <p>
          {isLogin ? "Akkauntingiz yo'qmi?" : "Akkauntingiz bormi?"}

          <button
            type="button"
            className="toggle-btn"
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
            }}
          >
            {isLogin ? "Ro'yxatdan o'tish" : "Kirish"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
