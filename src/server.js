require('dotenv').config();
const express = require('express');
// const multer = require('multer');
const fileUpload = require('express-fileupload');
const configViewEngine = require('./config/viewengine');
const app = express();
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const customerRoutes = require('./routes/customer.route');
const connection = require('./config/database');
const mongoose = require('mongoose');
// const Kitten = require('./models/Kitten');

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config file upload
app.use(fileUpload());

//config request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// console.log('>>check env: ', process.env);

//config view engine
configViewEngine(app);

//init router
app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);
app.use('/v1/api/customer/', customerRoutes);

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
