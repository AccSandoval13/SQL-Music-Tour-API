'use strict'
const {
    Model
} = require('sequelize') 
module.exports = (sequelize, DataTypes) => {    

    class Set_Time extends Model {


        static associate(Band, Event, Stage ) {
            Set_Time.belongsTo(Band, {
                foreignKey: 'band_id',
                as: "band"
            })
            set_time.belongsTo(Event, { 
        }
    } 