import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Basket = sequelize.define("Basket", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

export default Basket;
