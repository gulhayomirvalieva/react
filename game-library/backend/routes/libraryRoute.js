const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const libraryController = require("../controller/libraryController");

router.get("/", authMiddleware, libraryController.getLibrary);
router.post("/", authMiddleware, libraryController.addToLibrary);
router.delete("/:gameId", authMiddleware, libraryController.removeFromLibrary);

module.exports = router;
