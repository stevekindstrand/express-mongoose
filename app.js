var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var productRouter = require("./routes/product");
var orderRouter = require("./routes/order");

var app = express();
const PORT = 5000;

async function init() {
  try {
    const options = { useNewUrlParser: true, useUnifiedTopology: true };
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose", options);
    console.log("Connected to database");
  } catch (error) {
    console.error(error);
  }
  app.listen(PORT, () =>
    console.log(`Server is up and running on port: ${PORT}`)
  );
}

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);

init();
module.exports = app;
