const Car = require("../models/car");
const Bike = require("../models/bike");
const Owner = require("../models/owner");

const {
  getAllInformationOwnerFromDB,
  getAllInformationVehicleFromDB,
  removeVehicleFromDB,
} = require("../repositories/relatedModels");

const getAllInformationPersonsAndVehicles = async (req, res) => {
  try {
    const person = await Owner.find()
      .populate("vehicles.bikes")
      .populate("vehicles.cars");

    return res.status(200).json({ data: person });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const getAllInformationOwner = async (req, res) => {
  try {
    const { id } = req.params;
    const person = await getAllInformationOwnerFromDB(id, Owner);

    return res.status(200).json(person);
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const getAllInformationCar = async (req, res) => {
  try {
    const { id } = req.params;
    const kitten = await getAllInformationVehicleFromDB(id, Car);
    return res.status(200).json({ data: car });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const getAllInformationBike = async (req, res) => {
  try {
    const { id } = req.params;
    const bike = await await getAllInformationVehicleFromDB(id, Bike);
    return res.status(200).json(bike);
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const updateVehicleByIdFromOwner = async (req, res) => {
  try {
    const { id } = req.params;
    const { bikeIdToRemove, carIdToRemove } = req.body;

    const update = {
      $pull: {
        "vehicles.bikes": bikeIdToRemove,
        "vehicles.cars": carIdToRemove,
      },
    };

    const person = await removeVehicleFromDB(id, update, Owner);
    res.status(200).json({ data: person });
  } catch (error) {
    res.status(500).json({ data: error.message });
  }
};

module.exports = {
  getAllInformationPersonsAndVehicles,
  getAllInformationOwner,
  getAllInformationCar,
  getAllInformationBike,
  updateVehicleByIdFromOwner,
};