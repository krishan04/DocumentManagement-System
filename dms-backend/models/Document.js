const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
  title: String,
  tags: [String],
  filePath: String,
  owner: String,
  version: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Document", DocumentSchema);