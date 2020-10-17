"use strict";
const fetchAllCities = require("../seeders/seedFiles/citiesSeed");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let allCities = await fetchAllCities();
    await queryInterface.bulkInsert("cities", allCities, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cities", null, {});
  },
};
