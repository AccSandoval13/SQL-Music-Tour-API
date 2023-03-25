'use strict'
const { 
    Model 
} = require('sequelize') 
module.exports = (sequelize, DataTypes) => { 

    class Stage extends Model {
        // Helper method for defining associations. 
        // This method is not a part of Sequelize lifecycle
        // The `models/index` file will call this method automatically
        static associate(Event, Stage_Event, Set_Time) {
            Stage.belongsToMany(Event, {
                foreignKey: 'stage_id',
                as: "events",
                through: Stage_Event
            })

