const { addstudent } = require("../controllers/studentController");

const Router = require("express").Router();

Router.post("/", addstudent);

module.exports = Router;
