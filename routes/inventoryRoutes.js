const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
//Add inventory || post
router.post("/create-inventory", authMiddleware, createInventoryController);

//get all blood records
router.get("/get-inventory", authMiddleware, getInventoryController);

//get all recent blood records
router.get("/get-recent-inventory", authMiddleware, getRecentInventoryController);

//get donar records
router.get("/get-donars", authMiddleware, getDonarsController);

//get hospital records
router.get("/get-hospitals", authMiddleware, getHospitalController);

//get organsation records
router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrganisationForHospitalController
);

//get hospital blood records
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

//get organisation records
router.get("/get-organisation", authMiddleware, getOrganisationController);


module.exports = router;
