const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Game = require("./game.model")(sequelize, Sequelize.DataTypes);
const Favorite = require("./favorite.model")(sequelize, Sequelize.DataTypes);
const Library = require("./library.model")(sequelize, Sequelize.DataTypes);
const User = require("./User.model")(sequelize, Sequelize.DataTypes);

// 🔗 Bog‘lanishlar
Favorite.belongsTo(Game, { foreignKey: "gameId", onDelete: "CASCADE" });
Library.belongsTo(Game, { foreignKey: "gameId", onDelete: "CASCADE" });
Favorite.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });
Library.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(Favorite, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(Library, { foreignKey: "userId", onDelete: "CASCADE" });

module.exports = { sequelize, Game, Favorite, Library, User };
