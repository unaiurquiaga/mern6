const carsData = require("../data/mock-cars");
const Car = require("../models/car");
const {
  getAllVehiclesFromDB,
  getVehicleByIdFromDB,
  createVehicleInDB,
  updateVehicleByIdInDB,
  deleteVehicleByIdInDB,
} = require("../repositories/vehicles");

const Model = Car;

const reloadCars = async (req, res) => {
  try {
    await Car.collection.drop();
    const newCars = await Car.insertMany(carsData);
    return res.status(200).json({ data: newCars });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const getAllCars = async (req, res) => {
  try {
    const { filter } = req.query;
    const cars = await getAllVehiclesFromDB(filter, Model);
    return res.status(200).json({ data: cars });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await getVehicleByIdFromDB(id, Model);
    return res.status(200).json({ data: car });
  } catch (error) {
    console.log("El id es inválido:", error);
    return res.status(404).json({
      data: "El valor ingresado es incorrecto!",
    });
  }
};

const createCar = async (req, res) => {
  try {
    const newCar = await createVehicleInDB(req.body, Model);
    return res.status(201).json({ data: newCar });
  } catch (error) {
    console.log("Lo siento! No se ha creado", error);
    return res.status(500).json({ data: error.message });
  }
};

const updateCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateCar = await updateVehicleByIdInDB(id, req.body, Model);
    return res.status(200).json({ data: updateCar });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const deleteCarById = async (req, res) => {
  try {
    const { id } = req.params;
    deleteVehicleByIdInDB(id, Model);
    return res.status(200).json({ data: "Eliminado correctamente!" });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

module.exports = {
  reloadCars,
  getAllCars,
  getCarById,
  createCar,
  updateCarById,
  deleteCarById,
};