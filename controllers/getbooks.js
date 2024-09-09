const connection = require('../config');

const getAllBooks = (req, res) => {
    const query = 'CALL GetAllBooks()';
    
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching books:', err);
            res.status(500).send('Error fetching books');
        } else {
            res.status(200).json(results[0]);  // Results from a CALL will be an array of arrays
        }
    });
};

module.exports = getAllBooks;
