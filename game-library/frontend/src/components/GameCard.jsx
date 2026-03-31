import React from "react";
import "./GameCard.css"
const GameCard = ({ game, onAddToLibrary, onAddFavorite, onRemove }) => {
  return (
    <div className="game-card">
      <img src={game.coverUrl} alt={game.title} />
      <h3>{game.title}</h3>
      <p>Genre: {game.genre}</p>
      <p>Rating: {game.rating}</p>

      {onAddToLibrary && !game.inLibrary && (
        <button onClick={onAddToLibrary}>➕ Libraryga qo‘shish</button>
      )}
      {onAddFavorite && !game.isFavorite && (
        <button onClick={onAddFavorite}>❤️ Favorite</button>
      )}
      {onRemove && <button onClick={onRemove}>🗑️ O‘chirish</button>}
    </div>
  );
};

export default GameCard;
