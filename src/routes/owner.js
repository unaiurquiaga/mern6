const express = require("express");
const {
  reloadOwner,
  getAllOwners,
  getOwnerById,
  createNewOwner,
  updateOwner,
  updatePetFromOwner,
  deleteOwner,
} = require("../controllers/owner");

const ownerRouters = express.Router();

ownerRouters.post("/reload", reloadOwner);
ownerRouters.get("/", getAllOwners);
ownerRouters.get("/:id", getOwnerById);
ownerRouters.post("/", createNewOwner);
ownerRouters.put("/:id", updateOwner);
ownerRouters.put("/pet/:id", updatePetFromOwner);
ownerRouters.delete("/:id", deleteOwner);

module.exports = ownerRouters;