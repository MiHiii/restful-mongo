require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewengine');
const app = express();
const webRoutes = require('./routes/web');
const connection = require('./config/database');
const mongoose = require('mongoose');
// const Kitten = require('./models/Kitten');

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// console.log('>>check env: ', process.env);

//config view engine
configViewEngine(app);

//init router
app.use('/', webRoutes);

// const cat = new Kitten({ name: 'Mihi' });
// cat.save();

//test connection
// connection();

//Connect
(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log('>>>Error connect to DB: ', error);
  }
})();
