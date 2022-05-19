var express = require("express");
const orderModel = require("../models/order-model");
var router = express.Router();

router.get("/", async function (req, res) {
  const orders = await orderModel.find().populate("products");
  res.status(200).json(orders);
});

router.post("/", async function (req, res) {
  const order = await orderModel.create(req.body);
  res.status(201).json(order);
});

module.exports = router;
