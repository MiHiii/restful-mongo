const express = require('express');
const { getUsersApi } = require('../controllers/api.controller');

const routerAPI = express.Router();

routerAPI.get('/', (req, res) => {
  res.send('Hello from API');
});

routerAPI.get('/abc', (req, res) => {
  res.status(200).json({ message: 'Hello from API' });
});

routerAPI.get('/users', getUsersApi);

module.exports = routerAPI;
