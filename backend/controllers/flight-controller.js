const Flight = require('../models/flight-model')

createFlight = (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'Please provide flight info',
        })
    }

    const newFlight = Flight(body)

    if(!newFlight) {
        return res.status(400).json({ success: false, error: err})
    }

    newFlight
            .save()
            .then(() => {
                return res.status(201).json({
                    success: true, 
                    id: newFlight._id, 
                    message: 'Flight created!',
                })
            })
            .catch(error => {
                return res.status(400).json({
                    error, 
                    message: 'Failed to create flight'
                })
            })
}

getFlights = async (req, res) => {
    await Flight.find({}, (err, flights) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!flights.length) {
            return res
                .status(404)
                .json({ success: false, error: `Flight not found` })
        }
        return res.status(200).json({ success: true, data: flights })
    }).catch(err => console.log(err))
}

module.exports = {
    createFlight,
    getFlights,
}