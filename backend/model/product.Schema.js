const { Schema, model } = require("mongoose");
const ProductSchema = new Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  isActive: { type: Boolean },
  sellerName: { type: String },
  sellerLastName: { type: String },
  sellerphone: { type: String },
  count: { type: Number },
});
const Product = model("product", ProductSchema);
module.exports = { Product };
