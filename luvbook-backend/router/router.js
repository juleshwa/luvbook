'use strict';

/**
 * Initialization Express
 * Require Controller
 * Main Endpoint
 * Module Exports
 */

// Initialization
const express = require('express');
const router = express.Router();

// Controller
const { Controller } = require('../controller/Controller');

// Book Router
const { bookRouter } = require('./BookRouter');

// Endpoint : Home
router.get('/', Controller.Homepage);

// Endpoint : Books
router.use('/books', bookRouter);

// export module
module.exports = { router };
