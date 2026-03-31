import React, { useState, useEffect } from "react";
import { getAllGames, createGame, updateGame, deleteGame } from "../services/AdminService";
import "./AdminPanel.css";
import Navbar from "../components/Navbar";

const AdminPanel = () => {
  const [authorized, setAuthorized] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [message, setMessage] = useState("");

  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [form, setForm] = useState({ title: "", coverUrl: "", genre: "", rating: 0 });
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const ADMIN_CODE = "0100";

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (inputCode === ADMIN_CODE) {
      setAuthorized(true);
      fetchGames();
    } else {
      setMessage("❌ Kod noto‘g‘ri! Kirish mumkin emas.");
    }
  };

  const fetchGames = async () => {
    try {
      const res = await getAllGames();
      setGames(res.data);
      setFilteredGames(res.data);
    } catch (err) {
      console.error(err);
      setMessage("O'yinlarni olishda xatolik yuz berdi!");
    }
  };

  useEffect(() => {
    setFilteredGames(
      games.filter((g) => g.title.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, games]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) await updateGame(editingId, form);
      else await createGame(form);

      setForm({ title: "", coverUrl: "", genre: "", rating: 0 });
      setEditingId(null);
      fetchGames();
    } catch (err) {
      console.error(err);
      setMessage("O'yinni saqlashda xatolik yuz berdi!");
    }
  };

  const handleEdit = (game) => {
    setForm(game);
    setEditingId(game.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Rostan ham o‘chirilsinmi?")) return;
    try {
      await deleteGame(id);
      fetchGames();
    } catch (err) {
      console.error(err);
      setMessage("O'yinni o'chirishda xatolik yuz berdi!");
    }
  };

  if (!authorized) {
    return (
      <div className="admin-code-container">
        <div className="code-box">
          <h2>🔑 Admin panelga kirish uchun kodni kiriting:</h2>
          <form onSubmit={handleCodeSubmit}>
            <input
              type="password"
              placeholder="Admin kod"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              required
            />
            <button type="submit">Kirish</button>
          </form>
          {message && <p className="error">{message}</p>}
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="admin-panel">
        <h1>🎮 Admin Panel</h1>

        <div className="search-container">
          <input
            type="text"
            placeholder="O'yin nomi bo‘yicha qidirish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>


        <form onSubmit={handleSubmit} className="admin-form">
          <input
            type="text"
            placeholder="Game title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Cover URL"
            value={form.coverUrl}
            onChange={(e) => setForm({ ...form, coverUrl: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Genre"
            value={form.genre}
            onChange={(e) => setForm({ ...form, genre: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Rating"
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: e.target.value })}
            min="0"
            max="10"
          />
          <button type="submit">
            {editingId ? "✏️ Yangilash" : "➕ Qo‘shish"}
          </button>
        </form>

        {message && <p className="error">{message}</p>}

        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredGames.map((game) => (
              <tr key={game.id}>
                <td>{game.id}</td>
                <td>{game.title}</td>
                <td>{game.genre}</td>
                <td>{game.rating}</td>
                <td>
                  <button onClick={() => handleEdit(game)}>Edit</button>
                  <button onClick={() => handleDelete(game.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminPanel;
