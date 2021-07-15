const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    username: String,
    password: String,
    connected: String,
  },
  { collection: "user" }
);

module.exports = mongoose.model("User", user);
