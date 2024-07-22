require('dotenv').config();
const mysql = require('mysql2');

//test connection
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT, //default port is 3306
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
// });

//Connection pool
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, //default port is 3306
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;
