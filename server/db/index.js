const mongoose = require('mongoose');

const connectionString = 'mongodb://mongo:27017/?readPreference=primary&ssl=false';

mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;
