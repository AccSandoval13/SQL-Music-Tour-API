'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'band',
      'recommendation',
      { 
        type: Sequelize.STRING, 
        allowNull: true 
      } 
    ); 

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'band',
      'recommendation'
    );
  }
};
