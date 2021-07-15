const mongoose = require("mongoose");

const video = new mongoose.Schema(
  {
    // picture path
    img: String,
    // For Lovers Sessions
    session_name: String,
    // youtube url
    url: String,
    // date
    date: { type: Date, default: new Date() },
  },
  { collection: "video" }
);

module.exports = mongoose.model("Video", video);
