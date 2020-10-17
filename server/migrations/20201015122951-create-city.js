"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Cities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      short_description: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      full_description: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      city_url: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      region: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      lat: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      long: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      youtube_link: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Cities");
  },
};
