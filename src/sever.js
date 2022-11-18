import configviewengine from "./config/viewengine";
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.port;

configviewengine(app);

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/about", (res, req) => {
  res.send(`i'm Dat`);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
