const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    images: { type: [String], trim: true },
    type: { type: String, required: true, trim: true },
    color: { type: String, required: true, trim: true },
    age: { type: Number, required: true, trim: true },
    owner: { type: mongoose.Types.ObjectId, ref: "Owner" },
  },
  {
    collection: "bikes",
  },
);

const Bike = mongoose.model("Bike", bikeSchema, "puppies");

module.exports = Bike;