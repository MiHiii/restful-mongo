const express = require('express');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// console.log('>>check env: ', process.env);

//config template engineF
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//init router
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/test', (req, res) => {
  res.render('sample.ejs');
});

app.listen(port, hostname, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
