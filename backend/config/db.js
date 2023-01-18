const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongodb connected : ${connect.connection.host}`);
  } catch (err) {
    console.clear(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
