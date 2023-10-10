const express = require("express");
const {
  getAllCars,
  getCarById,
  createCar,
  updateCarById,
  deleteCarById,
  reloadCars,
} = require("../controllers/cars");

const carsRouters = express.Router();

carsRouters.post("/reload", reloadCars);
carsRouters.get("/", getAllCars);
carsRouters.get("/:id", getCarById);
carsRouters.post("/", createCar);
carsRouters.put("/:id", updateCarById);
carsRouters.delete("/:id", deleteCarById);

module.exports = carsRouters;