const { student } = require("../model/model");

const studentcontroller = {
  //add student
  addstudent: async (req, res) => {
    try {
      const newstudent = new student(req.body);
      const savestudent = await newstudent.save();
      res.status(200).json(savestudent);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = studentcontroller;
