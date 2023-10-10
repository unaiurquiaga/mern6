const mongoose = require("mongoose");

const owner = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    surname: { type: String, required: true, trim: true },
    avatar: { type: String, required: true, trim: true },
    age: { type: Number, required: true, trim: true },
    vehicles: {
      bikes: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Bike",
        },
      ],
      cars: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Car",
        },
      ],
    },
  },
  {
    collection: "owner",
  },
);

const ResponsiblePerson = mongoose.model(
  "ResponsiblePerson",
  responsiblePerson,
  "responsiblePerson",
);

module.exports = ResponsiblePerson;