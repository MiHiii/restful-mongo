const express = require('express');
const {
  getAllCustomers,
  postCreateCustomer,
} = require('../controllers/customer.controller');

const router = express.Router();

router.get('/', getAllCustomers);
router.post('/', postCreateCustomer);

module.exports = router;
