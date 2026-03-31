const { Schema, model } = require("mongoose");
const { User } = require("../model/userSchema");
const { House } = require("./house.Schema");
const cartschema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: User },
  house_id: { type: Schema.Types.ObjectId, ref: House },
});

const Cart = model("cart", cartschema);
module.exports = { Cart };
