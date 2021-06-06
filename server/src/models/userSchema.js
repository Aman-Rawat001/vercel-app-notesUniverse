// creating/defining userSchema.
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // user must fill its name for for submittion.
  },
  email: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("CONTACT_ADMIN", userSchema); // (collection_name, document schema)

module.exports = User;
