const getAllVehiclesFromDB = async (filter, Model) => {
  const filterOptions = {
    $or: [
      { name: { $regex: new RegExp(filter, "i") } },
      { type: { $regex: new RegExp(filter, "i") } },
      { color: { $regex: new RegExp(filter, "i") } },
      { owner: { $regex: new RegExp(filter, "i") } },
    ],
  };

  const vehicles = await Model.find(filter ? filterOptions : {});
  return vehicles;
};

const getVehicleByIdFromDB = async (id, Model) => {
  const vehicle = await Model.findById(id);
  return vehicle;
};

const createVehicleInDB = async (payload, Model) => {
  const newVehicle = new Model(payload);
  await newVehicle.save();

  return newVehicle;
};

const updateVehicleByIdInDB = async (id, payload, Model) => {
  const vehicle = await Model.findByIdAndUpdate(id, payload, { new: true });
  return vehicle;
};

const deleteVehicleByIdInDB = async (id, Model) => {
  await Model.deleteOne({ _id: id });
};

module.exports = {
  getAllVehiclesFromDB,
  getVehicleByIdFromDB,
  createVehicleInDB,
  updateVehicleByIdInDB,
  deleteVehicleByIdInDB,
};