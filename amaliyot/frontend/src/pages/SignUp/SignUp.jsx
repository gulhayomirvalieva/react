import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/register",
        {
          name: username,
          email,
          password,
        },
      );
      localStorage.setItem("token", response.data.token);
      window.location.reload();
    } catch (err) {
      setError(err.response?.data?.error || "Xato yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h1>Ro'yxatdan o'tish</h1>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Foydalanuvchi nomi"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
          {loading ? "Kutilmoqda..." : "Ro'yxatdan o'tish"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
