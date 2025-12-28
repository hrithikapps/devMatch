const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.use(express.json());

//get user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

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

// delete a user
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted successfully");
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

//update data of a user
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    console.log(user);
    res.send("User updated successfully");
  } catch (error) {
    res.status(400).send("UPDATE FAILED" + error.message);
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
