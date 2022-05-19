var express = require("express");
var router = express.Router();
const ProductModel = require("../models/product-model");

router.get("/", async function (req, res) {
  const products = await ProductModel.find();
  res.status(200).json(products);
});

router.post("/", async function (req, res) {
  const product = await ProductModel.create(req.body);
  res.status(201).json(product);
});

router.put("/", async function (req, res) {
  const { _id, price } = req.body;
  const product = await ProductModel.findById({ _id });

  product.price = price;
  await product.save();
  res.status(200).json(product);
});

router.delete("/:id", async function (req, res) {
  await ProductModel.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json("Product successfully deleted");
});

module.exports = router;
