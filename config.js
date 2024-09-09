const mysql = require('mysql2');

const dbwashehere = {
  host: process.env.DB_HOST ,
  user: process.env.DB_USER ,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME ,
  port: process.env.DB_PORT,
};

const connection = mysql.createConnection(dbwashehere);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as ID', connection.threadId);
});

module.exports = connection;

