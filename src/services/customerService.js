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

const createArrayCustomerService = async (customersData) => {
  try {
    let results = await Customer.create(customersData);
    return results;
  } catch (error) {
    console.log('>>error: ', error);
    return null;
  }
};

const deleteCustomerService = async (customerId) => {
  try {
    let result = await Customer.deleteById(customerId);
    return result;
  } catch (error) {
    console.log('>>error: ', error);
    return null;
  }
};

module.exports = {
  createCustomerService,
  createArrayCustomerService,
  deleteCustomerService,
};
