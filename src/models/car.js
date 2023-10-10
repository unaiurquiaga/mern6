const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    images: { type: [String], required: true, trim: true },
    type: { type: String, required: true, trim: true },
    color: { type: String, required: true, trim: true },
    age: { type: Number, required: true, trim: true },
    owner: { type: mongoose.Types.ObjectId, ref: "Owner" },
  },
  { collection: "cars" },
);

const Car = mongoose.model("Car", carSchema, "cars");

module.exports = Car;