// Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, read replication and more. 
const { Sequelize } = require('sequelize')

// DEPENDENCIES 
const express = require('express')
const app = express()


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API Demo'
    })
})


// CONTROLLERS 
const bandController = require('./controllers/band_controller') 
app.use('/band', bandController) 


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})