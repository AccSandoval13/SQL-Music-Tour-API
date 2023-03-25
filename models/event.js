'use strict'
const { 
    Model 
} = require('sequelize') 
module.exports = (sequelize, DataTypes) => { 

    class Event extends Model { 


        static associate(Stage, Stage_Event, Set_Time, Meet_Greet) { 
            Event.belongsTo(Stage, { 
                foreignKey: 'event_id',
                as: 'stages'
                through: Stage_Event
            }) 
            Event.hasMany(Meet_Greet, [
                foreignKey: 'event_id', 
                as: 'meet_greets' 
            ])
            Event.hasMany(Set_Time, [ 
                foreignKey: 'event_id', 
                as: 'set_times'
            ]) 
        } 
    } 
