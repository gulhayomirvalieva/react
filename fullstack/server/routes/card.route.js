const { Router } = require("express");
const cardRouter = Router();

const { postCard, getCardByPk, getCards, updateCard, deleteCard } = require("../controllers/card.controller");

const { authMiddleware, adminMiddleware } = require("../middlewares/auth.middleware");

// Faqat adminlar huquqi bor routerlar
cardRouter.post("/postCard", authMiddleware, adminMiddleware, postCard);
cardRouter.put("/updateCard/:id", authMiddleware, adminMiddleware, updateCard);
cardRouter.delete("/deleteCard/:id", authMiddleware, adminMiddleware, deleteCard);

// Foydalanuvchi Token bilan kirishi kerak
cardRouter.get("/getCard", authMiddleware, getCards);
cardRouter.get("/getCardByPk/:id", authMiddleware, getCardByPk);

module.exports = { cardRouter };