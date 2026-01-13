const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema({
  site: {
    type: String,
    required: true
  },
  seconds: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Track", TrackSchema);
