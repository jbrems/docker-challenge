const mongoose = require('mongoose');
const { initializeData } = require('./initialization');

function connect () {
  const mongodbConnectionString = 'mongodb://localhost/dockker-challenge';
  console.log(`🔌 Connecting to MongoDB at ${mongodbConnectionString} ...`);
  mongoose.connect(mongodbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
  
  mongoose.connection.on('open', () => {
    console.log('🔌 MongoDB connection established.');
    initializeData();
  });
}

module.exports = {
  connect,
};
