const cityRouter = require("express").Router();
const { City } = require("../../models");
const CreateError = require("http");

cityRouter.get("/", async (req, res) => {
  try {
    const allCities = await City.findAll();
    res.json(allCities);
  } catch (error) {
    res.json(CreateError.badRequest);
  }
});

module.exports = cityRouter;
