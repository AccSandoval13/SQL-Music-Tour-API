// DEPENDENCIES 
const bands = require('express').Router()
const db = require('../models')
const { Band, MeetGreet, Event, SetTime } = db 



// GET ALL BANDS
bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll([
            
        ])
        res.status(200).json(foundBands)
    } catch (e) {
        res.status(500).json(e)
    }
})


// FIND ONE BAND BY ID  
bands.get('/:name', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: {
                name: req.params.name
            }, 
            include: {
                model: Meet_Greet,
                as: 'meet_greets', 
                include: {
                    model: Event, 
                    as: 'events'
                }
            } 
        }, 
            {
                model: Set_Time,
                as: 'set_times', 
                include: {
                    model: Event,
                    as: 'events'
                } 
            }
        )

        res.status(200).json(foundBand)
    } catch (e) {
        res.status(500).json(e)
    }
})


// CREATE A BAND
bands.post('/', async (req, res) => {
    try {
        const newBand = await Band.create(req.body)
        res.status(200).json({
            message: 'New Band Created',
            data: newBand
        })
    } catch(e) {
        res.status(500).json(e)
    }
})


// UPDATE A BAND
bands.put('/:id', async (req, res) => {
    try {
        const updatedBands = await Band.update(req.body, {
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedBands} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// DELETE A BAND 
bands.delete('/id:', async (req, res) => {
    try {
        const deletedBands = await Band.destroy({
            where: { band_id: req.params.id }
        })
    } catch (e) { 
        res.status(500).json(e)
    }
} 
) 

 


module.exports = bands 
