const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const tagSchema = new Schema({
  tagName: {
    type: String,
    required: true,
    trim: true,
  },
  tagDescription: {
    type: String,
  },
});

const Tag = model("Tag", tagSchema);
module.exports = Tag;
