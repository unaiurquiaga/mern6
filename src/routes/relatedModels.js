const express = require("express");

const {
  getAllInformationOwner,
  getAllInformationCar,
  getAllInformationBike,
  updateVehicleByIdFromOwner,
  getAllInformationPersonsAndVehicles,
} = require("../controllers/relatedModels");

const relatedModelsRouters = express.Router();

relatedModelsRouters.get("/owner", getAllInformationPersonsAndVehicles);
relatedModelsRouters.get("/owner/:id", getAllInformationOwner);
relatedModelsRouters.get("/car/:id", getAllInformationCar);
relatedModelsRouters.get("/bike/:id", getAllInformationBike);
relatedModelsRouters.put("/owner/:id", updateVehicleByIdFromOwner);

module.exports = relatedModelsRouters;