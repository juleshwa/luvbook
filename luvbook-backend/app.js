'use strict'

// Init Env
require('dotenv').config();

// Init Express
const express = require('express');
const app = express();

// Init other modules
const bodyParser = require('body-parser');
const cors = require('cors');

// Init PORT
const PORT = process.env.PORT || 3000;

// Cors Setup
let originOptionCors = {
    origin: `http://localhost:${PORT}`
}

app.use(cors(originOptionCors));

// Routing

app.get('/', function(req,res) {
    res.send('hello world');
})

// Port Connection
app.listen(PORT, () => `connect to server on port ${PORT}`)
