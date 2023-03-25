'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class MeetGreet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static assocaiate({ Band, Event }) {
      Meet_
      foreignKey = 'band_id'
      as = "band"
    }
  }; 

  
  MeetGreet.init({
    id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MeetGreet',
  });
  return MeetGreet;
};