// here we we'll write all the api setup and our database setup information.

const express = require("express");

// it holds all the library stuffs of the express
const app = express();

// import mongoose from mongoose library.
const mongoose = require("mongoose");

// import UserModel
const UserModel = require("./models/Users");

const cors = require("cors");

// automatically converts object into json.
app.use(express.json());

app.use(cors());

// it will connect to the database via the srv link.
mongoose.connect(
  "mongodb+srv://nikhillumesh:<password>@cluster0.0nibut0.mongodb.net/test"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({})
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;

  // to add a data, we'll use this syntax.,
  const newUser = new UserModel(user);

  // it is used to save d data.
  await newUser.save();

  res.json(user);
});

// to call the API to start.
serv = 3001;
app.listen(serv, () => {
  console.log("Server runs smoothly on " + serv);
});
