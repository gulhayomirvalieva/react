import User from "../models/User.js";

// 🟢 Register
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json(user);
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// 🟢 Login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email va parol kiritilishi kerak" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Noto‘g‘ri email yoki parol" });
    }

    res.json(user);
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// 🟢 Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 Get one user
export const getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "User topilmadi" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 Delete user
export const deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.json({ message: "User o'chirildi" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
