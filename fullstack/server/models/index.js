const Sequelize = require("sequelize");
const sequelize = require("../configs/database");

const User = require("./user.model")(sequelize, Sequelize);
const Card = require("./card.model")(sequelize, Sequelize);
const Like = require("./like.model")(sequelize, Sequelize);

User.associate(sequelize.models);
Card.associate(sequelize.models);
Like.associate(sequelize.models);

module.exports = { User, Card, Like };