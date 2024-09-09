const bcrypt = require('bcrypt');
const connection = require('../config');

const login = async (req, res) => {
  const { email, password } = req.body;

  // Hardcoded admin credentials
  const adminEmail = "mark@mark";
  const adminPassword = "1234";

  // Check if the email matches the hardcoded admin credentials
  if (email === adminEmail) {
    if (password === adminPassword) {
      res.status(200).json({ message: 'Admin login successful', isAdmin: true });
      return;
    } else {
      res.status(400).send('Invalid email or password');
      return;
    }
  }

  // Normal user login
  const query = 'SELECT * FROM Members WHERE email = ?';
  connection.query(query, [email], async (err, results) => {
    if (err) {
      console.error('Error fetching user', err);
      res.status(500).send('Error fetching user');
      return;
    }

    if (results.length === 0) {
      res.status(400).send('Invalid email or password');
      return;
    }

    const user = results[0];

    try {
      const isMatch = await bcrypt.compare(password, user.Password);
      if (isMatch) {
        // Regular user login success
        res.status(200).json({ message: 'Login successful', isAdmin: false });
      } else {
        res.status(400).send('Invalid email or password');
      }
    } catch (compareErr) {
      console.error('Error comparing passwords', compareErr);
      res.status(500).send('Error during login');
    }
  });
};

module.exports = login;
