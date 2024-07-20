require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewengine');
const app = express();
const webRoutes = require('./routes/web');

const mysql = require('mysql2');

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// console.log('>>check env: ', process.env);

//config view engine
configViewEngine(app);

//init router
app.use('/', webRoutes);

//test connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307, //default port is 3306
  user: 'root',
  database: 'mihi-db',
  password: '123456',
});
connection.query(
  'SELECT * FROM `Users` WHERE `name` = "mihi"',
  function (err, results, fields) {
    console.log('>>results: ', results); // results contains rows returned by server
    // console.log('>>fields: ', fields); // fields contains extra meta data about results, if available
  },
);

app.listen(port, hostname, () => {
  console.log(`Server Is running on http://localhost:${port}`);
});
