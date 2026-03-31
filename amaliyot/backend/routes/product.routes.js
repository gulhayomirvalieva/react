import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// CREATE PRODUCT
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);

    await product.save();

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error creating product" });
  }
});

export default router;
