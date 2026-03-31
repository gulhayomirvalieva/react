import React, { useEffect, useState } from "react";
import { getAllGames } from "../services/GameService";
import { addToLibrary } from "../services/LibraryService";
import { addFavorite } from "../services/FavoriteService";
import GameCard from "./GameCard";
import "./GamesList.css";

const GamesList = ({ searchQuery }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllGames()
      .then((res) => {
        setGames(res.data.map((g) => ({ ...g, inLibrary: false, isFavorite: false })));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Games fetch error:", err);
        setLoading(false);
      });
  }, []);

  const addToLibraryHandler = async (gameId) => {
    try {
      await addToLibrary(gameId);
      setGames((prev) =>
        prev.map((g) => (g.id === gameId ? { ...g, inLibrary: true } : g))
      );
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Server error");
    }
  };

  const addFavoriteHandler = async (gameId) => {
    try {
      await addFavorite(gameId);
      setGames((prev) =>
        prev.map((g) => (g.id === gameId ? { ...g, isFavorite: true } : g))
      );
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Server error");
    }
  };

  if (loading) return <p>⏳ Yuklanmoqda...</p>;

  // 🔹 Search query bilan filter
  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="games-grid">
      {filteredGames.length ? (
        filteredGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onAddToLibrary={() => addToLibraryHandler(game.id)}
            onAddFavorite={() => addFavoriteHandler(game.id)}
          />
        ))
      ) : (
        <p>Hech qanday o‘yin topilmadi</p>
      )}
    </div>
  );
};

export default GamesList;
