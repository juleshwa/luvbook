'use strict';

/**
 * Initialization Express
 * Require Book Controller
 * Main Endpoint
 * Module Exports
 */

// Initialization
const express = require('express');
const bookRouter = express.Router();

// Controller
const { BookController } = require('../controller/BookController');

// Endpoint : All Books
bookRouter.get('/', BookController.FindAllBooks);

// Endpoint : Book by Id
bookRouter.get('/:id', BookController.FindBookById);

// Endpoint : Post Book
bookRouter.post('/new', BookController.AddNewBook);

// export module
module.exports = { bookRouter };
