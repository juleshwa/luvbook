'use strict';

/**
 * SQL Init from Config
 * Class Book Init
 */

const sql = require('../config/db');

class Book {
  constructor(
    id,
    book_label,
    book_title,
    book_author,
    book_genre,
    book_publisher,
    book_isbn,
    book_year,
    book_price,
    book_stock,
    created_at,
    updated_at
  ) {
    this.id = id;
    this.book_label = book_label;
    this.book_title = book_title;
    this.book_author = book_author;
    this.book_genre = book_genre;
    this.book_publisher = book_publisher;
    this.book_isbn = book_isbn;
    this.book_year = book_year;
    this.book_price = book_price;
    this.book_stock = book_stock;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  /**
   * Static Methods Available
   * ========================
   * Show all books
   * Show book by id
   * Post New Book
   * Update Book Data
   * Delete Book
   */

  /**
   * SQL Connection
   * Query SQL Command
   * Get Result
   * Change to Object Instance
   * Send to Book Controller
   */

  static showAllBooks(result) {
    let sqlQuery = `SELECT * FROM book`;
    sql.query(sqlQuery, (err, res) => {
      if (err) {
        console.log('This is Err => /n', err);
        result(err, null);
      } else {
        let rawData = res;
        let books = [];
        let book;
        rawData.forEach((eachData) => {
          book = new Book(
            eachData.ID,
            eachData.book_label,
            eachData.book_title,
            eachData.book_author,
            eachData.book_genre.toLowerCase(),
            eachData.book_publisher,
            eachData.book_isbn,
            eachData.book_year,
            eachData.book_price,
            eachData.book_stock,
            eachData.created_at,
            eachData.updated_at
          );
          books.push(book);
        });

        console.log('result', books);
        result(null, books);
      }
    });
  }

  static showBookById(id, result) {
    // console.log(id);
    let sqlQuery = `SELECT * FROM book WHERE ID = ${id}`;
    sql.query(sqlQuery, (err, res) => {
      if (err) {
        console.log('error', err);
        result(err, null);
      } else {
        let rawData = res;
        let books = [];
        let book;
        rawData.forEach((eachData) => {
          book = new Book(
            eachData.ID,
            eachData.book_label,
            eachData.book_title,
            eachData.book_author,
            eachData.book_genre.toLowerCase(),
            eachData.book_publisher,
            eachData.book_isbn,
            eachData.book_year,
            eachData.book_price,
            eachData.book_stock,
            eachData.created_at,
            eachData.updated_at
          );
          books.push(book);
        });

        console.log('result', books);
        result(null, books);
      }
    });
  }

  static createBook(data, result) {
    let sqlQuery = `INSERT INTO book SET ?`;
    sql.query(sqlQuery, data, (err, res) => {
      if (err) {
        console.log('ini err', err);
        result(err, null);
      } else {
        console.log('ini rest');
        result(null, true);
      }
    });
  }
}

module.exports = {
  Book,
};
