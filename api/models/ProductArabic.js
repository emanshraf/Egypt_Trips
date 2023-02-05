const mongoose = require("mongoose");

const ProductArabicSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    comment:{ type: String },
    time: { type: String },
    desc: { type: String },

    description1: { type: String },
    description2: { type: String },
    description3: { type: String },
    
    program1: { type: String },
    program2: { type: String },
    program3: { type: String },
    program4: { type: String },
    program5: { type: String },
    program6: { type: String },
    program7: { type: String },
    program8: { type: String },
 
    programextra1: { type: String },
    programextra2: { type: String },
    programextra3: { type: String },
    programextra4: { type: String },
    programextra5: { type: String },
    programextra6: { type: String },
    programextra7: { type: String },
    programextra8: { type: String },
    programextra9: { type: String },
    programextra10: { type: String },
    programextra11: { type: String },
    programextra12: { type: String },
    programextra13: { type: String },
    
    prog1: { type: String },
    prog2: { type: String },
    prog3: { type: String },
    prog4: { type: String },
    prog5: { type: String },
    prog6: { type: String },
    prog7: { type: String },
    prog8: { type: String },

    desc1: { type: String },
    desc2: { type: String },
    desc3: { type: String },
    desc4: { type: String },
    desc5: { type: String },

    img: { type: String, required: true },
    categories: { type: Array },
    gallary:{ type: Array },
    price: { type: Number,  },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductArabic", ProductArabicSchema);