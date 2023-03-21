// DEPENDENCIES TO INSTALL
const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
class Band extends Model {}

// Band init is a method that takes in an object 
// with the column names as keys and the data types as values 
// We are setting up the model base for the data we want to store in our database 
// This is setting it up in the Sequelize instance / layer 
// 

StaticRange.init({
    
})
Band.init({
    band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    members: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }
}, {
    sequelize,
    //modelName: 'Band', is capitalized by default because it's a class 
    modelName: 'Band',
    tableName: 'band',
    timestamps: false
})

// EXPORT
module.exports = Band
