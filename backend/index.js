const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.use(express.json());
app.use(cors());

async function connectToBD() {
  try {
    await connect(process.env.MONGO_URL);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}
connectToBD();

// router
const { users } = require("./routers/user.router");
app.use("/users", users);

// cars
const { cars } = require("./routers/car.router");
app.use("/cars", cars);

// product
const { products } = require("./routers/product.router");
app.use("/products", products);

// house
const { houses } = require("./routers/house.router");
app.use("/houses", houses);

// cart
const { carts } = require("./routers/cart.router");
app.use("/carts", carts);

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
      description: "API documention using Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routers/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running a http://localhost:${PORT}`);
});
