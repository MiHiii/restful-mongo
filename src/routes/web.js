const express = require('express');
const {
  getHomepage,
  getTest,
  postCreateUser,
} = require('../controllers/home.controller.js');

const router = express.Router();

//router.Method('/route', handler)

//init router
router.get('/', getHomepage);
router.get('/test', getTest);

router.post('/create-user', postCreateUser);

module.exports = router;
