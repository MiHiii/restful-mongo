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

const putUserApi = async (req, res) => {
  // Destructure and validate request body
  const { id, email, name, city } = req.body;

  if (!id || !email || !name || !city) {
    return res.status(400).send('All fields are required');
  }

  const query = { name, email, city };

  // console.log('>>req.body: ', req.body);

  try {
    const result = await User.updateOne({ _id: id }, query);

    if (result.nModified === 0) {
      return res.status(404).send('User not found');
    } else {
      return res.status(200).send('User updated successfully');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { getUsersApi, postUserApi, putUserApi };
