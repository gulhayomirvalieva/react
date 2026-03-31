const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const { setupSwagger } = require("./swagger/swagger");

require("dotenv").config();


const authRouter = require("./routes/authRoute");
const libraryRouter = require("./routes/libraryRoute");
const favoriteRouter = require("./routes/favoriteRoutes");
const adminRouter = require("./routes/adminRoute");
const gameRouter = require("./routes/gameRoute");
const userRouter = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());


setupSwagger(app);


// Routes
app.use("/api/auth", authRouter);
app.use("/api/library", libraryRouter);
app.use("/api/favorites", favoriteRouter);
app.use("/api/admin", adminRouter);
app.use("/api/games", gameRouter);
app.use("/api/users", userRouter);


const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
