const Opinion = require("../models/Opinion");
const router = require("express").Router();



//CREATE
router.post("/",  async (req, res) => {
    const newOpinion = new Opinion(req.body);
    try {
      const savedOpinion = await newOpinion.save();
      res.status(200).json(savedOpinion);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  //UPDATE
  router.put("/:id",  async (req, res) => {
    try {
      const updatedOpinion = await Opinion.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOpinion);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  //DELETE
  router.delete("/:id",  async (req, res) => {
    try {
      await Opinion.findByIdAndDelete(req.params.id);
      res.status(200).json("Opinion has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  //GET one
  router.get("/find/:id", async (req, res) => {
    try {
      const opinion = await Opinion.findById(req.params.id);
      res.status(200).json(opinion);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET ALL 
  router.get("/find", async (req, res) => {
    try {
      const opinion = await Opinion.find();
      res.status(200).json(opinion);
    } catch (err) {
      res.status(500).json(err);
    }
    // const qNew = req.query.new;
    // const qOpinion = req.query.opinion;
    // try {
    //   let opinion;
  
    //   if (qNew) {
    //     opinion = await Opinion.find().sort({ createdAt: -1 }).limit(1);
    //   } else if (qOpinion) {
    //     catigorie = await Opinion.find({
    //       categories: {
    //         $in: [qOpinion],
    //       },
    //     });
    //   } else {
    //     opinion = await Opinion.find();
    //   }
  
    //   res.status(200).json(opinion);
    // } catch (err) {
    //   res.status(500).json(err);
    // }
  });
 
  module.exports = router;