'use strict';

/**
 * Class Declaration
 * Write Static Method
 * Add Model to Controller
 * Module Export Class
 */

const { Book } = require('../model/Book');

class BookController {
  static FindAllBooks(req, res) {
    Book.showAllBooks((err, data) => {
      if (err) {
        console.log(`Controller error`);
      } else {
        res.json({
          title: 'API Backend Toko Buku',
          message: 'Koleksi Buku',
          status: 200,
          data,
        });
      }
    });
  }

  static FindBookById(req, res) {
    // console.log('ini id', req.params.id);
    const { id } = req.params;
    Book.showBookById(id, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json({
          title: 'API Backend Toko Buku',
          message: 'Koleksi Buku',
          status: 200,
          data,
        });
      }
    });
  }

  static AddNewBook(req, res) {
    let payload = req.body;
    payload.book_price = +req.body.book_price;
    payload.book_stock = +req.body.book_stock;

    // Check if any empty value

    for (const each in payload) {
      if (!payload[each]) {
        payload[each] = null;
      }
    }
    console.log(payload, 'ini adalah payload');

    Book.createBook(payload, (err, data) => {
      if (err) {
        console.log(`Controller error`);
      } else {
        res.json({
          title: 'API Backend Toko Buku',
          message: 'Koleksi Buku',
          status: 200,
          data,
        });
      }
    });
  }
}

module.exports = {
  BookController,
};
