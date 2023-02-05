const mongoose = require("mongoose");

const CatigoryArabicSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    img: { type: String, required: true },
    desc1: { type: String,},
    desc2: { type: String,},
    desc3: { type: String,},
    desc4: { type: String,},
    desc5: { type: String,},
    desc6: { type: String,},
    desc7: { type: String,},
    desc8: { type: String,},

    subtitle1: {type: String,},
    subtitle2: {type: String,},
    subtitle3: {type: String,},
    
    categories: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CatigoryArabic", CatigoryArabicSchema);