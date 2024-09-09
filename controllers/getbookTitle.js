const connection = require('../config');

const GetBookTitle =(req, res)  => {
    const query = 'Select * from books where Title = ?';
    const {Title} = req.body;

connection.query(query, [Title],(err,results) => {
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

module.exports = GetBookTitle;
