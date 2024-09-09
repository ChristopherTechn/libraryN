const connection = require('../config');
const addBook = (req, res) => {
  const { BookID, Title, Author } = req.body;
  const query = 'INSERT INTO books (BookID, Title, Author) VALUES (?, ?, ?)';
  connection.query(query, [BookID, Title, Author], (err, results) => {
    if (err) {
      console.error('Error adding book:', err);
      res.status(500).send('Error adding book');
    } else {
      res.status(201).send('Book added successfully');
    }
  });
};

module.exports = addBook;