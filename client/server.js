const express = require('express')

// use process.env variables to keep private variables,
require('dotenv').config()

// Express Middleware
const helmet = require('helmet') // creates headers that protect from attacks (security)
const bodyParser = require('body-parser') // turns response into usable format
const cors = require('cors')  // allows/disallows cross-site communication
const morgan = require('morgan') // logs requests
const createCheckoutSession = require('./src/components/checkout');
 
// Controllers - aka, the db queries
const main = require('./src/controllers/main')

// db Connection w/ localhost
var db = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : process.env.REACT_APP_PG_USER,
    password : process.env.REACT_APP_PG_PASS,
    database : process.env.REACT_APP_DB_NAME
  }
});

// App
const app = express()

// App Middleware
const whitelist = ['http://localhost:3001']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(helmet())
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(morgan('combined')) // use 'tiny' or 'combined'

// App Routes - Auth
app.get('/', (req, res) => res.send('hello world'))
app.get('/crud', (req, res) => main.getTableData(req, res, db))
app.post('/crud', (req, res) => main.postTableData(req, res, db))

app.post('/create-checkout-session', createCheckoutSession)

// App Server Connection
app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT || 3000}`)
})
