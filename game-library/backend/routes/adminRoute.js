const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");

// Auth kerak emas — kod frontendda tekshiriladi
router.get("/games", adminController.getAllGames);
router.post("/games", adminController.addGame);
router.put("/games/:id", adminController.updateGame);
router.delete("/games/:id", adminController.deleteGame);

module.exports = router;
