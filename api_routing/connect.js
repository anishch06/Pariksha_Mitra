const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbURI = 'mongodb://127.0.0.1:27017/ParikshamitraDB';
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
