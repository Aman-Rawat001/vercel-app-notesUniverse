const express = require("express");
// const router = express.Router();
const app = express();
require("./db/conn");
var bodyParser = require('body-parser')
const User = require("./models/userSchema.js");
const { json } = require("express");

var jsonParser = bodyParser.json()
const port = process.env.PORT || 5000;

app.post("/register", jsonParser, async (req, res) => {
  console.log("data recieved");
  // console.log(req.body);
  const { name, email, college, query } = req.body;
  if (!name || !email || !college || !query) {
    return res.status(422).json({ error: "plz fill all input fields." });
  }
  try {
    const user = new User({ name, email, college, query });
    await user.save();
    res.status(201).json({ message: "user successfully registered" });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
