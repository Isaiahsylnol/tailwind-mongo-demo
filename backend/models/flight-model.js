const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Flight = new Schema(
    {
        name: { type: String, required: true, match:/[a-z]/ },
        time: { type: [String], required: true },
        seats: { type: Number, required: true },
        destination: { type: String, required: true, match:/[a-z]/ },
        origin: { type: String, required: true, match:/[a-z]/ },
        model: { type: String, required: true },
        flights: { type: Number, required: false }
    },
    { timestamps: true },
)

module.exports = mongoose.model('flights', Flight)
