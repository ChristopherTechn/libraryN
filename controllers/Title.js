const connection = require('../config');
const bcrypt = require('bcrypt');

const loginMembers = (req, res) => {
    const { email, Password } = req.body;

    const query = 'SELECT * FROM Members WHERE email = ?';
    connection.query(query, [email], async (err, results) => {
        if (err) {
            console.error('Error querying the database:', err);
            res.status(500).send('Server error');
        } else if (results.length === 0) {
            res.status(401).send('Invalid email or password');
        } else {
            const member = results[0];

            // Compare the hashed password
            const isMatch = await bcrypt.compare(Password, member.Password);
            if (isMatch) {
                res.status(200).send('Login successful');
            } else {
                res.status(401).send('Invalid email or password');
            }
        }
    });
};

module.exports = loginMembers;
