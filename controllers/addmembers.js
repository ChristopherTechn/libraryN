const connection = require('../config');
const bcrypt = require('bcrypt');

const addMembers = async (req, res) => {
    const { MemberID, Name, Address, ContactNumber, Password, email } = req.body;

    try {
        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(Password, 10);

        const query = 'INSERT INTO Members(MemberID, Name, Address, ContactNumber, Password, email) VALUES (?, ?, ?, ?, ?, ?)';
        connection.query(query, [MemberID, Name, Address, ContactNumber, hashedPassword, email], (err, results) => {
            if (err) {
                console.error('Error adding member:', err);
                res.status(500).send('Error adding member');
            } else {
                res.status(201).send('Successfully added a new member');
            }
        });
    } catch (error) {
        console.error('Error hashing password:', error);
        res.status(500).send('Server error');
    }
};

module.exports = addMembers;
