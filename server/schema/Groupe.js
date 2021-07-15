const mongoose = require("mongoose");

const groupe = new mongoose.Schema(
  {
    name: String,
    img: String,
    // For Lovers Sessions
    bio: String,
    // { name: "facebook", icon: "", value: req.body.facebook }
    social_network: { type: Array, default: [] },
  },
  { collection: "groupe" }
);

module.exports = mongoose.model("Groupe", groupe);
