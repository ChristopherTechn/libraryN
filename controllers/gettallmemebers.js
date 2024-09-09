const connection = require('../config');

const getMembers = (req,res) => {


    connection.query('CALL GetallMembers()', (err, results) => {
    if(err){
        console.error('Error in getting all members', err);
        res.status(500).send('Error getting all members');
    }
    else{
    res.json(results);
    }
});
};


module.exports = getMembers;