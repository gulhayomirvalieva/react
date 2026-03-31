const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const favoriteController = require("../controller/favoriteController");


/**
 * @swagger
 * tags:
 *   name: Favorites
 *   description: Foydalanuvchi sevimli o'yinlari
 */

router.get("/", authMiddleware, favoriteController.getFavorites);
router.post("/", authMiddleware, favoriteController.addFavorite);
router.delete("/:gameId", authMiddleware, favoriteController.removeFavorite);

module.exports = router;
