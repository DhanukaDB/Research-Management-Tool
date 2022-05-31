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
    const { username , phoneno, password} = req.body;
   // let existingEmail = await findEmailDuplicates(email, res);
    //if (existingEmail === null)
   
      try {
        // const ppUploadRes = await cloudinary.uploader.upload(ppEnc, {
        //   upload_preset: "Profile_Pictures",
        // });
        const stadminaff = await Admin.create({  

          username,
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