const mongoose = require("mongoose");

const object = new mongoose.Schema(
  {
    description: { type: String, default: "Aucune Description" },
    // {name : 'facebook' , icon : '/path/' , value:'http://linkto'}
    social_network: { type: Array, default: new Array() },
  },
  { collection: "apropos" }
);

module.exports = mongoose.model("APropos", object);
