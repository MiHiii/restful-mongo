const Customer = require('../models/customer.model');
const {
  createCustomerService,
  createArrayCustomerService,
} = require('../services/customerService');
const { uploadSingleFile } = require('../services/fileService');

const getAllCustomers = async (req, res) => {
  try {
    let results = await Customer.find({});
    res.render('customer/home.ejs', { customers: results });
  } catch (error) {
    console.log('>>error: ', error);
    return res
      .status(500)
      .json({ errorCode: 1, message: 'Error fetching customers' });
  }
};

const postCreateCustomer = async (req, res) => {
  let { name, address, phone, email, description } = req.body;
  let imageUrl = '';
  // console.log('>>file: ', req.files);
  if (!req.files || Object.keys(req.files).length === 0) {
  } else {
    let result = await uploadSingleFile(req.files.image);
    imageUrl = result.path;
  }
  let customerData = {
    name: name,
    address: address,
    phone: phone,
    email: email,
    description: description,
    image: imageUrl,
  };
  console.log('>>image: ', imageUrl);
  await createCustomerService(customerData);
  return res.status(200).json({
    errorCode: 0,
    message: 'Customer created successfully',
    data: customerData,
  });
};

const postCreateArrayCustomer = async (req, res) => {
  let customers = await createArrayCustomerService(req.body.customers);
  if (customers) {
    return res.status(200).json({
      errorCode: 0,
      message: 'Customers created successfully',
      data: customers,
    });
  } else {
    return res.status(500).json({
      errorCode: -1,
      message: 'Error creating customers',
    });
  }
};

const putUpdateCustomer = async (req, res) => {
  let customerId = req.params.customerId;
  let { name, address, phone, email, description } = req.body;
  let imageUrl = '';
  if (!req.files || Object.keys(req.files).length === 0) {
  } else {
    let result = await uploadSingleFile(req.files.image);
    imageUrl = result.path;
  }
  let customerData = {
    name: name,
    address: address,
    phone: phone,
    email: email,
    description: description,
    image: imageUrl,
  };
  console.log(customerData);
  await Customer.findByIdAndUpdate(customerId, customerData);
  return res.status(200).json({
    errorCode: 0,
    message: 'Customer updated successfully',
    data: customerData,
  });
};

module.exports = {
  getAllCustomers,
  postCreateCustomer,
  postCreateArrayCustomer,
  putUpdateCustomer,
};
