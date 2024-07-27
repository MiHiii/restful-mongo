const connection = require('../config/database');

const getHomepage = (req, res) => {
  return res.render('home.ejs');
};

const getTest = (req, res) => {
  res.render('sample');
};

const postCreateUser = (req, res) => {
  const { email, name, city } = req.body;
  var post = { email: email, name: name, city: city };
  var query = connection.query(
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
  console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'

  //   const query = `INSERT INTO Users (email, name, city)
  // VALUES (email, name, city);`
  // console.log('>>req.body: ', name, email, city );
};

module.exports = {
  getHomepage,
  getTest,
  postCreateUser,
};
