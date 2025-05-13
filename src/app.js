const express = require("express");

const app = express();

app.use("/contact", (req, res) => {
  res.send("This is the contact us Page");
});

app.use("/", (req, res) => {
  res.send("Namaste");
});

app.listen(1234, () => {
  console.log("Server is running on Port 1234");
});
