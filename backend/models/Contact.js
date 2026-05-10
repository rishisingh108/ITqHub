const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  message: String,
});

module.exports = mongoose.model("Contact", ContactSchema);