const kategoriRoute = require("express").Router();
const { kategoriController } = require("../controllers");

kategoriRoute.get("/", kategoriController.getKategori);
kategoriRoute.post("/add", kategoriController.tambahKategori);

kategoriRoute.put("/edit/:id", kategoriController.editKategori);

kategoriRoute.delete("/delete/:id", kategoriController.deleteKategori);

module.exports = kategoriRoute;
