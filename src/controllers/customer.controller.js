const Customer = require('../models/customer.model');
const {
  uploadSingleFile,
  uploadMultipleFiles,
} = require('../services/fileService');

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

// const postCreateCustomer = async (req, res) => {
//   let {name,}
// };

const postUploadSingleFile = async (req, res) => {
  console.log('>>file: ', req.files);
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded');
  }
  let result = await uploadSingleFile(req.files.image);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

const postUploadMultipleFile = async (req, res) => {
  console.log('>>file: ', req.files);
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded');
  }

  try {
    let result = await uploadMultipleFiles(req.files.image);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  } catch (error) {
    console.log('>>upload error: ', error);
    return res.status(500).send('Error uploading files');
  }
};

module.exports = {
  getAllCustomers,
  postUploadSingleFile,
  postUploadMultipleFile,
};
