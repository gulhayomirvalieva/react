const { Car } = require("../model/car.Schema");

const postCar = async (req, res) => {
  try {
    const {
      title,
      model,
      description,
      color,
      horsePower,
      carType,
      charging,
      weight,
      gasoline,
      yearMachine,
      price,
    } = req.body;

    const existingCar = await Car.findOne({ title });

    if (existingCar) {
      return res.status(400).json({
        success: false,
        message: "Bu nom bilan ro'yxatdan o'tgan foydalanuvchi mavjud.",
      });
    }

    const newCar = new Car({
      title,
      model,
      description,
      color,
      horsePower,
      carType,
      charging,
      weight,
      gasoline,
      yearMachine,
      price,
    });

    await newCar.save();

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
// ------------getCars-----------
const getCars = async (req, res) => {
  try {
    const cars = await Car.find({});
    res.json({
      success: true,
      message: "Barcha foydalanuvchilar royxatga olingan",
      innerData: cars,
    });
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(5000).json({
      success: false,
      message: "Server xatosi: Foydalanuvchilarni olishda xatolik yuz ber.",
    });
  }
};
//................getUserById..............
const getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id);

    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Bunday ID bilan mashina topilmadi.",
      });
    }

    res.json({
      success: true,
      message: "Mashina topildi.",
      innerData: car,
    });
  } catch (error) {
    console.error("Xato:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: Mashinani olishda muammo yuz berdi.",
    });
  }
};

//...................updateCar................
const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      model,
      description,
      color,
      horsePower,
      carType,
      charging,
      weight,
      gasoline,
      yearMachine,
      price,
    } = req.body;

    const updateCar = await Car.findByIdAndUpdate(
      id,
      {
        title,
        model,
        description,
        color,
        horsePower,
        carType,
        charging,
        weight,
        gasoline,
        yearMachine,
        price,
      },
      { new: true }
    );

    if (!updateCar) {
      return res.status(404).json({
        success: false,
        message: "Car not found!",
      });
    }

    return res.json({
      success: true,
      message: "Car updated successfully!",
      car: updateCar,
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
const deleteCar = async (req, res) => {
  try {
    const car_id = req.params.id;
    const deleteCar = await Car.findByIdAndDelete(car_id);

    if (!deleteCar) {
      return res.status(404).json({
        message: "Car not found!",
      });
    }
    res.json({ message: "Carr deleted successfully", deleteCar });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = {
  postCar,
  getCars,
  getCarById,
  updateCar,
  deleteCar,
};
