const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
const studentRouter = require("./routers/routers");

dotenv.config();
app.get("/", (req, res) => {
  res.status(200).json("hello");
});
mongoose.connect(process.env.mongodb_url, () => {
  console.log("Connected to DB");
});

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("common"));

app.use("/student", studentRouter);

app.listen(5500, () => {
  console.log("Server is running at port 5500.");
});
