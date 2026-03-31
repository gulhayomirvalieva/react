const { Router } = require("express");
const likeRouter = Router();

const { postLike, getLikeByPk, getLikes, updateLike, deleteLike } = require("../controllers/like.controller");

const { authMiddleware } = require("../middlewares/auth.middleware");

// Like faqat login bo'lgan userlar uchun
likeRouter.post("/postLike", authMiddleware, postLike);
likeRouter.get("/getLike", authMiddleware, getLikes);
likeRouter.get("/getLikeByPk/:id", authMiddleware, getLikeByPk);
likeRouter.put("/updateLike/:id", authMiddleware, updateLike);
likeRouter.delete("/deleteLike/:id", authMiddleware, deleteLike);

module.exports = { likeRouter };