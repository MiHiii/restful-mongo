const express = require('express');

const router = express.Router();

//init router
router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/test', (req, res) => {
  res.render('sample.ejs');
});

module.exports = router;
