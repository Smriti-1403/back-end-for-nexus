const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  desc: {
    type: String,
  },
  code: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
