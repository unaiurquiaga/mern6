const getAllOwnersFromDB = async (Model) => {
  const owners = await Model.find().populate("bike").populate("car");
  return owners;
};

const getOwnerByIdFromDB = async (id, Model) => {
  const owner = await Model.findById(id);
  return owner;
};

const createPersonInDB = async (payload, Model) => {
  const newPerson = new Model(payload);
  await newPerson.save();

  return newPerson;
};

const updateOwnerFromDB = async (id, payload, Model) => {
  const owner = await Model.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return owner;
};

const updateVehicleFromOwnerFromDB = async (id, payload, Model) => {
  const update = {};

  update.$addToSet = {
    "vehicles.bikes": { $each: payload.vehicles.bikes || [] },
    "vehicles.cars": { $each: payload.vehicles.cars || [] },
  };

  const owner = await Model.findByIdAndUpdate(id, update, { new: true });
  return owner;
};

const deleteOwnerByIdFromDB = async (id, Model) => {
  await Model.deleteOne({ _id: id });
};

module.exports = {
  getAllOwnersFromDB,
  getOwnerByIdFromDB,
  createPersonInDB,
  updateOwnerFromDB,
  updateVehicleFromOwnerFromDB,
  deleteOwnerByIdFromDB,
};