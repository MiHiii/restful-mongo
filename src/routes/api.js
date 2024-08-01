const express = require('express');
const { getUsersApi, postUserApi } = require('../controllers/api.controller');

const routerAPI = express.Router();

routerAPI.get('/users', getUsersApi);
routerAPI.post('/users', postUserApi);

module.exports = routerAPI;
