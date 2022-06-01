const express = require("express");
const router = express.Router();

// import  protected-routes middlewares
const {protectedStudent} = require("../middlewares/authMiddlewares");


//import controllers
const {
    getStudentProfile,
    updateStudentProfile,
    deleteStudentProfile,
    home,

    // getInvoice
} = require("../controllers/studentController");

//customer profile routes

router.route("/profile").get(protectedStudent,getStudentProfile);
router.route("/updateProfile").put(protectedStudent,updateStudentProfile);
router.route("/deleteProfile").delete(protectedStudent,deleteStudentProfile);
router.route("/home").get(protectedStudent,home);

module.exports = router; 