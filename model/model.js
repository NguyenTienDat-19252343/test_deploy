const mongoose = require("mongoose");

const student = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  StudentID: {
    type: Int16Array,
    require: true,
  },
  birthday: {
    type: Date,
    reuire: true,
  },
});
