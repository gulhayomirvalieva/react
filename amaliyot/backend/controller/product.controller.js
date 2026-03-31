import Product from "../models/Product.js";

// 🟢 Create product
export const createProduct = async (req, res) => {
  try {
    const { title, price, description, image } = req.body;

    const product = await Product.create({
      title,
      price,
      description,
      image,
    });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 Get one product
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product topilmadi" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 Delete product
export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: { id: req.params.id },
    });

    res.json({ message: "Product o'chirildi" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
