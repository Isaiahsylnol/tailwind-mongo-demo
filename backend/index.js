const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')

const flightRouter = require('./routes/flight-router')

const app = express()
const apiPort = 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', flightRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))