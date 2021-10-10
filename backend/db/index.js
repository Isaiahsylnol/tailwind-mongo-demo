const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://admin:admin@cluster0.dw4sa.gcp.mongodb.net/AirportDB?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
