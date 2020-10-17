const cityRouter = require("express").Router();
const { City } = require("../../models");
const CreateError = require("http-errors");
/**
 * @swagger
 * /api/v1/city:
 *  get:
 *    description: get all cities
 *    responses:
 *      '200':
 *        description: get all cities
 */
cityRouter.get("/", async (req, res) => {
  try {
    const allCities = await City.findAll();
    res.json(allCities);
  } catch (error) {
    next(error);
  }
});

module.exports = cityRouter;
