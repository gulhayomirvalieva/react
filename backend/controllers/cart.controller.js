const { Cart } = require("../model/cart.schema");

// ------------ getCart ------------
const getCart = async (req, res) => {
  try {
    const carts = await Cart.find({});
    res.json({
      success: true,
      message: "Barcha cart royxatga olingan",
      innerData: carts,
    });
  } catch (error) {
    console.error("Error fetching carts:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: cart ni olishda xatolik yuz berdi.",
    });
  }
};

// ------------ createCart ------------
const createCart = async (req, res) => {
  try {
    const { user_id, house_id } = req.body;

    const newCart = new Cart({
      user_id,
      house_id,
    });

    await newCart.save();

    return res.status(201).json({
      success: true,
      message: "Cart qoshildi",
      cart: newCart,
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: cart qoshishda xatolik yuz berdi.",
    });
  }
};

// ------------ updateCart ------------
const updateCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id, house_id } = req.body;

    const updateCart = await Cart.findByIdAndUpdate(
      id,
      { user_id, house_id },
      { new: true }
    );

    if (!updateCart) {
      return res.status(404).json({
        success: false,
        message: "Cart topilmadi",
      });
    }

    return res.json({
      success: true,
      message: "Cart muvaffaqiyatli yangilandi",
      cart: updateCart,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server xatosi",
      error: error.message,
    });
  }
};

// ------------ deleteCart ------------
const deleteCart = async (req, res) => {
  try {
    const cart_id = req.params.id;
    const deleteCart = await Cart.findByIdAndDelete(cart_id);

    if (!deleteCart) {
      return res.status(404).json({
        success: false,
        message: "Cart topilmadi",
      });
    }

    res.json({
      success: true,
      message: "Cart muvaffaqiyatli o'chirildi",
      cart: deleteCart,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server xatosi",
    });
  }
};

// ------------ getCartById ------------
const getCartById = async (req, res) => {
  try {
    const cart_id = req.params.id;
    const cart = await Cart.findById(cart_id).populate("user_id house_id");

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart ID topilmadi",
      });
    }

    res.json({
      success: true,
      message: "Cart topildi",
      cart,
    });
  } catch (error) {
    console.error("Xato:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: Cartni olishda muammo yuz berdi.",
    });
  }
};

module.exports = {
  getCart,
  createCart,
  updateCart,
  deleteCart,
  getCartById,
};
