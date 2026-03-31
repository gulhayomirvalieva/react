import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import sequelize from "./config/db.js";

import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js";
import basketRoutes from "./routes/basket.routes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// static folder
app.use("/uploads", express.static("uploads"));

// routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/basket", basketRoutes);

// port
const PORT = process.env.PORT || 5000;

// database connect
const startServer = async () => {
  try {
    await sequelize.sync();

    console.log("PostgreSQL connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

startServer();
