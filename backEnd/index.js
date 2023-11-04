const express = require("express");
const app = express();
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Category=require("./db/Category")

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

app.post("/add-category", async (req, res) => {
  if(req.body.name && req.body.description){
    let category = new Category(req.body);
    let result = await category.save();
    res.send(result);
  }else{
    res.send({message:"All fields are required"})
  }
})

app.get("/category-list", async (req, res) => {
  
  let category = await Category.find();
  res.send(category);
})

app.delete("/delete-category/:id",async (req, res) => {
  let result = await Category.deleteOne({ _id: req.params.id });
  res.send(result);
});

app.listen(5000);
