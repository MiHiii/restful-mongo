const express = require('express');
const {
  getAllCustomers,
  postCreateCustomer,
  postCreateArrayCustomer,
  putUpdateCustomer,
} = require('../controllers/customer.controller');

const router = express.Router();

router.get('/', getAllCustomers);
router.post('/', postCreateCustomer);
router.put('/:customerId', putUpdateCustomer);
router.post('/many', postCreateArrayCustomer);

module.exports = router;
