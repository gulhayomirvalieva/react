const { Model, DataTypes } = require("sequelize");

class Game extends Model { }

module.exports = (sequelize) => {
  Game.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      coverUrl: { type: DataTypes.STRING, allowNull: false },
      genre: { type: DataTypes.STRING, allowNull: false },
      rating: { type: DataTypes.FLOAT, defaultValue: 0 },
    },
    {
      sequelize,
      modelName: "Game",
      timestamps: true,
    }
  );
  return Game;
};
