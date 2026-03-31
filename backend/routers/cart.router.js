const express = require("express");
const carts = express.Router();

const {
  getCart,
  createCart,
  updateCart,
  deleteCart,
  getCartById,
} = require("../controllers/cart.controller");
carts.get("/getCart", getCart);
carts.post("/createCart", createCart);
carts.put("/updateCart/:id", updateCart);
carts.delete("/deleteCart/:id", deleteCart);
carts.get("/getCartById/:id", getCartById);

module.exports = { carts };
