module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define("Favorite", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Favorite.associate = (models) => {
    Favorite.belongsTo(models.User, { foreignKey: "userId" });
    Favorite.belongsTo(models.Game, { foreignKey: "gameId" });
  };

  return Favorite;
};
