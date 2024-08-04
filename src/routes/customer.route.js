const express = require('express');
const {
  getAllCustomers,
  postCreateCustomer,
  postCreateArrayCustomer,
} = require('../controllers/customer.controller');

const router = express.Router();

router.get('/', getAllCustomers);
router.post('/', postCreateCustomer);
router.post('/many', postCreateArrayCustomer);

module.exports = router;
