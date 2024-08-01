const connection = require('../config/database');
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('../services/CRUDService');

const User = require('../models/user.model');

const getHomepage = async (req, res) => {
  async function fetchData() {
    try {
      let results = await User.find({});
      return res.render('home.ejs', { listUsers: results });
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();
};

const getTest = (req, res) => {
  res.render('home.esj');
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.userId;
  // console.log('>>req: ', req);

  try {
    const user = await User.findById(userId).exec();
    // console.log('>>user: ', user);

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.render('edit.ejs', { user });
  } catch (err) {
    console.error('Error retrieving user data: ', err);
    res.status(500).send('Error retrieving user data');
  }
};

const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body;
  let user = { email: email, name: name, city: city };

  await User.create(user);

  res.send('Created user successfully');

  // console.log('>>req.body: ', name, email, city );
};

const postUpdateUser = async (req, res) => {
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
      return res.status(404).send('User not found or no changes made');
    }

    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const getCreatePage = (req, res) => {
  return res.render('create.ejs');
};

const postDeleteUser = async (req, res) => {
  const id = req.params.userId;
  await User.deleteOne({ _id: id });
  res.redirect('/');
};

module.exports = {
  getHomepage,
  getTest,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
};
