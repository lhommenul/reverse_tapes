const mongoose = require("mongoose");

const product = new mongoose.Schema(
  {
    parent_id: { type: mongoose.ObjectId },
    // type CD Vinyle
    type: { type: String, default: undefined },
    // size
    size: { type: String, default: undefined },
    // price
    price :{
        // exemple 10.00
        ht: { type: Number },
        // exemple 12.00
        ttc: { type: Number },
        // exemple 12.00
        free: { type: Boolean, default: false },
    },
    quantity: { 
        // exemple  40 product type nb
        total:{type: Number ,default:0},
        // illimited or not in quantity
        illimited:{ type: Boolean, default: false },
        // product name => Float in the moon
        come_to_get_it: { type: Boolean, default: false },
    },
    // description
    description: { type: String },
    // picture
    picture: { type: Array, default: [] },
    // date
    date: { type: Date, default: new Date() },
  },
  { collection: "product" }
);

module.exports = mongoose.model("Product", product);
