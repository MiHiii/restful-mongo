const connection = require('../config/database');

const User = require('../models/user.model');

const getUsersApi = async (req, res) => {
  let results = await User.find({});
  return res.status(200).json({ errorCode: 0, data: results });
};

const postUserApi = async (req, res) => {
  const { email, name, city } = req.body;
  let userData = { email: email, name: name, city: city };

  let user = await User.create(userData);
  return res.status(200).json({ errorCode: 0, data: user });

  // console.log('>>req.body: ', name, email, city );
};

module.exports = { getUsersApi, postUserApi };
