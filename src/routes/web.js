const express = require('express');
const { getHomepage, getTest } = require('../controllers/home.controller.js');

const router = express.Router();

//router.Method('/route', handler)

//init router
router.get('/', getHomepage);
router.get('/test', getTest);

module.exports = router;
