const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productSchema = new Schema({
  prodName: {
    type: String,
    required: true,
    trim: true,
  },
  prodDescrip: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  prodImages: {
    type: String,
  },
  tags: {
    type: [String],
  },
});

const Product = model("Product", productSchema);
module.exports = Product;
