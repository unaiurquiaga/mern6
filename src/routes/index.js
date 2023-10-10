const express = require("express");
const carsRouters = require("./cars");
const bikesRouters = require("./bikes");
const ownerRouters = require("./owner");
const relatedModelsRouters = require("./relatedModels");

const router = express.Router();

router.use("/cars", carsRouters);
router.use("/bikes", bikesRouters);
router.use("/owners", ownerRouters);
router.use("/relatedmodels", relatedModelsRouters);

module.exports = router;