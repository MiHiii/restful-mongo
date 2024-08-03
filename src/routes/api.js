const express = require('express');
const {
  getUsersApi,
  postUserApi,
  putUserApi,
  postUploadSingleFile,
  postUploadMultipleFile,
} = require('../controllers/api.controller');

const routerAPI = express.Router();

routerAPI.get('/users', getUsersApi);
routerAPI.post('/users', postUserApi);
routerAPI.put('/users', putUserApi);
routerAPI.post('/file', postUploadSingleFile);
routerAPI.post('/files', postUploadMultipleFile);

module.exports = routerAPI;
