'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn( 
      'band', 
      'recommendation', 
      { 
        type: DataTypes.TEXT, 
        defaultValue: 'amazing' 
      } 
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn( 
      'band', 
      'recommendation', 
      {
        type: DataTypes.STRING,
        defaultValue: 'null' 

      }
    ); 
  } 
}; 
