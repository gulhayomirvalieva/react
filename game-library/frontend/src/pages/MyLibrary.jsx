import React, { useEffect, useState } from "react";
import { getLibrary, removeFromLibrary } from "../services/LibraryService";
import GameCard from "../components/GameCard";
import Navbar from "../components/Navbar";

const MyLibrary = () => {
  const [library, setLibrary] = useState([]);

  const fetchLibrary = async () => {
    try {
      const res = await getLibrary();
      setLibrary(res.data.map((item) => ({ ...item.Game })));
    } catch (err) {
      console.error("Library fetch error:", err);
    }
  };

  const removeHandler = async (gameId) => {
    try {
      await removeFromLibrary(gameId);
      fetchLibrary();
    } catch (err) {
      console.error("Remove library error:", err);
    }
  };

  useEffect(() => {
    fetchLibrary();
  }, []);

  return (
    <>
      <Navbar />
      <div className="games-grid">
        {library.length ? (
          library.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onRemove={() => removeHandler(game.id)}
            />
          ))
        ) : (
          <p>Library bo‘sh</p>
        )}
      </div>
    </>
  );
};

export default MyLibrary;
