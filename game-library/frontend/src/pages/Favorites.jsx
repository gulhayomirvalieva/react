import React, { useEffect, useState } from "react";
import { getFavorites, removeFavorite } from "../services/FavoriteService";
import GameCard from "../components/GameCard";
import Navbar from "../components/Navbar";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    try {
      const res = await getFavorites();
      setFavorites(res.data.map((item) => ({ ...item.Game })));
    } catch (err) {
      console.error("Favorites fetch error:", err);
    }
  };

  const removeHandler = async (gameId) => {
    try {
      await removeFavorite(gameId);
      fetchFavorites();
    } catch (err) {
      console.error("Remove favorite error:", err);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <>
      <Navbar />
      <div className="games-grid">
        {favorites.length ? (
          favorites.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onRemove={() => removeHandler(game.id)}
            />
          ))
        ) : (
          <p>Favorites bo‘sh</p>
        )}
      </div>
    </>
  );
};

export default Favorites;
