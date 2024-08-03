const Customer = require('../models/customer.model');

const createCustomerService = async (customerData) => {
  try {
    await Customer.create(customerData);
    return customerData;
  } catch (error) {
    console.log('>>error: ', error);
    return null;
  }
};

module.exports = { createCustomerService };
