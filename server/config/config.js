require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || "maps",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
    define: { underscored: true },
  },
  test: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "1234567890",
    database: process.env.DB_NAME || "maps_test",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
    define: { underscored: true },
  },
  production: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || "maps_production",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
    define: { underscored: true },
  },
};
