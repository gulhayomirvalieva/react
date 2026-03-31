const express = require("express");
const { getMyProfile } = require("../controller/myProfileController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getMyProfile);

module.exports = router;
