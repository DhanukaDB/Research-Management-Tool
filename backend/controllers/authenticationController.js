 const Admin = require("../models/Admin");
const Staff = require("../models/Staff");
const Student = require ("../models/Student");

exports.registerStudent = async (req, res, next) => {
    const { studentID, name, email, contactNumber, password, ppEnc } = req.body;
   // let existingEmail = await findEmailDuplicates(email, res);
    //if (existingEmail === null)
   
      try {
        // const ppUploadRes = await cloudinary.uploader.upload(ppEnc, {
        //   upload_preset: "Profile_Pictures",
        // });
        const student = await Student.create({  
          studentID,
          name,
          email,
          contactNumber,
          password,
         
          
        });
       // const token = await Student.getSignedToken();
        res.status(201).json({ success: true, token, role: "student" });
      } catch (error) {
        res.status(500).json({
          error,
          desc: "Error occurred in registerstudent" + error,
        });
      }
    }
  ;

  exports.registerStaff = async (req, res, next) => {
    const { staffID, name, email, password ,role} = req.body;
   // let existingEmail = await findEmailDuplicates(email, res);
    //if (existingEmail === null)
   
      try {
        // const ppUploadRes = await cloudinary.uploader.upload(ppEnc, {
        //   upload_preset: "Profile_Pictures",
        // });
        const staff = await Staff.create({  
          staffID,
          name,
          email,
          password,
          role,
         
          
        });
       // const token = await Staff.getSignedToken();
        res.status(201).json({ success: true });
      } catch (error) {
        res.status(500).json({
          error,
          desc: "Error occurred in registerstudent" + error,
        });
      }
    }
  ;
  
  exports.registerAdmin = async (req, res, next) => {
    const { email , phoneno, password} = req.body;
   // let existingEmail = await findEmailDuplicates(email, res);
    //if (existingEmail === null)
   
      try {
        // const ppUploadRes = await cloudinary.uploader.upload(ppEnc, {
        //   upload_preset: "Profile_Pictures",
        // });
        const admin = await Admin.create({  

          email,
          phoneno,
          password,
         
        });
       // const token = await Admin.getSignedToken();
        res.status(201).json({ success: true });
      } catch (error) {
        res.status(500).json({
          error,
          desc: "Error occurred in registerstudent" + error,
        });
      }
    }
  ;



  // login controller function
exports.login = async (req, res, next) => {
  const { email, password, role } = req.body;
  //check user
  let user;
  if (role === "admin") {
    user = await Admin.findOne({ email: email }).select("+password");
  } else if (role === "student") {
    user = await Student.findOne({ email: email }).select("+password");
  } else if (role === "supervisor") {
    user = await Staff.findOne({ email: email }).select(
      "+password"
    );
  } else if (role === "co-supervisor") {
    user = await Staff.findOne({ email: email }).select(
      "+password"
    );
  } else if (role === "pannel-member") {
    user = await Staff.findOne({ email: email }).select(
      "+password"
    );
  } else {
    res.status(422).json({
      success: false,
      desc: "Can not find the user - Please check again",
    });
  }
  //check password match
  try {
    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      res.status(401).send({
        success: false,
        desc: "Invalid credentials - Please check again",
      });
    } else {
      sendToken(user, 200, res);
    }
  } catch (error) {
    next(error);
  }
};
