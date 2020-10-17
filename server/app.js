require("dotenv").config();
// import libraries
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

// documentation helpers
const swaggerJsDocs = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Customer API",
      description: "Customer API information",
      contact: {
        name: "Amazing developer",
      },
      servers: [`http://localhost:${process.env.PORT}`],
    },
  },
  apis: ["app.js", "./api/v1/*.js"],
};

const swaggerDocs = swaggerJsDocs(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", require("./api"));

/**
 * @swagger
 * /:
 *  get:
 *    description: Use to check if server is running
 *    responses:
 *      '200':
 *        description: Server is going well
 */
app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
