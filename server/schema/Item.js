const mongoose = require("mongoose");

const item = new mongoose.Schema(
  {
    // visibility on the store
    visible: { type: Boolean, default: false },
    // type => Clothes, Music
    type: { type: String },
    // product name => Float in the moon
    name: String,
    // groupe name
    groupe_id: mongoose.ObjectId,
    // iframe bandcamp
    iframe: { type: String, default: undefined },
    // description
    description: String,
    // picture url
    picture: String,
    // date
    date: { type: Date, default: new Date() },
  },
  { collection: "item" }
);

module.exports = mongoose.model("Item", item);
