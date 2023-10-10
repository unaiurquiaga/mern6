const ownerData = require("../data/mock-owner");
const Owner = require("../models/owner");
const {
  getAllOwnersFromDB,
  getOwnerByIdFromDB,
  createPersonInDB,
  updateOwnerFromDB,
  updateVehicleFromOwnerFromDB,
  deleteOwnerByIdFromDB,
} = require("../repositories/owners");

const reloadOwner = async (req, res) => {
  try {
    await Owner.collection.drop();
    const newOwners = await Owner.insertMany(
      ownerData,
    );
    return res.status(200).json({ data: newOwners });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const getAllOwners = async (req, res) => {
  try {
    const owners = await getAllOwnersFromDB(Owner);
    return res.status(200).json({ data: owners });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const getOwnerById = async (req, res) => {
  try {
    const { id } = req.params;
    const owner = await getOwnerByIdFromDB(id, Owner);
    return res.status(200).json({ data: owner });
  } catch (error) {
    return res.status(404).json({ data: error });
  }
};

const createNewOwner = async (req, res) => {
  try {
    const newPerson = await createPersonInDB(req.body, Owner);
    return res.status(201).json({ data: newPerson });
  } catch (error) {
    console.log("No se ha creado correctamente", error);
    return res.status(500).json({ data: error.message });
  }
};

const updateOwner = async (req, res) => {
  try {
    const { id } = req.params;
    const updateOwner = await updateOwnerFromDB(
      id,
      req.body,
      Owner,
    );
    return res.status(200).json({ data: updateOwner });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const updateVehicleFromOwner = async (req, res) => {
  try {
    const { id } = req.params;
    const updateOwner = await updateVehicleFromOwnerFromDB(
      id,
      req.body,
      Owner,
    );

    if (!updateOwner) {
      return res.status(404).json({ data: "Id inválido! ❌" });
    }

    return res.status(200).json({ data: updateOwner });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const deleteOwner = async (req, res) => {
  try {
    const { id } = req.params;
    deleteOwnerByIdFromDB(id, Owner);
    return res.status(200).json({ data: "Eliminado correctamente!" });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

module.exports = {
  reloadOwner,
  getAllOwners,
  getOwnerById,
  createNewOwner,
  updateOwner,
  updateVehicleFromOwner,
  deleteOwner,
};