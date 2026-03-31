const { House } = require("../model/house.Schema");

const postHouse = async (req, res) => {
  try {
    const { region, city, house_number, street, family_members, location } =
      req.body;

    const existingHouse = await House.findOne({ region });

    if (existingHouse) {
      return res.status(400).json({
        success: false,
        message: "Bu nom bilan ro'yxatdan o'tgan foydalanuvchi mavjud.",
      });
    }

    const newHouse = new House({
      region,
      city,
      house_number,
      street,
      family_members,
      location,
    });

    await newHouse.save();

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
// ................getHouse..........................
const getHouse = async (req, res) => {
  try {
    const houses = await House.find({});
    res.json({
      success: true,
      message: "Barcha foydalanuvchilar royxatga olingan",
      innerData: houses,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(5000).json({
      success: false,
      message: "Server xatosi: Foydalanuvchilarni olishda xatolik yuz ber.",
    });
  }
};

// //................getHouseById..............
const getHouseById = async (req, res) => {
  try {
    const house_id = req.params.id;
    const house = await House.findById(house_id);
    if (!house) {
      res.status(404).json({
        success: false,
        message: " House not found",
      });
    }
    res.json({
      success: true,
      message: "House found",
      house,
    });
  } catch (err) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// //...................updatehouse................
const updateHouseById = async (req, res) => {
  try {
    const { id } = req.params;
    const { region, city, house_number, street, family_members, location } =
      req.body;

    const updateHouse = await House.findByIdAndUpdate(
      id,
      { region, city, house_number, street, family_members, location },
      { new: true }
    );

    if (!updateHouse) {
      return res.status(404).json({
        success: false,
        message: "House not found!",
      });
    }

    return res.json({
      success: true,
      message: "User updated successfully!",
      house: updateHouse,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
// // ..............delete house ...................
const deleteHouseById = async (req, res) => {
  try {
    const house_id = req.params.id;
    const deleteHouse = await Car.findByIdAndDelete(house_id);

    if (!deleteHouse) {
      return res.status(404).json({
        message: "House not found!",
      });
    }
    res.json({ message: " House deleted successfully", deleteHouse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  postHouse,
  getHouse,
  getHouseById,
  updateHouseById,
  deleteHouseById,
};
