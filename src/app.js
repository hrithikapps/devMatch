const express = require("express");
const connectDB = require("./config/database");
const app = express();

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(1234, () => {
      console.log("Server is successfuly listening to port 1234");
    });   
  })
  .catch((err) => {
    console.log("Database cannot be connected");
    console.error(err);
  });
