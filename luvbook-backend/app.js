'use strict';

/**
 * Express Init
 * Setting Port
 * Cors Init
 * Dotenv Init
 * Body Parser
 */

// Initialization dotenv
require('dotenv').config();

// Initialization Libraries
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { router } = require('./router/router');

// Initialization PORT
const port = process.env.PORT || 3000;

// Cors Option Origin
let originOptionCors = {
  origin: `http://localhost:${port}`,
};

app.use(cors(originOptionCors));

// Routing

app.use('/', router);

// Port Connection
app.listen(port, () => `Port connected on ${port}`);
