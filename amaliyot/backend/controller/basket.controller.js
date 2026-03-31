import Basket from "../models/Basket.js";

// 🟢 Basketni olish
export const getBasket = async (req, res) => {
  try {
    const { userId } = req.params;

    const basket = await Basket.findAll({
      where: { user_id: userId },
    });

    res.json(basket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 Add to cart
export const addToBasket = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const item = await Basket.create({
      user_id: userId,
      product_id: productId,
      quantity: 1,
    });

    res.json({
      message: "Product basketga qo'shildi",
      item,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 Remove from cart
export const removeFromBasket = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    await Basket.destroy({
      where: {
        user_id: userId,
        product_id: productId,
      },
    });

    res.json({
      message: "Product basketdan o'chirildi",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
