const connection = require('../config/database');

const getAllUsers = async () => {
  let results = [];
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

const deleteUserById = async (id) => {
  try {
    const query = 'DELETE FROM `Users` WHERE `id` = ?';
    // await connection.query(query, [id]);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
