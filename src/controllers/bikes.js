const bikesData = require("../data/mock-bikes");
const Bike = require("../models/bike");
const {
  getAllVehiclesFromDB,
  getVehicleByIdFromDB,
  createVehicleInDB,
  updateVehicleByIdInDB,
  deleteVehicleByIdInDB,
} = require("../repositories/vehicles");

const Model = Bike;

const reloadBikes = async (req, res) => {
  try {
    await Puppy.collection.drop();
    const newBikes = await Puppy.insertMany(bikesDataikesData);
    return res.status(200).json({ data: newBikes });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const getAllBikes = async (req, res) => {
  try {
    const { filter } = req.query;
    const bikes = await getAllVehiclesFromDB(filter, Model);
    return res.status(200).json({ data: bikes });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const getBikeById = async (req, res) => {
  try {
    const { id } = req.params;
    const bike = await getVehicleByIdFromDB(id, Model);
    return res.status(200).json({ data: bike });
  } catch (error) {
    console.log("El id es inválido:", error);
    return res.status(404).json({
      data: "El valor ingresado es incorrecto!",
    });
  }
};

const createBike = async (req, res) => {
  try {
    const newBike = await createVehicleInDB(req.body, Model);
    return res.status(201).json({ data: newBike });
  } catch (error) {
    console.log("No se ha creado correctamente", error);
    return res.status(500).json({ data: error.message });
  }
};

const updateBikeById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateCar = await updateVehicleByIdInDB(id, req.body, Model);
    return res.status(200).json({ data: updateCar });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const deleteBikenById = async (req, res) => {
  try {
    const { id } = req.params;
    deleteVehicleByIdInDB(id, Model);
    return res.status(200).json({ data: "Eliminado correctamente! 😼" });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

module.exports = {
  reloadBikes,
  getAllBikes,
  getBikeById,
  createBike,
  updateBikeById,
  deleteBikenById,
};