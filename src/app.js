const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  //creating a new isntance of the user model
  const user = new User(req.body);

  try {
    await user.save();
    res.status(300).send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving user", err.message);
  }
});

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
