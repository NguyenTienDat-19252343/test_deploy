const mongoose = require("mongoose");

const student = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  StudentID: {
    type: Number,
    require: true,
  },
  birthday: {
    type: Date,
    reuire: true,
  },
  phone: {
    type: Number,
  },
});

module.exports = { student };
