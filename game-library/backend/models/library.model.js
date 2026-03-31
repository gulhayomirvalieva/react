module.exports = (sequelize, DataTypes) => {
  const Library = sequelize.define("Library", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Library.associate = (models) => {
    Library.belongsTo(models.Game, { foreignKey: "gameId", as: "Game" });
  };

  return Library;
};
