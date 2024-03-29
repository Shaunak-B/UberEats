require('dotenv').config()
const mysql = require('mysql');

var connection;

connection = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    port     : process.env.PORT,
    database : process.env.DATABASE
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
  
    console.log('Connected to database.');
  });


  module.exports = connection;
