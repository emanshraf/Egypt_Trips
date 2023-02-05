const CatigoryArabic = require("../models/CatigoryArabic");
const router = require("express").Router();

//CREATE
router.post("/",  async (req, res) => {
    const newCatigoryArabic = new CatigoryArabic(req.body);
    try {
      const savedCatigoryArabic = await newCatigoryArabic.save();
      res.status(200).json(savedCatigoryArabic);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  //UPDATE
  router.put("/:id",  async (req, res) => {
    try {
      const updatedCatigoryArabic = await CatigoryArabic.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCatigoryArabic);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  //DELETE
  router.delete("/:id",  async (req, res) => {
    try {
      await CatigoryArabic.findByIdAndDelete(req.params.id);
      res.status(200).json("Catigory has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  //GET Catigory
  router.get("/find/:id", async (req, res) => {
    try {
      const catigoryArabic = await CatigoryArabic.findById(req.params.id);
      res.status(200).json(catigoryArabic);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET ALL catigories
  router.get("/find", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let catigorieArabic;
  
      if (qNew) {
        catigorieArabic = await CatigoryArabic.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        catigorieArabic = await CatigoryArabic.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        catigorieArabic = await CatigoryArabic.find();
      }
  
      res.status(200).json(catigorieArabic);
    } catch (err) {
      res.status(500).json(err);
    }
  });
 
  module.exports = router;
