const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);

    console.log("DB conected");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
