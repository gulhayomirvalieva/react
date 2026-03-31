require("dotenv").config();

module.exports = {
    port: process.env.PORT || 8888,
    db: {
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USER || "postgres",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME,
        dialect: "postgres"
    }
};