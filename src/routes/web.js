const express = require('express');
const {
  getHomepage,
  getTest,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
} = require('../controllers/home.controller.js');

const router = express.Router();

//router.Method('/route', handler)

//init router
router.get('/', getHomepage);
router.get('/test', getTest);

router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser);

router.get('/update/:userId', getUpdatePage);
router.post('/update-user', postUpdateUser);

router.post('/delete-user/:userId', postDeleteUser);

module.exports = router;
