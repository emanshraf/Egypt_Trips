const Catigory = require("../models/Catigory");
const router = require("express").Router();



//CREATE
router.post("/",  async (req, res) => {
    const newCatigory = new Catigory(req.body);
    try {
      const savedCatigory = await newCatigory.save();
      res.status(200).json(savedCatigory);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  //UPDATE
  router.put("/:id",  async (req, res) => {
    try {
      const updatedCatigory = await Catigory.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCatigory);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  //DELETE
  router.delete("/:id",  async (req, res) => {
    try {
      await Catigory.findByIdAndDelete(req.params.id);
      res.status(200).json("Catigory has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  //GET Catigory
  router.get("/find/:id", async (req, res) => {
    try {
      const catigory = await Catigory.findById(req.params.id);
      res.status(200).json(catigory);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET ALL catigories
  router.get("/find", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let catigorie;
  
      if (qNew) {
        catigorie = await Catigory.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        catigorie = await Catigory.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        catigorie = await Catigory.find();
      }
  
      res.status(200).json(catigorie);
    } catch (err) {
      res.status(500).json(err);
    }
  });
 
  module.exports = router;
