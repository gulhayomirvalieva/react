const express = require("express");
const cors = require("cors");
const sequelize = require("./configs/database");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// ROUTES
const { userRouter } = require("./routes/user.route");
const { cardRouter } = require("./routes/card.route");
const { likeRouter } = require("./routes/like.route");
const { authRouter } = require("./routes/auth.route");
app.use("/api", userRouter);
app.use("/api", cardRouter);
app.use("/api", likeRouter);
app.use("/api", authRouter);

const PORT = process.env.PORT || 8888

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is runnig on port ${PORT}`)
    })
});