const mongoose = require("mongoose");

const MapsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  loc: {
    type: { type: String },
    coordinates: [Number],
},
});

module.exports = mongoose.model("Comment", MapsSchema);