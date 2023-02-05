const ProductArabic = require("../models/ProductArabic");
const router = require("express").Router();

//CREATE

router.post("/",  async (req, res) => {
    const newProductArabic = new ProductArabic(req.body);
    
    try {
      const savedProductArabic = await newProductArabic.save();
      res.status(200).json(savedProductArabic);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //UPDATE
  router.put("/:id",  async (req, res) => {
    try {
      const updatedProductArabic = await ProductArabic.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProductArabic);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //DELETE
  router.delete("/:id",  async (req, res) => {
    try {
      await ProductArabic.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET PRODUCT
  router.get("/find/:id", async (req, res) => {
    try {
      const productArabic = await ProductArabic.findById(req.params.id);
      res.status(200).json(productArabic);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET ALL PRODUCTS
  router.get("/find", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let productsArabic;
  
      if (qNew) {
        productsArabic = await ProductArabic.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        productsArabic = await ProductArabic.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        productsArabic = await ProductArabic.find();
      }
  
      res.status(200).json(productsArabic);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;