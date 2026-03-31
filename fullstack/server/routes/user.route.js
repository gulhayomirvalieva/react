const { Router } = require("express");
const userRouter = Router();

const { postUser, getUserByPk, getUsers, updateUser, deleteUser } = require("../controllers/user.controller");

userRouter.post("/postUser", postUser);
userRouter.get("/getUser", getUsers);
userRouter.get("/getUserByPk/:id", getUserByPk);
userRouter.put("/updateUser/:id", updateUser);
userRouter.delete("/deleteUser/:id", deleteUser);

module.exports = { userRouter };