const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");

// 🟢 Ro‘yxatdan o‘tish va login
router.post("/register", userController.register);
router.post("/login", userController.login);

// 🟢 Profilni olish (token orqali)
router.get("/profile", authMiddleware, userController.getProfile);

// 🟢 Profilni yangilash (token orqali)
router.put("/update/:id", authMiddleware, userController.updateProfile);

// 🟢 Profilni o‘chirish (token orqali)
router.delete("/delete", authMiddleware, userController.deleteUser);

module.exports = router;
