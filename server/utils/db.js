const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI; // Replace with your MongoDB URI

// mongoose.connect(dbURI);
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(0); // Exit process with failure
  }
}
module.exports = connectDB;