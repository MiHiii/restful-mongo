require('dotenv').config();

const mongoose = require('mongoose');

// main().catch((err) => console.log(err));

var dbState = [
  {
    value: 0,
    label: 'disconnected',
  },
  {
    value: 1,
    label: 'connected',
  },
  {
    value: 2,
    label: 'connecting',
  },
  {
    value: 3,
    label: 'disconnecting',
  },
];

const connection = async function main() {
  try {
    const options = {
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
      dbName: process.env.DB_NAME,
    };
    await mongoose.connect(process.env.DB_HOST, options);
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find((f) => f.value == state).label, 'to db'); // connected to db
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  } catch (error) {
    console.error('Error connecting to the database. \n', error);
  }
};
module.exports = connection;
