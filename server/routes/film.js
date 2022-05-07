const filmRoute = require("express").Router();
const { filmController } = require("../controllers");

filmRoute.get("/", filmController.lihatFilm);
filmRoute.post("/add", filmController.tambahFilm);
filmRoute.put("/edit/:id", filmController.editFilm);
filmRoute.delete("/delete/:id", filmController.hapusFilm);

module.exports = filmRoute;
