const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");

app.listen( 1000, () =>{
    console.log("Server is running at port 1000.");
});
