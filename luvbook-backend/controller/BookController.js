'use strict';

/**
 * Class Declaration
 * Write Static Method
 * Module Export Class
 */

class BookController {
  static FindAllBooks(req, res) {
    res.send('Hello dari Books Controller');
  }
}

module.exports = {
  BookController,
};
