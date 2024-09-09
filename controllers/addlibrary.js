const connection = require('../config');

const addLibrary = (req,res)  =>   {

    const {LibraryID, Library_Name, Owners, PublicationYear}= req.body;
    const query = 'INSERT INTO libraries (LibraryID, Library_Name, Owners, PublicationYear) VALUES (?, ?, ?, ?)';
    connection.query(query,[LibraryID, Library_Name, Owners, PublicationYear], (err,results) => {
        if(err) {
            console.error('Error adding Libraries',err);
            res.status(500).send('Error handling adding of libraries');
        }
        else{
            res.status(201).send('Library added succesfully');
        }
    })
}

module.exports = addLibrary;