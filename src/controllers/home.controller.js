const connection = require('../config/database');
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('../services/CRUDService');

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render('home.ejs', { listUsers: results });
};

const getTest = (req, res) => {
  res.render('home.esj');
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.userId;
  console.log('>>req: ', req);
  try {
    const user = await getUserById(userId);
    if (user) {
      res.render('edit.ejs', { user });
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Error retrieving user data');
  }
};

const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body;
  let post = { email: email, name: name, city: city };
  /*
  let query = connection.query(
    'INSERT INTO Users SET ?',
    post,
    function (error, results, fields) {
      if (error) {
        throw error;
      } else {
        console.log('>>results: ', results); // Neat!
        res.send('Ceated user successfully');
      }
    },
  );
  */

  //Promise query
  let [results, fields] = await connection.query(
    'INSERT INTO Users SET ?',
    post,
  );
  // console.log('>>results: ', results); // Neat!
  res.send('Created user successfully');

  //   const query = `INSERT INTO Users (email, name, city)
  // VALUES (email, name, city);`
  // console.log('>>req.body: ', name, email, city );
};

const postUpdateUser = async (req, res) => {
  const { id, email, name, city } = req.body;
  let post = { email: email, name: name, city: city };

  console.log('>>post: ', post);
  console.log('>>id: ', id);

  try {
    await updateUserById(id, post);
    // res.send('Update user successfully');
    res.redirect('/');
  } catch (error) {
    console.error('Error updating user: ', error);
    res.status(500).send('Error updating user');
  }
};

const getCreatePage = (req, res) => {
  return res.render('create.ejs');
};

const postDeleteUser = async (req, res) => {
  const id = req.params.userId;
  await deleteUserById(id);
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
