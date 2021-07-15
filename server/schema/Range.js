const mongoose = require("mongoose");

const range = new mongoose.Schema(
  {
    // Range for new products
    type: { type: String, default: "Range Type Undefined" },
    // list of ObjectId  
    products: { type: Array, default: [] },
    // If the product if visible for clients
    visibility:{type:Boolean,default:false},
    // large description for the product
    description: { type: String },
    // picture for the range
    pictures: { type: Array, default: [] },
    // date of the creation of the range
    date: { type: Date, default: new Date() },
  },
  { collection: "range" }
);

module.exports = mongoose.model("Range", range);
