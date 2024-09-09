const connection = require('../config');

const GetBookID =(req, res)  => {
    const query = 'Select * from books where BOOKID = ?';
    const id = req.params.id;

connection.query(query, [id],(err,results) => {
 if(err){
    console.error('Erorr getting the book');
    res.status(500).send('Error getting the book');
 }else if (results.length ===0) {
    res.status(404).send('Book not found');

 }
   else{
    res.status(201).json(results[0])
   }
}
)
}

module.exports = GetBookID;
