const express = require("express");

const app = express();

app.get("/user/:userId/:name/:password", (req, res) => {
  //route handler
  console.log(req.params);
  res.send({ firstName: "Kumar", lastName: "Hrithik" });
});

app.listen(1234, () => {
  console.log("Server is running on Port 1234");
});
