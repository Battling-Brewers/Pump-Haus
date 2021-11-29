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
  },
  prodImages: {
    type: [String],
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
  tags: {
    type: [Schema.Types.ObjectId],
    ref: "Tag",
    required: true,
  },
});

const Product = model("Product", productSchema);
module.exports = Product;
