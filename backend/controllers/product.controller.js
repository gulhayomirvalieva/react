const { Product } = require("../model/product.Schema");

const postProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      isActive,
      sellerName,
      sellerLastName,
      sellerphone,
      count,
    } = req.body;
    const existingProduct = await Product.findOne({ title });

    if (existingProduct) {
      return res.status(400).json({
        success: false,
        message: "Bu nom bilan ro'yxatdan o'tgan foydalanuvchi mavjud.",
      });
    }
    const newProduct = new Product({
      title,
      description,
      price,
      isActive,
      sellerName,
      sellerLastName,
      sellerphone,
      count,
    });
    await newProduct.save();

    return res.status(201).json({
      success: true,
      message: "Ro'yxatdan o'tish muvaffaqiyatli yakunlandi.",
    });
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Ro'yxatdan o'tish jarayonida xato yuz berdi.",
    });
  }
};
// -------------getProducts---------------
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({
      success: true,
      message: "hello Product",
      innerData: products,
    });
  } catch (error) {
    console.error("Errror fetching users:", error);
    res.status(5000).json({
      success: false,
      message: "Server xatosi: foydalanuvchilarni olishda xatolik yuz berdi.",
    });
  }
};
// -------getProductById----------

const getProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.json({
      success: true,
      message: "Product found",
      product,
    });
  } catch (err) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
//------------updateProduct------------
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      price,
      isActive,
      sellerName,
      sellerLastName,
      sellerphone,
      count,
    } = req.body;
    const updateProduct = await Product.findByIdAndUpdate(
      id,
      {
        title,
        description,
        price,
        isActive,
        sellerName,
        sellerLastName,
        sellerphone,
        count,
      },
      { new: true }
    );
    if (!updateProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    return res.json({
      success: true,
      message: "Product updated succesfully",
      product: updateProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
//-----------deleteProduct--------------
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deleteProduct = await Product.findByIdAndDelete(productId);
    if (!deleteProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.json({
      message: "Product deleted succefully",
      deleteProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(5000).json({
      message: "Internal Server Error",
    });
  }
};
module.exports = {
  postProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
