const mongoose = require("mongoose");

const OpinionArabicSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    opinion: { type: String, required: true },
    img: { type: String }, 
    link: { type: String }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("OpinionArabic", OpinionArabicSchema);