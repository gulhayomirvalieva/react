const { Router } = require("express");
const authRouter = Router();

const { register, login } = require("../controllers/auth.controller");

authRouter.post("/registerUser", register);
authRouter.post("/loginUser", login);

module.exports = { authRouter };