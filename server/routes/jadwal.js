const jadwalRoute = require("express").Router();
const { jadwalController } = require("../controllers");

jadwalRoute.get("/", jadwalController.lihatJadwal);
jadwalRoute.post("/add", jadwalController.tambahJadwal);

jadwalRoute.put("/edit/:id", jadwalController.updateJadwal);

jadwalRoute.delete("/delete/:id", jadwalController.deleteJadwal);
module.exports = jadwalRoute;
