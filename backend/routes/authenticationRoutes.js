const express = require("express");
const router = express.Router();

// import controllers
const {
  register,
  login,
  forgotpassword,
  resetpassword,
  
} = require("../controllers/authenticationController");
 
//register Routes
//router.route("/admin").post(registerAdmin);
router.route("/register").post(register);

//login routes
router.route("/login").post(login);


router.route("/forgotpassword").post(forgotpassword);

router.route("/resetpassword/:resetToken").post(resetpassword);

module.exports = router;