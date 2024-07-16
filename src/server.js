const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//init router
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/test', (req, res) => {
  res.render('sample.ejs');
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
