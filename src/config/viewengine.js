import Express from "express";

const configviewengine = (app) => {
  app.use(Express.static(__dirname + "/public"));
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

export default configviewengine;
