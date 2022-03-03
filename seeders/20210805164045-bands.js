"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("events", [
      {
        name: "OceanSide",
        available_start_time: "2022-01-01T12:00:00",
        end_time: "2022-01-01T19:30:00",
      },
      {
        name: "CLiffSide",
        available_start_time: "2022-02-01T12:00:00",
        end_time: "2022-01-01T19:30:00",
      },
      {
        name: "SkySide",
        available_start_time: "2022-03-01T12:00:00",
        end_time: "2022-01-01T19:30:00",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
