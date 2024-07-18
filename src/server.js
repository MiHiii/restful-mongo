require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewengine');
const app = express();
const webRoutes = require('./routes/web');

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// console.log('>>check env: ', process.env);

//config view engine
configViewEngine(app);

//init router
app.use('/', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
