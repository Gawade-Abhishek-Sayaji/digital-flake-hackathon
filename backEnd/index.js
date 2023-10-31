const express = require("express");
const app = express();
const cors = require("cors");
require("./db/config");
const User = require("./db/User");

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  let user = req.body;
  if (user.email && user.password) {
    let result = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    }).select("-password");
    console.log(result);
    if (result) {
      res.send(result);
    } else {
      res.send({ message: "Invalid Credentials" });
    }
  } else {
    res.send({ message: "All fields are required" });
  }
});

app.listen(5000);
