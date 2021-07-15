const mongoose = require("mongoose");

const object = new mongoose.Schema(
  {
    nb_command: { type: Number },
    name: { type: String },
    first_name: { type: String },
    email: { type: String },
    adress: { type: String },
    city: { type: String },
    mobile_number: { type: String },
    phone_number: { type: String },
    shop: { type: Object },
  },
  { collection: "command" }
);

module.exports = mongoose.model("Command", object);
