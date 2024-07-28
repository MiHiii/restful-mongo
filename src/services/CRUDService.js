const connection = require('../config/database');
const { get } = require('../routes/web');

const getAllUsers = async () => {
  let results = [];
  try {
    [results] = await connection.query('SELECT * FROM `Users`');
  } catch (error) {
    throw error;
  }
  return results;
};

const getUserById = async (id) => {
  let results = [];
  try {
    [results] = await connection.query('SELECT * FROM `Users` WHERE `id` = ?', [
      id,
    ]);
  } catch (error) {
    throw error;
  }
  let user = results.length > 0 ? results[0] : null;
  return user;
};

const updateUserById = async (id, userData) => {
  try {
    const query = 'UPDATE `Users` SET ? WHERE `id` = ?';
    await connection.query(query, [userData, id]);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
};
