const express = require('express');
const {
  getUsersApi,
  postUserApi,
  putUserApi,
} = require('../controllers/api.controller');

const routerAPI = express.Router();

routerAPI.get('/users', getUsersApi);
routerAPI.post('/users', postUserApi);
routerAPI.put('/users', putUserApi);

module.exports = routerAPI;
