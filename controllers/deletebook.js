const connection = require('../config');

const deleteBook = (req, res) => {
    const bookID = req.params.id;
    const query = 'DELETE FROM Books WHERE BookID = ?';
   
    connection.query(query, [bookID], (err, results) => {
        if (err) {
            console.error('Error deleting book:', err);
            res.status(500).send('Error deleting book');
        } else {
            res.status(200).send('Book deleted successfully');
        }
    });
};

module.exports = deleteBook;
