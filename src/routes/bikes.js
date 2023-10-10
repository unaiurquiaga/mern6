const express = require("express");
const {
  getAllBikes,
  getBikeById,
  createBike,
  updateBikeById,
  deleteBikenById,
  reloadBikes,
} = require("../controllers/bikes");

const bikesRouters = express.Router();

bikesRouters.post("/reload", reloadBikes);
bikesRouters.get("/", getAllBikes);
bikesRouters.get("/:id", getBikeById);
bikesRouters.post("/", createBike);
bikesRouters.put("/:id", updateBikeById);
bikesRouters.delete("/:id", deleteBikenById);

module.exports = bikesRouters;