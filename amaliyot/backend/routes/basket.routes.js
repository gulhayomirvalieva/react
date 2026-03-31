import express from "express";
import User from "../models/User.js";

const router = express.Router();

// 🟢 Basketni olish
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("basket");

    if (!user) {
      return res.status(404).json({ error: "User topilmadi" });
    }

    res.json(user.basket);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// 🟢 Savatchaga qo'shish
router.post("/add", async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User topilmadi" });
    }

    user.basket.push(productId);

    await user.save();

    res.json({ message: "Product basketga qo'shildi", basket: user.basket });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// 🟢 Savatchadan o'chirish
router.delete("/remove", async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const user = await User.findById(userId);

    user.basket = user.basket.filter((item) => item.toString() !== productId);

    await user.save();

    res.json({ message: "Product basketdan o'chirildi" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
