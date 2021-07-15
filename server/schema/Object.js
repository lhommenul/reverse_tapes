const mongoose = require("mongoose");

const object = new mongoose.Schema(
  {
    parent_id: { type: mongoose.ObjectId },
    // type CD Vinyle
    type: { type: String, default: undefined },
    // size
    size: { type: Array, default: undefined },
    // exemple 10.00
    price_ht: { type: Number },
    // exemple 12.00
    price_ttc: { type: Number },
    // exemple 12.00
    price_free: { type: Boolean, default: false },
    // illimited or not in quantity
    quantity_illimited: { type: Boolean, default: false },
    // illimited or not in quantity
    quantity: { type: Number },
    // product name => Float in the moon
    come_to_get_it: { type: Boolean, default: false },
    // description
    description: { type: String },
    // picture
    picture: { type: Array, default: [] },
    // date
    date: { type: Date, default: new Date() },
  },
  { collection: "object" }
);

module.exports = mongoose.model("Object", object);
