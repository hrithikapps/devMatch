const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://hrithikk2765_db_user:t7VuO9YoeFKKd0Xn@namastenode.wpw1m7f.mongodb.net/devMatch"
  );
};

module.exports = connectDB;
