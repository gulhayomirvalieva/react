const { User } = require("../model/userSchema.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const postRegister = async (req, res) => {
  try {
    const {
      username,
      firstname,
      lastname,
      birthday,
      jinsi,
      address,
      phone,
      password,
      house_id,
      product_id,
      car_id,
    } = req.body;
    const existingUser = await User.findOne({ username });

    console.log(existingUser);

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Bu nom bilan ro'yxatdan o'tgan foydalanuvchi mavjud.",
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        firstname,
        lastname,
        birthday,
        jinsi,
        address,
        phone,
        password: hashedPassword,
        house_id,
        product_id,
        car_id,
      });
      await newUser.save();
      return res.status(201).json({
        success: true,
        message: "Ro'yxatdan o'tish muaffaqiyatli yakunlandi.",
      });
    }
  } catch (error) {
    console.error("Xato:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi: Ro'yxatdan o'tish jarayonida xato yuz berdi.",
    });
  }
};

//................getUsers..........................
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json({
      success: true,
      message: "Barcha foydalanuvchilar royxatga olingan",
      innerData: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(5000).json({
      success: false,
      message: "Server xatosi: Foydalanuvchilarni olishda xatolik yuz ber.",
    });
  }
};

//................getUserById..............
const getUserById = async (req, res) => {
  try {
    const user_id = req.params.id;
    const user = await User.findById(user_id).populate(
      "house_id product_id car_id"
    );
    if (!user) {
      res.status(404).json({
        success: false,
        message: " User not found",
      });
    }
    res.json({
      success: true,
      message: "User found",
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
//...................updateUser................
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, lastname, phone, address } = req.body;

    const updateUser = await User.findByIdAndUpdate(
      id,
      { username, lastname, phone, address },
      { new: true }
    );

    if (!updateUser) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    return res.json({
      success: true,
      message: "User updated successfully!",
      user: updateUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
// ..............delete user ...................
const deleteUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    const deleteUser = await User.findByIdAndDelete(user_id);

    if (!deleteUser) {
      return res.status(404).json({
        message: "User not found!",
      });
    }
    res.json({ message: "User deleted successfully", deleteUser });
  } catch (error) {
    console.error(error);
    res.status(5000).json({ message: "Internal Server Error" });
  }
};
// ------------Login------------------
const postLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    console.log(user);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Username is invalid!",
      });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Username or password is invalid",
      });
    }
    const token = jwt.sign({ username: user.username }, "secret");
    return res.json({
      message: "Token",
      token: token,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error: An error occurred during the login proces",
    });
  }
};

module.exports = {
  postRegister,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  postLogin,
};
