const getAllInformationOwnerFromDB = async (id, Model) => {
  const person = await Model.findById(id)
    .populate("vehicles.bikes")
    .populate("vehicles.cars");

  return person;
};

const getAllInformationVehicleFromDB = async (id, Model) => {
  const vehicle = await Model.findById(id).populate({
    path: "owner",
    select: "name surname avatar age",
  });

  return vehicle;
};

const removeVehicleFromDB = async (id, payload, Model) => {
  const person = Model.findByIdAndUpdate(id, payload, { new: true });

  return person;
};

module.exports = {
  getAllInformationOwnerFromDB,
  getAllInformationVehicleFromDB,
  removeVehicleFromDB,
};