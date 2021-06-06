const mongoose = require("mongoose");

// connecting mongo atlas DB
const DB =
  "mongodb+srv://amanrawat:%40amandeep%23123@cluster0.ezntm.mongodb.net/notesUniverseDB?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });
