const mongoose = require("mongoose");

const SubCategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    despart1: { type: String },
    despart2: { type: String },
    despart3: { type: String },
    categories: {  type: String, },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SubCategory", SubCategorySchema);