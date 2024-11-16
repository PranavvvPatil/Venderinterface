const express = require("express");
const controller = require("../controllers/authController/authController");

const router = express.Router();

router.post("/login", controller.login);
router.post("/register", controller.register);
router.post("/google", controller.googleAuth);

module.exports = router;