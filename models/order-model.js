const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  ordernumber: Number,
  products: {
    type: [mongoose.Types.ObjectId],
    ref: "product",
  },
});

module.exports = mongoose.model("order", OrderSchema);
