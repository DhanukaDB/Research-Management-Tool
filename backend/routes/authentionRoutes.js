const express = require("express");
const router = express.Router();

// import controllers
const {
  registerAdmin,
  registerCustomer,
  login,
} = require("../controllers/authenticationController");


module.exports = router;