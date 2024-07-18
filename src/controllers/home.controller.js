const getHomepage = (req, res) => {
  res.send('Home Page');
};

const getTest = (req, res) => {
  res.render('sample');
};

module.exports = {
  getHomepage,
  getTest,
};
