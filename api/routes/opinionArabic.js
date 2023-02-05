const OpinionArabic = require("../models/OpinionArabic");
const router = require("express").Router();



//CREATE
router.post("/",  async (req, res) => {
    const newOpinionArabic = new OpinionArabic(req.body);
    try {
      const savedOpinionArabic = await newOpinionArabic.save();
      res.status(200).json(savedOpinionArabic);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  //UPDATE
  router.put("/:id",  async (req, res) => {
    try {
      const updatedOpinionArabic = await OpinionArabic.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOpinionArabic);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  //DELETE
  router.delete("/:id",  async (req, res) => {
    try {
      await OpinionArabic.findByIdAndDelete(req.params.id);
      res.status(200).json("Opinion has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  //GET one
  router.get("/find/:id", async (req, res) => {
    try {
      const opinionArabic = await OpinionArabic.findById(req.params.id);
      res.status(200).json(opinionArabic);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET ALL 
  router.get("/find", async (req, res) => {
    try {
      const opinionArabic = await OpinionArabic.find();
      res.status(200).json(opinionArabic);
    } catch (err) {
      res.status(500).json(err);
    }
  });
 
  module.exports = router;