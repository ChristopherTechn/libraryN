const connection = require('../config');

const getlibraries = (req,res) => {
    connection.query('SELECT * FROM libraries', (err,results) => {

        if(err){
            console.error('Error fetching data',err);
            res.status(500).send('Error fetching data');
        }
        else{
            res.json(results);
        }
    });
};

module.exports = getlibraries;