const penghubungRoute = require("express").Router();
const { penghubungController } = require("../controllers");

penghubungRoute.get("/", penghubungController.lihatPenghubung);
penghubungRoute.post("/add", penghubungController.createPenghubung);
penghubungRoute.delete("/delete/:id", penghubungController.deletePenghubung);

module.exports = penghubungRoute;
