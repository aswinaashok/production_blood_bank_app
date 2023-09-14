const express = require("express");
const { registerController, loginController, currentUserController,} = require("../controllers/authController"); // Import registerController from authController

const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// Define routes
//register || post
router.post("/register", registerController);

//login || post
router.post("/login", loginController);

//get current user || get
router.get('/current-user',authMiddleware,currentUserController)

module.exports = router;
