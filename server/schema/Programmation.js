const mongoose = require("mongoose");

const programmation = new mongoose.Schema(
  {
    date_start: String,
    date_end: String,
    hour_start: String,
    hour_end: String,
    location: String,
    price: Number,
    price_free: Boolean,
    groupe: Array,
    img: String,
  },
  { collection: "programmation" }
);

module.exports = mongoose.model("Programmation", programmation);
